"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { colors, shadows } from "@/theme/tokens";

/* ------------------------------------------------------------------ */
/*  The scrapbook board — a fixed-ratio canvas (Canva page: 1546×2160) */
/*  Every collage piece is absolutely positioned in % of the board,   */
/*  and all type is sized in cqw so the whole page scales as one.     */
/* ------------------------------------------------------------------ */

const settle = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.985) rotate(var(--r, 0deg)); }
  to   { opacity: 1; transform: translateY(0) scale(1) rotate(var(--r, 0deg)); }
`;

export const MenuWrap = styled.main`
  min-height: 100dvh;
  background: ${colors.cream};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 2.5vh, 28px) 12px clamp(14px, 2.5vh, 26px);
  overflow-x: clip;
`;

export const Board = styled.div`
  position: relative;
  aspect-ratio: 1546 / 2160;
  width: min(94vw, calc((100dvh - 118px) * 0.7157), 640px);
  container-type: inline-size;
`;

/* Base collage piece --------------------------------------------------- */

export const Piece = styled.div`
  position: absolute;
  top: var(--t);
  left: var(--l);
  width: var(--w);
  height: var(--h);
  z-index: var(--z, 1);
  transform: rotate(var(--r, 0deg));
  animation: ${settle} 0.55s ease both;
  animation-delay: calc(var(--i, 0) * 75ms);
`;

/** gsap-driven pointer-parallax target; must stay free of CSS transforms */
export const Depth = styled.div`
  width: 100%;
  height: 100%;
  will-change: transform;
`;

export const Decor = styled(Piece)`
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SwayDecor = styled(Decor)`
  animation:
    ${settle} 0.55s ease both calc(var(--i, 0) * 75ms),
    sway 8s ease-in-out calc(1.4s + var(--i, 0) * -1.1s) infinite;
`;

export const CardLink = styled(Link)`
  position: absolute;
  top: var(--t);
  left: var(--l);
  width: var(--w);
  height: var(--h);
  z-index: var(--z, 2);
  display: block;
  transform: rotate(var(--r, 0deg));
  animation: ${settle} 0.55s ease both;
  animation-delay: calc(var(--i, 0) * 75ms);
  transition: transform 0.28s ease, filter 0.28s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:focus-visible {
    z-index: 30;
    transform: rotate(var(--r, 0deg)) translateY(-0.9cqw) scale(1.018);
    filter: drop-shadow(0 1.6cqw 2.6cqw rgba(43, 33, 28, 0.24));
  }

  &:focus-visible {
    outline: none;
  }
  &:focus-visible > * {
    box-shadow: 0 0 0 3px ${colors.cream}, 0 0 0 5px ${colors.gold};
  }
`;

/* ------------------------------------------------------------------ */
/*  1 · Kraft envelope + lace letter — "The Traditional Wedding"      */
/* ------------------------------------------------------------------ */

export const EnvGroup = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Letter = styled.div`
  position: absolute;
  top: 0;
  left: 8.5%;
  right: 8.5%;
  height: 70%;
  z-index: 1;
  background:
    repeating-linear-gradient(
      52deg,
      rgba(150, 117, 76, 0.13) 0 1px,
      transparent 1px 3.1cqw
    ),
    repeating-linear-gradient(
      -52deg,
      rgba(150, 117, 76, 0.13) 0 1px,
      transparent 1px 3.1cqw
    ),
    linear-gradient(180deg, #fbf5e6 0%, #f4ebd6 100%);
  border: 1px solid rgba(150, 117, 76, 0.28);
  box-shadow: 0 0.5cqw 1.6cqw rgba(43, 33, 28, 0.16);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  /* doily scallops peeking out around the sheet */
  &::before {
    content: "";
    position: absolute;
    inset: -5.5% -4.5%;
    z-index: -1;
    background-image: radial-gradient(
      circle closest-side,
      #f0e5cb 72%,
      rgba(150, 117, 76, 0.34) 78%,
      transparent 82%
    );
    background-size: 11.5% 9.5%;
    filter: drop-shadow(0 0.4cqw 1cqw rgba(43, 33, 28, 0.12));
  }
  /* faint inner lace line */
  &::after {
    content: "";
    position: absolute;
    inset: 4.5%;
    border: 1px dashed rgba(150, 117, 76, 0.35);
    pointer-events: none;
  }
`;

