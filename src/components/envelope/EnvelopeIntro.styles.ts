"use client";

import styled from "styled-components";
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
  background: radial-gradient(
      circle at 50% 20%,
      rgba(120, 90, 60, 0.35),
      transparent 60%
    ),
    linear-gradient(180deg, #1c1410 0%, #14100c 55%, #0f0b09 100%);
  padding: 2rem;
`;

export const Vignette = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(0, 0, 0, 0.55) 100%
  );
`;

export const Eyebrow = styled.p`
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  color: ${colors.ivory};
  text-align: center;
  margin: 0 0 0.5rem;
  z-index: 2;
`;

export const Names = styled.h1`
  font-family: var(--font-script);
  font-size: clamp(3rem, 11vw, 6.5rem);
  color: ${colors.creamDark};
  text-align: center;
  margin: 0 0 3rem;
  z-index: 2;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

export const EnvelopeButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 2;
  perspective: 1400px;
`;

export const EnvelopeBody = styled.div`
  position: relative;
  width: min(78vw, 380px);
  height: min(52vw, 250px);
  background: linear-gradient(160deg, #d1a465 0%, #b3814a 60%, #9c6d3d 100%);
  border-radius: 6px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55);
`;

export const EnvelopeFlap = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 62%;
  background: linear-gradient(160deg, #dcb679 0%, #bd905a 100%);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  transform-origin: top center;
  transform: rotateX(${(p) => (p.$open ? "180deg" : "0deg")});
  transition: transform 0.9s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: 3;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
`;

export const EnvelopePocket = styled.div`
  position: absolute;
  inset: 0;
  clip-path: polygon(0 100%, 50% 45%, 100% 100%);
  background: linear-gradient(200deg, #c99a5d 0%, #a3763f 100%);
  z-index: 2;
`;

export const SealWrap = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    scale(${(p) => (p.$open ? 0 : 1)});
  opacity: ${(p) => (p.$open ? 0 : 1)};
  transition: all 0.4s ease;
  z-index: 4;
`;

export const LetterCard = styled.div<{ $open: boolean }>`
  position: absolute;
  left: 50%;
  bottom: ${(p) => (p.$open ? "92%" : "8%")};
  transform: translateX(-50%) scale(${(p) => (p.$open ? 1.05 : 0.9)});
  width: 86%;
  height: 70%;
  background: ${colors.ivory};
  border-radius: 4px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transition: bottom 0.9s cubic-bezier(0.65, 0, 0.35, 1) 0.15s,
    transform 0.9s cubic-bezier(0.65, 0, 0.35, 1) 0.15s,
    opacity 0.4s ease 0.15s;
`;

export const Caption = styled.p`
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: ${colors.creamDark};
  margin-top: 2.5rem;
  text-align: center;
  z-index: 2;
`;

export const FadeOverlay = styled.div<{ $active: boolean }>`
  position: fixed;
  inset: 0;
  background: ${colors.cream};
  z-index: 100;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.6s ease;
`;
