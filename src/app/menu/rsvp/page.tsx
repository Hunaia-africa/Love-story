"use client";

/* Image 5 — "Kindly Rsvp" + dark card form with gold pill button. */

import { useRef, useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import PageShell from "@/components/PageShell";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { BrownSideFloral } from "@/components/decor";
import { SplitWords } from "@/components/motion/text";
import { Reveal, useDraw } from "@/components/motion/fx";
import { colors, radii } from "@/theme/tokens";

const Side = styled.div<{ $side: "left" | "right" }>`
  position: fixed;
  top: 50%;
  width: clamp(110px, 17vw, 220px);
  z-index: 0;
  pointer-events: none;
  color: #9c6a44;
  ${(p) =>
    p.$side === "left"
      ? "left: -2vw; transform: translateY(-72%);"
      : "right: -2vw; transform: translateY(-28%) scaleX(-1);"}

  svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 900px) {
    opacity: 0.4;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const Intro = styled(BodyItalic)`
  max-width: 46ch;
  margin: 1.3rem auto 2.4rem;
  color: ${colors.espresso};

  sup {
    font-size: 0.6em;
  }
`;

const Card = styled.form`
  position: relative;
  z-index: 1;
  width: min(620px, 100%);
  margin: 0 auto;
  background: linear-gradient(178deg, #3c2e26 0%, ${colors.cardBrown} 40%, #35271f 100%);
  border: 1px solid #e6d9b8;
  border-radius: 14px;
  box-shadow: 0 22px 50px rgba(43, 33, 28, 0.28);
  padding: clamp(1.7rem, 5vw, 2.8rem) clamp(1.3rem, 5vw, 2.6rem) clamp(1.5rem, 4vw, 2.2rem);
  color: #f3ecdd;
`;

const CardTitle = styled.h2`
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.8rem, 5.4vw, 2.5rem);
  margin: 0 0 1.8rem;
  color: #faf5ea;
`;

const FieldLabel = styled.label`
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1rem, 2.8vw, 1.2rem);
  letter-spacing: 0.02em;
  margin: 1.5rem 0 0.65rem;
  color: #f3ecdd;
`;

const Input = styled(TextField)`
  width: 100%;

  .MuiOutlinedInput-root {
    border-radius: ${radii.md};
    background: rgba(255, 251, 240, 0.04);
    color: #f6f0e2;
    font-family: var(--font-body);
    font-size: 1.05rem;

    fieldset {
      border-color: rgba(233, 221, 196, 0.55);
    }
    &:hover fieldset {
      border-color: rgba(233, 221, 196, 0.85);
    }
    &.Mui-focused fieldset {
      border-color: ${colors.goldBright};
      border-width: 1.5px;
    }
  }
`;

const OptionBtn = styled.button<{ $active: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  margin-top: 0.9rem;
  padding: clamp(1.3rem, 4vw, 1.9rem) 1.3rem;
  border-radius: ${radii.md};
  cursor: pointer;
  font-family: var(--font-display);
  font-size: clamp(1rem, 2.8vw, 1.15rem);
  letter-spacing: 0.02em;
  color: #f3ecdd;
  background: ${(p) =>
    p.$active ? "rgba(242, 180, 76, 0.16)" : "rgba(246, 241, 231, 0.09)"};
  border: 1.5px solid
    ${(p) => (p.$active ? colors.goldBright : "rgba(246, 241, 231, 0.16)")};
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(242, 180, 76, 0.12);
    border-color: rgba(242, 180, 76, 0.6);
  }
`;

const Submit = styled.button`
  display: block;
  width: 100%;
  margin-top: 1.9rem;
  padding: 1rem;
  border: none;
  border-radius: ${radii.pill};
  cursor: pointer;
  background: linear-gradient(180deg, #f7c05e 0%, ${colors.goldBright} 100%);
  color: #fffdf6;
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 3vw, 1.25rem);
  letter-spacing: 0.18em;
  text-indent: 0.18em;
  box-shadow: 0 10px 22px rgba(242, 180, 76, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.04);
    box-shadow: 0 14px 26px rgba(242, 180, 76, 0.42);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FinePrint = styled.p`
  margin: 1rem 0 0;
  text-align: center;
  font-family: var(--font-body);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: rgba(243, 236, 221, 0.55);