export const LetterScript = styled.span`
  position: relative;
  margin-top: 6%;
  font-family: var(--font-script);
  font-size: max(4.55cqw, 13px);
  line-height: 1.32;
  color: #241a12;
  text-align: center;
`;

export const LaceTriWrap = styled.span<{ $side: "left" | "right" }>`
  position: absolute;
  top: 26%;
  ${(p) => (p.$side === "left" ? "left: 3%;" : "right: 3%;")}
  width: 15%;
  transform: ${(p) => (p.$side === "right" ? "scaleX(-1)" : "none")};
  opacity: 0.85;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const Pocket = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52%;
  z-index: 2;
  border-radius: 2px;
  background: linear-gradient(180deg, #a5824f 0%, ${colors.kraft} 46%, #8a6a40 100%);
  box-shadow:
    0 1cqw 2.4cqw rgba(43, 33, 28, 0.28),
    inset 0 1px 0 rgba(255, 244, 218, 0.35);
  overflow: hidden;
`;

export const PocketSide = styled.span<{ $side: "left" | "right" }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    ${(p) => (p.$side === "left" ? "115deg" : "-115deg")},
    rgba(64, 45, 24, 0.22),
    transparent 46%
  );
  clip-path: ${(p) =>
    p.$side === "left"
      ? "polygon(0 0, 54% 52%, 0 100%)"
      : "polygon(100% 0, 46% 52%, 100% 100%)"};
`;

export const PocketBottom = styled.span`
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(255, 240, 206, 0.16), transparent 55%);
  clip-path: polygon(0 100%, 50% 44%, 100% 100%);
