"use client";

/* ------------------------------------------------------------------ */
/*  The scrapbook menu — a 1:1 recreation of the Canva collage page.  */
/*  Five pieces are tappable; the rest is set dressing.               */
/* ------------------------------------------------------------------ */

import type { CSSProperties } from "react";
import {
  MenuWrap,
  Board,
  Decor,
  CardLink,
  EnvGroup,
  Letter,
  LetterScript,
  LaceTriWrap,
  Pocket,
  PocketSide,
  PocketBottom,
  FrontFlap,
  SealWrap,
  LaceCard,
  CardEyebrow,
  CardThe,
  CardScript,
  RespondCard,
  RespondCorner,
  RespondEyebrow,
  RespondScript,
  RespondSmall,
  RespondCta,
  PlaqueScript,
  PlaqueDate,
  Hint,
  LinkRow,
  SrH1,
} from "./menu.styles";
import OrnatePlaque from "@/components/OrnatePlaque";
import { Polaroid } from "@/components/Photo";
import {
  Swans,
  DriedSprig,
  RoseCluster,
  Vine,
  ChampagneWatercolour,
  WaxSealRed,
  FrameCorner,
} from "@/components/decor";
import { colors } from "@/theme/tokens";

/** top / left / width / height in % of the board, plus z, tilt, stagger */
function at(
  t: number,
  l: number,
  w: number,
  h: number,
  z = 1,
  r = 0,
  i = 0,
): CSSProperties {
  return {
    "--t": `${t}%`,
    "--l": `${l}%`,
    "--w": `${w}%`,
    "--h": `${h}%`,
    "--z": z,
    "--r": `${r}deg`,
    "--i": i,
  } as CSSProperties;
}

function LaceTriangle() {
  return (
    <svg viewBox="0 0 40 34" fill="none" aria-hidden>
      {[0, 1, 2, 3].map((row) =>
        Array.from({ length: 4 - row }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={4 + row * 4.6 + col * 9}
            cy={5 + row * 8}
            r={1.9}
            fill="#7E2727"
          />
        )),
      )}
    </svg>
  );
}

export default function MenuPage() {
  return (
    <MenuWrap>
      <SrH1>Dave &amp; Faizah — wedding menu</SrH1>

      <Board>
        {/* ---------- set dressing ---------- */}
        <Decor style={at(11.5, 1, 21, 26.5, 1, 0, 2)} aria-hidden>
          <DriedSprig />
        </Decor>

        <Decor style={at(60.8, 2.5, 23.5, 19.5, 4, -4, 8)} aria-hidden>
          <ChampagneWatercolour />
        </Decor>

        <Decor style={at(43.2, 60, 27, 17.5, 2, 0, 7)} aria-hidden>
          <RoseCluster />
        </Decor>

        {/* ---------- 1 · envelope → traditional wedding ---------- */}
        <CardLink
          href="/menu/traditional-wedding"
          style={at(3.2, 19.5, 36, 30.5, 4, 0, 0)}
          aria-label="Open the invitation: The Traditional Wedding"
        >
          <EnvGroup>
            <Letter>
              <LaceTriWrap $side="left" aria-hidden>
                <LaceTriangle />
              </LaceTriWrap>
              <LaceTriWrap $side="right" aria-hidden>
                <LaceTriangle />
              </LaceTriWrap>
              <LetterScript>
                The
                <br />
                Traditional
                <br />
                Wedding
              </LetterScript>
            </Letter>
            <Pocket>
              <PocketSide $side="left" />
              <PocketSide $side="right" />
              <PocketBottom />
              <FrontFlap />
              <SealWrap>
                <WaxSealRed />
              </SealWrap>
            </Pocket>
          </EnvGroup>
        </CardLink>

        {/* swans nestle in front of the envelope */}
        <Decor style={at(25.8, 13, 37, 17.5, 5, 0, 4)} aria-hidden>
          <Swans />
        </Decor>

        {/* ---------- polaroids ---------- */}
        <Decor style={at(4, 52.5, 30, 22.5, 2, 0.6, 1)}>
          <Polaroid label="Us, toasting" ratio="4 / 3" tilt={0} />
        </Decor>

        <Decor style={at(41.8, 6, 30, 21.5, 2, -1.4, 5)}>
          <Polaroid label="A selfie of us" ratio="4 / 3" tilt={0} />
        </Decor>

        {/* ---------- 2 · details card ---------- */}
        <CardLink
          href="/menu/details"
          style={at(26.8, 55.5, 25, 17.5, 3, 0, 3)}
          aria-label="Click here for the details"
        >
          <LaceCard>
            <CardEyebrow>CLICK HERE FOR</CardEyebrow>
            <CardThe>THE</CardThe>
            <CardScript>Details</CardScript>
          </LaceCard>
        </CardLink>

        <Decor style={at(24.6, 70.5, 16.5, 16.5, 4, 0, 6)} aria-hidden>
          <Vine />
        </Decor>

        {/* ---------- 3 · our love story plaque ---------- */}
        <CardLink
          href="/menu/love-story"
          style={at(43.6, 29.5, 34.5, 14.5, 5, -0.5, 6)}
          aria-label="Read our love story"
        >
          <OrnatePlaque fill={colors.chocolate} variant="wide">
            <PlaqueScript $size="5.6cqw">Our Love Story</PlaqueScript>
          </OrnatePlaque>
        </CardLink>

        {/* ---------- 4 · save the date plaque ---------- */}
        <CardLink
          href="/menu/save-the-date"
          style={at(55.8, 26.5, 28, 37, 3, 0.5, 9)}
          aria-label="Save the date — 14.08.2026"
        >
          <OrnatePlaque fill={colors.taupe} variant="tall">
            <PlaqueScript>
              Save The
              <br />
              Date
            </PlaqueScript>
            <PlaqueDate>14.08.2026</PlaqueDate>
          </OrnatePlaque>
        </CardLink>

        {/* ---------- 5 · please respond ---------- */}
        <CardLink
          href="/menu/rsvp"
          style={at(56.2, 55, 25.5, 33, 3, 0, 10)}
          aria-label="Please respond — RSVP"
        >
          <RespondCard>
            {(["tl", "tr", "bl", "br"] as const).map((p) => (
              <RespondCorner key={p} $pos={p} aria-hidden>
                <FrameCorner />
              </RespondCorner>
            ))}
            <RespondEyebrow>PLEASE</RespondEyebrow>
            <RespondScript>Respond</RespondScript>
            <RespondSmall>
              join us to celebrate
              <br />
              this occasion
            </RespondSmall>
            <RespondCta>CLICK HERE</RespondCta>
          </RespondCard>
        </CardLink>
      </Board>

      <Hint>Tap a card to open it</Hint>
      <LinkRow aria-label="Wedding pages">
        <a href="/menu/traditional-wedding">The Wedding</a>
        <span aria-hidden>·</span>
        <a href="/menu/details">Details</a>
        <span aria-hidden>·</span>
        <a href="/menu/love-story">Our Love Story</a>
        <span aria-hidden>·</span>
        <a href="/menu/save-the-date">Save the Date</a>
        <span aria-hidden>·</span>
        <a href="/menu/rsvp">RSVP</a>
      </LinkRow>
    </MenuWrap>
  );
}
