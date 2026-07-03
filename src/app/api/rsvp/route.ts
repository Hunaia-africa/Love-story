import { NextResponse } from "next/server";
import { Resend } from "resend";

/* RSVPs are emailed straight to the couple's inbox via Resend.
   Set RESEND_API_KEY in .env.local (see .env.example).
   `onboarding@resend.dev` works out of the box on any Resend account;
   swap FROM for a verified domain sender when one is set up. */

export const runtime = "nodejs";

const TO = "otienotamia@gmail.com";
const FROM = "Dave & Faizah RSVP <onboarding@resend.dev>";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );

export async function POST(req: Request) {
  let body: {
    name?: unknown;
    email?: unknown;
    attendance?: unknown;
    message?: unknown;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 2000);
  const attendance =
    body.attendance === "accepts" || body.attendance === "declines"
      ? body.attendance
      : null;

  if (!name || !attendance) {
    return NextResponse.json(
      { error: "Please include your name and whether you'll attend." },
      { status: 400 },
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  // const apiKey = process.env.RESEND_API_KEY;
  const apiKey = "re_2EinAARm_D1EnejxEuhLJgQuoR2SDasUG"
  if (!apiKey) {
    console.error("RSVP: RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "The RSVP mailbox isn't configured yet — please try again later." },
      { status: 500 },
    );
  }

  const accepts = attendance === "accepts";
  const verdict = accepts ? "Joyfully accepts" : "Regretfully declines";

  const html = `
  <div style="background:#f6f1e7;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;color:#2e241d;">
    <div style="max-width:560px;margin:0 auto;background:#fffdf8;border:1px solid #e2d5b8;border-radius:12px;overflow:hidden;">
      <div style="background:#452a1d;color:#f6f1e7;padding:22px 28px;">
        <p style="margin:0;font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:#e2be7a;">Wedding RSVP</p>
        <h1 style="margin:6px 0 0;font-size:26px;font-weight:500;">${esc(name)}</h1>
        <p style="margin:8px 0 0;font-size:15px;color:${accepts ? "#f2b44c" : "#d8c6ae"};">${verdict} ${accepts ? "🎉" : ""}</p>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          <tr>
            <td style="padding:10px 0;color:#7c6c59;width:34%;vertical-align:top;">Attendance</td>
            <td style="padding:10px 0;font-weight:600;">${verdict}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#7c6c59;border-top:1px solid #efe6d2;vertical-align:top;">Email</td>
            <td style="padding:10px 0;border-top:1px solid #efe6d2;">${email ? `<a href="mailto:${esc(email)}" style="color:#a9682f;">${esc(email)}</a>` : "<i>not shared</i>"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#7c6c59;border-top:1px solid #efe6d2;vertical-align:top;">Message</td>
            <td style="padding:10px 0;border-top:1px solid #efe6d2;white-space:pre-wrap;">${message ? esc(message) : "<i>—</i>"}</td>
          </tr>
        </table>
      </div>
      <div style="padding:14px 28px;background:#f6f1e7;border-top:1px solid #e9ddc5;font-size:12px;color:#7c6c59;">
        Dave &amp; Faizah · Traditional Wedding · 14.08.2026 · Kakamega Town
      </div>
    </div>
  </div>`;

  const text = [
    `Wedding RSVP`,
    ``,
    `Name: ${name}`,
    `Attendance: ${verdict}`,
    `Email: ${email || "not shared"}`,
    `Message: ${message || "—"}`,
    ``,
    `Dave & Faizah · 14.08.2026 · Kakamega Town`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email || undefined,
      subject: `RSVP — ${name} ${accepts ? "accepts ✓" : "declines ✕"}`,
      html,
      text,
    });
    if (error) {
      console.error("RSVP: Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your RSVP just now — please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("RSVP: send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your RSVP just now — please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
