"use client";

/* ------------------------------------------------------------------ */
/*  The scrapbook menu — reimagined around a single centrepiece:      */
/*  the toast polaroid, wax-pinned to the heart of the board, with    */
/*  every card orbiting it. Staggered settle, idle sway,              */
/*  pointer-depth parallax all intact.                                */
/* ------------------------------------------------------------------ */

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import {
  MenuWrap,
  Board,
  Decor,
  SwayDecor,
  Depth,
  CardLink,
  EnvGroup,
  Letter,
  LetterScript,
  LaceTriWrap,
  Pocket,
  PocketSide,
  PocketBottom,
  BackFlap,
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
  DriedSprig,
  RoseCluster,
  Vine,
  ChampagneWatercolour,
  WaxSealRed,
  FrameCorner,
} from "@/components/decor";
import { colors } from "@/theme/tokens";
import { photos } from "@/lib/assets";
import { gsap, finePointer, prefersReducedMotion } from "@/lib/motion";

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

/* pointer-depth: pieces drift a few px toward the cursor, more for
   pieces "closer" to you (higher data-depth). Desktop only. */
function useDepthParallax(boardRef: React.RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const board = boardRef.current;
    if (!board || !finePointer() || prefersReducedMotion()) return;

    const layers = Array.from(
      board.querySelectorAll<HTMLElement>("[data-depth]"),
    ).map((el) => ({
      x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
      y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
      d: parseFloat(el.dataset.depth || "0"),
    }));

    const move = (e: PointerEvent) => {
      const r = board.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
      layers.forEach((l) => {
        l.x(nx * l.d);
        l.y(ny * l.d * 0.8);
      });
    };
    const leave = () => layers.forEach((l) => (l.x(0), l.y(0)));

    board.addEventListener("pointermove", move, { passive: true });
    board.addEventListener("pointerleave", leave);
    return () => {
      board.removeEventListener("pointermove", move);
      board.removeEventListener("pointerleave", leave);
    };
  }, [boardRef]);
}

export default function MenuPage() {
  const boardRef = useRef<HTMLDivElement>(null);
  useDepthParallax(boardRef);

  return (
    <MenuWrap>
      <SrH1>Dave &amp; Faizah — wedding menu</SrH1>

      <Board ref={boardRef}>
        {/* ---------- the centrepiece: wax-pinned to the heart ---------- */}
        <Decor style={at(34, 28, 44, 27, 6, -1.8, 0)}>
          <Depth data-depth={10}>
            <Polaroid
              photo={photos.toast}
              ratio="4 / 3"
              position="50% 35%"
              pinned
            />
          </Depth>
        </Decor>

        {/* ---------- 1 · envelope crowns the top ---------- */}
        <CardLink
          href="/menu/traditional-wedding"
          style={at(3, 32, 36, 30.5, 4, 0, 1)}
          aria-label="Open the invitation: The Traditional Wedding"
          data-cursor="Open"
        >
          <Depth data-depth={8}>
            <EnvGroup>
              <BackFlap />
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
                <SealWrap>
                  <WaxSealRed />
                </SealWrap>
              </Pocket>
            </EnvGroup>
          </Depth>
        </CardLink>

        {/* ---------- 2 · details card, upper-right shoulder ---------- */}
        <CardLink
          href="/menu/details"
          style={at(23, 68, 25, 17.5, 4, 1.6, 2)}
          aria-label="Click here for the details"
          data-cursor="Details"
        >
          <Depth data-depth={6}>
            <LaceCard>
              <CardEyebrow>CLICK HERE FOR</CardEyebrow>
              <CardThe>THE</CardThe>
              <CardScript>Details</CardScript>
            </LaceCard>
          </Depth>
        </CardLink>

        {/* ---------- 3 · love story plaque, upper-left shoulder ---------- */}
        <CardLink
          href="/menu/love-story"
          style={at(27, 2, 34.5, 14.5, 5, -2, 3)}
          aria-label="Read our love story"
          data-cursor="Our Story"
        >
          <Depth data-depth={7}>
            <OrnatePlaque fill={colors.chocolate} variant="wide">
              <PlaqueScript $size="5.6cqw">Our Love Story</PlaqueScript>
            </OrnatePlaque>
          </Depth>
        </CardLink>

        {/* ---------- 4 · save the date, grounding the left ---------- */}
        <CardLink
          href="/menu/save-the-date"
          style={at(57, 7.5, 28, 37, 3, -1.4, 4)}
          aria-label="Save the date — 14.08.2026"
          data-cursor="Save It"
        >
          <Depth data-depth={5}>
            <OrnatePlaque fill={colors.taupe} variant="tall">
              <PlaqueScript>
                Save The
                <br />
                Date
              </PlaqueScript>
              <PlaqueDate>14.08.2026</PlaqueDate>
            </OrnatePlaque>
          </Depth>
        </CardLink>

        {/* ---------- 5 · please respond, grounding the right ---------- */}
        <CardLink
          href="/menu/rsvp"
          style={at(57.5, 63, 25.5, 33, 3, 1.2, 5)}
          aria-label="Please respond — RSVP"
          data-cursor="RSVP"
        >
          <Depth data-depth={6}>
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
          </Depth>
        </CardLink>

        {/* ---------- set dressing in the gaps ---------- */}
        <SwayDecor style={at(2.5, 2.5, 20, 25, 1, 0, 6)} aria-hidden>
          <Depth data-depth={3}>
            <DriedSprig />
          </Depth>
        </SwayDecor>

        <SwayDecor style={at(5, 75, 23, 15, 1, 0, 7)} aria-hidden>
          <Depth data-depth={4}>
            <RoseCluster />
          </Depth>
        </SwayDecor>

        <SwayDecor style={at(41, 78, 15.5, 16, 2, 0, 8)} aria-hidden>
          <Depth data-depth={4}>
            <Vine />
          </Depth>
        </SwayDecor>

        {/* champagne raises a glass right under the toast */}
        <SwayDecor style={at(62.5, 37.5, 23.5, 19.5, 2, -3, 9)} aria-hidden>
          <Depth data-depth={7}>
            <ChampagneWatercolour />
          </Depth>
        </SwayDecor>
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