`;

const ErrorMsg = styled.p`
  margin: 0.9rem 0 0;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.9rem;
  color: #f2b44c;
`;

const Success = styled.div`
  text-align: center;
  padding: 2.2rem 0.4rem;

  h3 {
    font-family: var(--font-script);
    font-weight: 400;
    font-size: clamp(2.3rem, 7vw, 3.2rem);
    margin: 0 0 1rem;
    color: #f7e9c9;
  }
  p {
    font-family: var(--font-body);
    font-style: italic;
    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(243, 236, 221, 0.9);
    margin: 0;
  }
`;

type Attendance = "accepts" | "declines" | null;

export default function RsvpPage() {
  const floralsRef = useRef<HTMLDivElement>(null);
  useDraw(floralsRef, { trigger: "load", duration: 2.2, stagger: 0.03 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    if (!name.trim()) {
      setError("Please tell us your name.");
      return;
    }
    if (!attendance) {
      setError("Please let us know if you'll be attending.");
      return;
    }
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, attendance, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || "We couldn't send your RSVP just now — please try again.");
        return;
      }
      setSent(true);
    } catch {
      setError("We couldn't reach the RSVP service — please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <PageShell>
      <div ref={floralsRef}>
        <Side $side="left" aria-hidden>
          <BrownSideFloral />
        </Side>
        <Side $side="right" aria-hidden>
          <BrownSideFloral />
        </Side>
      </div>

      <ScriptTitle>
        <SplitWords text="Kindly Rsvp" trigger="load" delay={0.3} stagger={0.11} duration={1.3} />
      </ScriptTitle>
      <Reveal delay={0.55} y={26}>
        <Intro>
          We would love it if you would join us to celebrate this occasion —
          please respond by July 15<sup>th</sup>
        </Intro>
      </Reveal>

      <Reveal delay={0.35} y={48} scale={0.98} duration={1.15}>
      <Card onSubmit={submit} noValidate>
        {sent ? (
          <Success role="status">
            <h3>Asante sana!</h3>
            <p>
              {attendance === "accepts"
                ? "We can't wait to celebrate with you on 14.08.2026."
                : "Thank you for letting us know — you'll be missed."}
            </p>
          </Success>
        ) : (
          <>
            <CardTitle>You&rsquo;re Invited!</CardTitle>

            <FieldLabel htmlFor="rsvp-name">Your name</FieldLabel>
            <Input
              id="rsvp-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              size="medium"
            />

            <FieldLabel htmlFor="rsvp-email">Your email</FieldLabel>
            <Input
              id="rsvp-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <FieldLabel as="p" style={{ marginBottom: 0 }}>
              Will you be attending our wedding?
            </FieldLabel>
            <OptionBtn
              type="button"
              $active={attendance === "accepts"}
              aria-pressed={attendance === "accepts"}
              onClick={() => setAttendance("accepts")}
            >
              Joyfully accepts
            </OptionBtn>
            <OptionBtn
              type="button"
              $active={attendance === "declines"}
              aria-pressed={attendance === "declines"}
              onClick={() => setAttendance("declines")}
            >
              Regretfully declines
            </OptionBtn>

            <FieldLabel htmlFor="rsvp-message">Your message to the couple</FieldLabel>
            <Input
              id="rsvp-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              minRows={1}
            />

            {error && <ErrorMsg role="alert">{error}</ErrorMsg>}

            <Submit type="submit" data-cursor="Send" disabled={sending}>
              {sending ? "Sending\u2026" : "RSVP"}
            </Submit>
            <FinePrint>Only Dave &amp; Faizah will see your response.</FinePrint>
          </>
        )}
      </Card>
      </Reveal>
    </PageShell>
  );
}
