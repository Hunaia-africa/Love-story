"use client";

import styled from "styled-components";
import Link from "next/link";
import { colors, shadows } from "@/theme/tokens";

export const MenuWrap = styled.div`
  min-height: 100dvh;
  width: 100%;
  background: ${colors.cream};
  padding: 90px 4vw 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Board = styled.div`
  position: relative;
  width: min(92vw, 620px);
  aspect-ratio: 1546 / 2160;
  container-type: inline-size;
`;

/* generic absolutely positioned box, values are % of the board */
export const Box = styled.div<{
  $top: number;
  $left: number;
  $w: number;
  $h: number;
  $rotate?: number;
  $z?: number;
}>`
  position: absolute;
  top: ${(p) => p.$top}%;
  left: ${(p) => p.$left}%;
  width: ${(p) => p.$w}%;
  height: ${(p) => p.$h}%;
  transform: rotate(${(p) => p.$rotate || 0}deg);
  z-index: ${(p) => p.$z || 1};
`;

/* ---------- decorative photo polaroids ---------- */
export const Polaroid = styled.div<{ $tilt?: number }>`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 5% 5% 12%;
  box-shadow: ${shadows.card};
  transform: rotate(${(p) => p.$tilt || 0}deg);
`;

export const PolaroidPhoto = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #d8c6a8 0%, #b79a6d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b5136;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 7cqw;
  text-align: center;
  padding: 4%;
`;

/* ---------- envelope / letter ---------- */
export const EnvelopeLink = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-4px) scale(1.02);
  }
`;

export const LetterPeek = styled.div`
  position: absolute;
  top: 0;
  left: 6%;
  width: 88%;
  height: 78%;
  background: #f4ecd8;
  border: 1px solid rgba(122, 31, 31, 0.25);
  border-radius: 2px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8%;
`;

export const LetterScript = styled.p`
  font-family: var(--font-script);
  font-size: 10.5cqw;
  line-height: 1.05;
  color: ${colors.espresso};
  margin: 0;
`;

export const EnvelopeBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 62%;
  background: linear-gradient(160deg, #c99a5d 0%, #a3763f 100%);
  border-radius: 3px;
  box-shadow: ${shadows.card};
`;

export const EnvelopeFlapShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 50% 62%);
  background: linear-gradient(160deg, #dcb679 0%, #bd905a 100%);
`;

export const EnvelopeSeal = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #a52222, #5c1414);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
`;

/* ---------- scalloped-ish octagon plaques ---------- */
export const PlaqueLink = styled(Link)<{ $dark?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10%;
  background: ${(p) => (p.$dark ? colors.espresso : "#7a6a5a")};
  color: ${colors.ivory};
  clip-path: polygon(
    14% 0%,
    86% 0%,
    100% 14%,
    100% 86%,
    86% 100%,
    14% 100%,
    0% 86%,
    0% 14%
  );
  box-shadow: ${shadows.card};
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.03);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 6%;
    border: 1px dashed rgba(247, 242, 233, 0.5);
    clip-path: polygon(
      14% 0%,
      86% 0%,
      100% 14%,
      100% 86%,
      86% 100%,
      14% 100%,
      0% 86%,
      0% 14%
    );
    pointer-events: none;
  }
`;

export const PlaqueScript = styled.p`
  font-family: var(--font-script);
  font-size: 9cqw;
  line-height: 1.05;
  margin: 0;
`;

export const PlaqueSub = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-size: 4cqw;
  margin-top: 2%;
  opacity: 0.9;
`;

/* ---------- rectangular cards (Details / Please Respond) ---------- */
export const RectCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${colors.espresso};
  color: ${colors.ivory};
  border: 1px solid rgba(247, 242, 233, 0.35);
  border-radius: 2px;
  box-shadow: ${shadows.card};
  padding: 8%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const RectEyebrow = styled.p`
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 4.4cqw;
  margin: 0 0 4%;
`;

export const RectScript = styled.p`
  font-family: var(--font-script);
  font-size: 8.5cqw;
  line-height: 1.05;
  margin: 0;
`;

export const RectSmall = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-size: 3.6cqw;
  margin-top: 6%;
  opacity: 0.85;
`;

/* ---------- decorative-only flourishes ---------- */
export const DecorFlowers = styled.div`
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    115deg,
    rgba(180, 113, 60, 0.18) 0px,
    rgba(180, 113, 60, 0.18) 2px,
    transparent 2px,
    transparent 10px
  );
  border-radius: 50%;
  opacity: 0.7;
`;

export const DecorGlasses = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 8%;
`;

export const HeaderBlock = styled.div`
  text-align: center;
  margin-bottom: 2.4rem;
`;

export const KaribuLabel = styled.p`
  font-family: var(--font-display);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${colors.bark};
  margin: 0 0 0.5rem;
`;

export const HeaderScript = styled.h1`
  font-family: var(--font-script);
  font-size: clamp(2.2rem, 6vw, 3.4rem);
  color: ${colors.espresso};
  margin: 0;
`;

export const FooterNote = styled.p`
  text-align: center;
  margin-top: 2.4rem;
  font-family: var(--font-body);
  font-style: italic;
  color: ${colors.bark};
  font-size: 0.95rem;
`;