`;

/* the opened flap, standing up behind the letter */
export const BackFlap = styled.span`
  position: absolute;
  bottom: 52%;
  left: 2%;
  right: 2%;
  height: 42%;
  z-index: 0;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  background: linear-gradient(180deg, #7d5c36 0%, #8f6d43 78%);
  filter: drop-shadow(0 -0.3cqw 0.8cqw rgba(43, 30, 15, 0.18));

  /* maroon lace lining peeking along the flap edges */
  &::after {
    content: "";
    position: absolute;
    inset: 5% 4% 0;
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
    background:
      radial-gradient(circle at 50% 0%, rgba(126, 39, 39, 0.55) 0 22%, transparent 26%),
      linear-gradient(180deg, #6e4f2c 0%, #7d5c36 80%);
  }
`;

export const SealWrap = styled.span`
  position: absolute;
  top: 16%;
  left: 50%;
  width: 25%;
  transform: translate(-50%, -50%);
  z-index: 3;
  filter: drop-shadow(0 0.5cqw 0.9cqw rgba(60, 10, 10, 0.4));

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

/* ------------------------------------------------------------------ */
/*  2 · Dark lace-bordered card — "Click here for the Details"        */
/* ------------------------------------------------------------------ */

export const LaceCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(170deg, #6a523c 0%, #5a4330 58%, #4e3928 100%);
  border-radius: 2px;
  box-shadow: ${shadows.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5%;
  text-align: center;
  padding: 7% 8%;

  /* cream scallop lace around the outside */
  &::before {
    content: "";
    position: absolute;
    inset: -3.5% -2.6%;
    z-index: -1;
    background-image: radial-gradient(
      circle closest-side,
      rgba(246, 240, 226, 0.95) 58%,
      rgba(150, 117, 76, 0.25) 66%,
      transparent 72%
    );
    background-size: 9% 13%;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 4%;
    border: 1px dotted rgba(246, 241, 231, 0.65);
    pointer-events: none;
  }
`;

export const CardEyebrow = styled.span`
  font-family: var(--font-display);
  font-size: max(2.05cqw, 8.5px);
  letter-spacing: 0.24em;
  color: #f0e6d4;
`;

export const CardThe = styled.span`
  font-family: var(--font-display);
  font-size: max(1.7cqw, 7.5px);
  letter-spacing: 0.3em;
  color: rgba(240, 230, 212, 0.85);
`;

export const CardScript = styled.span`
  font-family: var(--font-script);
  font-size: max(5.2cqw, 17px);
  line-height: 1;
  color: #f8f1e2;
`;

/* ------------------------------------------------------------------ */
/*  3 · Tall "Please Respond" card                                    */
/* ------------------------------------------------------------------ */

export const RespondCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(172deg, #41302a 0%, #33251e 60%, #2b1f19 100%);
  border-radius: 2px;
  box-shadow: ${shadows.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10% 9%;
  color: #e7dcc6;

  &::before {
    content: "";
    position: absolute;
    inset: 4.5% 5.5%;
    border: 1px solid rgba(214, 196, 164, 0.5);
    pointer-events: none;
  }
`;

export const RespondCorner = styled.span<{ $pos: "tl" | "tr" | "bl" | "br" }>`
  position: absolute;
  width: 22%;
  aspect-ratio: 1;
  pointer-events: none;
  color: rgba(214, 196, 164, 0.75);
  ${(p) =>
    p.$pos === "tl"
      ? "top: 1.8%; left: 2.6%;"
      : p.$pos === "tr"
        ? "top: 1.8%; right: 2.6%; transform: scaleX(-1);"
        : p.$pos === "bl"
          ? "bottom: 1.8%; left: 2.6%; transform: scaleY(-1);"
          : "bottom: 1.8%; right: 2.6%; transform: scale(-1);"}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const RespondEyebrow = styled.span`
  font-family: var(--font-display);
  font-size: max(2.9cqw, 11px);
  letter-spacing: 0.34em;
  text-indent: 0.34em;
`;

export const RespondScript = styled.span`
  font-family: var(--font-script);
  font-size: max(6cqw, 20px);
  line-height: 1.1;
  margin: 3% 0 7%;
  color: #f3ead8;
`;

export const RespondSmall = styled.span`
  font-family: var(--font-body);
  font-style: italic;
  font-size: max(2.15cqw, 8.5px);
  letter-spacing: 0.1em;
  line-height: 1.75;
  color: rgba(231, 220, 198, 0.92);
`;

export const RespondCta = styled.span`
  margin-top: 9%;
  font-family: var(--font-display);
  font-size: max(2.1cqw, 8.5px);
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  color: #d6c4a4;
  border-bottom: 1px solid rgba(214, 196, 164, 0.55);
  padding-bottom: 2.5%;
`;

/* ------------------------------------------------------------------ */
/*  4 · Plaque inner type (Our Love Story / Save The Date)            */
/* ------------------------------------------------------------------ */

export const PlaqueScript = styled.span<{ $size?: string }>`
  font-family: var(--font-script);
  font-size: max(${(p) => p.$size || "5.4cqw"}, 17px);
  line-height: 1.18;
  color: #f2ead9;
  text-shadow: 0 1px 2px rgba(30, 20, 12, 0.35);
`;

export const PlaqueDate = styled.span`
  margin-top: 9%;
  font-family: var(--font-script);
  font-size: max(3.4cqw, 12px);
  letter-spacing: 0.06em;
  color: #ede3ce;
`;

/* ------------------------------------------------------------------ */
/*  Polaroid caption + a11y footer                                    */
/* ------------------------------------------------------------------ */

export const Hint = styled.p`
  margin: clamp(10px, 1.8vh, 18px) 0 0;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.86rem;
  letter-spacing: 0.14em;
  color: ${colors.softBrownText};
`;

export const LinkRow = styled.nav`
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 10px;
  max-width: 640px;

  a {
    font-family: var(--font-display);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${colors.bark};
    text-decoration: none;
    padding: 4px 2px;
    border-bottom: 1px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;

    &:hover,
    &:focus-visible {
      color: ${colors.rust};
      border-color: ${colors.rust};
    }
  }

  span[aria-hidden] {
    color: rgba(138, 106, 76, 0.5);
    font-size: 0.7rem;
    align-self: center;
  }
`;

export const SrH1 = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;
