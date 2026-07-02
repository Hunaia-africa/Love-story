"use client";

import styled from "styled-components";
import { WaxPin } from "@/components/decor";

/* ------------------------------------------------------------------ */
/*  PhotoPlaceholder — elegant stand-in until the real photos arrive. */
/*  Sepia duotone wash + film grain + a small camera mark + label.    */
/* ------------------------------------------------------------------ */

const Frame = styled.div<{ $ratio?: string; $radius?: string; $tone?: "warm" | "mono" }>`
  position: relative;
  width: 100%;
  ${(p) => (p.$ratio ? `aspect-ratio: ${p.$ratio};` : "height: 100%;")}
  border-radius: ${(p) => p.$radius || "2px"};
  overflow: hidden;
  background: ${(p) =>
    p.$tone === "mono"
      ? "linear-gradient(150deg, #d9d4cb 0%, #a9a29a 45%, #6e675f 100%)"
      : "linear-gradient(150deg, #e6d4b4 0%, #c2996a 45%, #8a6642 100%)"};
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 22%, rgba(255, 248, 230, 0.5), transparent 55%),
      repeating-linear-gradient(
        115deg,
        rgba(60, 42, 26, 0.05) 0 1px,
        transparent 1px 9px
      );
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 42px rgba(46, 30, 16, 0.35);
  }
`;

const Mark = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 9%;
  text-align: center;
  color: rgba(46, 30, 16, 0.72);

  svg {
    margin: 0 auto 6px;
    opacity: 0.75;
  }
`;

const Label = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-size: clamp(0.62rem, 4.2cqw, 0.9rem);
  letter-spacing: 0.06em;
  margin: 0;
  padding: 0 8%;
`;

function CameraGlyph() {
  return (
    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" aria-hidden>
      <rect x="1" y="4" width="24" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 4 L10 1 h6 l2 3" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="13" cy="11.5" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="21" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function PhotoPlaceholder({
  label,
  ratio,
  radius,
  tone = "warm",
  className,
}: {
  label: string;
  ratio?: string;
  radius?: string;
  tone?: "warm" | "mono";
  className?: string;
}) {
  return (
    <Frame $ratio={ratio} $radius={radius} $tone={tone} className={className} role="img" aria-label={`Photo placeholder: ${label}`}>
      <Mark>
        <CameraGlyph />
        <Label>{label}</Label>
      </Mark>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/*  Polaroid — white instant-photo frame, optional gold wax pin.      */
/* ------------------------------------------------------------------ */

const PolaroidCard = styled.figure<{ $tilt: number }>`
  position: relative;
  width: 100%;
  margin: 0;
  background: #fdfbf6;
  padding: 4.5% 4.5% 13%;
  box-shadow:
    0 1px 2px rgba(43, 33, 28, 0.14),
    0 12px 26px rgba(43, 33, 28, 0.2);
  transform: rotate(${(p) => p.$tilt}deg);
`;

const PinWrap = styled.div`
  position: absolute;
  top: -5.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 17%;
  filter: drop-shadow(0 3px 4px rgba(43, 33, 28, 0.3));
  z-index: 2;
`;

export function Polaroid({
  label,
  ratio = "4 / 5",
  tilt = 0,
  pinned = false,
  tone = "warm",
  className,
}: {
  label: string;
  ratio?: string;
  tilt?: number;
  pinned?: boolean;
  tone?: "warm" | "mono";
  className?: string;
}) {
  return (
    <PolaroidCard $tilt={tilt} className={className}>
      {pinned && (
        <PinWrap>
          <WaxPin />
        </PinWrap>
      )}
      <PhotoPlaceholder label={label} ratio={ratio} tone={tone} />
    </PolaroidCard>
  );
}
