"use client";

import styled, { css, keyframes } from "styled-components";
import { colors } from "@/theme/tokens";

export const Stage = styled.div`
  min-height: 100dvh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 1.5rem;
  background: #140d09;
`;

/* the real sunset photograph, gently drifting (ken-burns) */
export const PhotoLayer = styled.div`
  position: absolute;
  inset: -2%;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 42%;
  }
`;

/* warm grade + darkening so the type and envelope sit beautifully */
export const Grade = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(120% 60% at 50% 36%, rgba(74, 38, 12, 0) 0%, rgba(20, 13, 9, 0.55) 78%),
    linear-gradient(180deg, rgba(20, 13, 9, 0.62) 0%, rgba(20, 13, 9, 0.28) 34%, rgba(20, 13, 9, 0.45) 72%, rgba(14, 9, 6, 0.82) 100%);
`;

export const Vignette = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse at center,
    transparent 34%,
    rgba(0, 0, 0, 0.62) 100%
  );
`;

export const Eyebrow = styled.p`
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: clamp(0.82rem, 2.2vw, 1.15rem);
  color: #e9e0cd;
  text-align: center;
  margin: 0 0 0.4rem;
  z-index: 2;
  text-indent: 0.32em; /* optically centre tracked caps */
`;

export const Names = styled.h1`
  font-family: var(--font-script);
  font-weight: 400;
  font-size: clamp(3.4rem, 13vw, 7.2rem);
  color: #ece3cf;
  text-align: center;
  margin: 0 0 clamp(2rem, 6vh, 3.4rem);
  z-index: 2;
  line-height: 1.05;
  text-shadow: 0 6px 34px rgba(0, 0, 0, 0.55);
`;

const envIn = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.94); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const idleFloat = keyframes`
  0%, 100% { transform: translateY(0) rotateX(0.001deg); }
  50%      { transform: translateY(-7px) rotateX(0.001deg); }
`;

/* ---------------- envelope ---------------- */

export const EnvelopeButton = styled.button<{ $open: boolean }>`
  background: none;
  border: none;
  padding: 12px;
  cursor: ${(p) => (p.$open ? "default" : "pointer")};
  z-index: 2;
  perspective: 1500px;
  border-radius: 12px;
  transition: transform 0.4s ease;
  animation: ${envIn} 1s cubic-bezier(0.2, 0.9, 0.25, 1) 0.85s both;

  @media (hover: hover) {
    &:hover {
      transform: ${(p) => (p.$open ? "none" : "translateY(-6px)")};
    }
  }
`;

export const EnvelopeBody = styled.div<{ $open: boolean }>`
  position: relative;
  width: min(80vw, 400px);
  aspect-ratio: 40 / 27;
  border-radius: 7px;
  background: linear-gradient(158deg, #dcb173 0%, #c1915a 55%, #a67a46 100%);
  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 236, 200, 0.35);
  transform-style: preserve-3d;
  ${(p) =>
    !p.$open &&
    css`
      animation: ${idleFloat} 5.5s ease-in-out 2.2s infinite;
    `}
  transition: transform 0.9s cubic-bezier(0.6, 0, 0.3, 1) 0.55s;
  transform: ${(p) =>
    p.$open ? "translateY(26px) scale(1.05)" : "translateY(0) scale(1)"};
`;

/* letter that rises out */
export const LetterCard = styled.div<{ $open: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 6%;
  width: 84%;
  height: 82%;
  background: ${colors.ivory};
  border-radius: 4px;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8%;
  transform: translateX(-50%)
    ${(p) => (p.$open ? "translateY(-78%)" : "translateY(0)")};
  transition: transform 0.95s cubic-bezier(0.6, 0, 0.3, 1) 0.5s;
`;

export const LetterNames = styled.p`
  font-family: var(--font-script);
  font-size: clamp(1.5rem, 6.4vw, 2.2rem);
  color: ${colors.espresso};
  margin: 0;
  line-height: 1;
`;

export const LetterRule = styled.div`
  width: 56%;
  height: 1px;
  background: ${colors.gold};
`;

export const LetterDate = styled.p`
  font-family: var(--font-display);
  letter-spacing: 0.3em;
  font-size: clamp(0.6rem, 2.4vw, 0.78rem);
  color: ${colors.bark};
  margin: 0;
  text-indent: 0.3em;
`;

/* front pocket (V fold) */
export const EnvelopePocket = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 7px;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    clip-path: polygon(0 0, 50% 58%, 0 100%);
    background: linear-gradient(115deg, #d3a768 0%, #b3854e 100%);
    box-shadow: inset -6px 0 12px rgba(0, 0, 0, 0.12);
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    clip-path: polygon(100% 0, 50% 58%, 100% 100%);
    background: linear-gradient(245deg, #d3a768 0%, #b3854e 100%);
  }
`;

export const EnvelopePocketBottom = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 7px;
  z-index: 3;
  pointer-events: none;
  clip-path: polygon(0 100%, 50% 42%, 100% 100%);
  background: linear-gradient(185deg, #d9ad6e 0%, #b6884f 78%, #a37a45 100%);
  box-shadow: inset 0 6px 10px rgba(0, 0, 0, 0.1);
`;

/* opening flap */
export const EnvelopeFlap = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  z-index: ${(p) => (p.$open ? 1 : 5)};
  transform-origin: top center;
  transform-style: preserve-3d;
  transform: rotateX(${(p) => (p.$open ? "-180deg" : "0deg")});
  transition: transform 0.85s cubic-bezier(0.62, 0, 0.34, 1) 0.28s,
    z-index 0s linear 0.6s;
`;

export const FlapFront = styled.div`
  position: absolute;
  inset: 0;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  background: linear-gradient(168deg, #e6c184 0%, #c79a5e 74%, #b68a51 100%);
  border-radius: 7px 7px 0 0;
  backface-visibility: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.22);
`;

export const FlapBack = styled.div`
  position: absolute;
  inset: 0;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  background: linear-gradient(168deg, #a87c48 0%, #8f6639 100%);
  border-radius: 7px 7px 0 0;
  transform: rotateX(180deg);
  backface-visibility: hidden;
`;

/* wax seal */
const sheen = keyframes`
  0%, 72% { transform: translateX(-130%) rotate(18deg); }
  100%    { transform: translateX(130%) rotate(18deg); }
`;

export const SealWrap = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 55%;
  left: 50%;
  width: clamp(58px, 17%, 72px);
  aspect-ratio: 1;
  z-index: 6;
  transform: translate(-50%, -50%) scale(${(p) => (p.$open ? 0.35 : 1)});
  opacity: ${(p) => (p.$open ? 0 : 1)};
  transition: transform 0.35s ease, opacity 0.3s ease;
  filter: drop-shadow(0 5px 9px rgba(0, 0, 0, 0.45));
  overflow: hidden;
  border-radius: 50%;

  &::after {
    content: "";
    position: absolute;
    inset: -20%;
    background: linear-gradient(
      100deg,
      transparent 42%,
      rgba(255, 248, 224, 0.5) 50%,
      transparent 58%
    );
    animation: ${sheen} 4.5s ease-in-out infinite;
  }
`;

export const Caption = styled.p<{ $open: boolean }>`
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-size: clamp(0.68rem, 2vw, 0.85rem);
  color: #ded3ba;
  margin-top: clamp(2rem, 6vh, 3.2rem);
  text-align: center;
  z-index: 2;
  text-indent: 0.28em;
  opacity: ${(p) => (p.$open ? 0.55 : 1)};
  transition: opacity 0.4s ease;
`;

export const FadeOverlay = styled.div<{ $active: boolean }>`
  position: fixed;
  inset: 0;
  background: ${colors.cream};
  z-index: 100;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.55s ease;
`;

export const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

export const SrOnly = styled.span`
  ${srOnly}
`;
