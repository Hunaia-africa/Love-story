"use client";

import styled from "styled-components";

export const RingsIcon = ({
  color = "#C9A15F",
  size = 48,
}: {
  color?: string;
  size?: number;
}) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 80 50" fill="none">
    <circle cx="30" cy="28" r="16" stroke={color} strokeWidth="2.5" />
    <circle cx="50" cy="22" r="16" stroke={color} strokeWidth="2.5" />
    <path
      d="M42 10 L47 2 L52 10 L48 12 L50 18 L44 18 L46 12 Z"
      fill={color}
      opacity="0.85"
    />
  </svg>
);

export const FlourishDivider = ({
  color = "#2B211C",
  width = 220,
}: {
  color?: string;
  width?: number;
}) => (
  <svg width={width} height={width * 0.22} viewBox="0 0 300 66" fill="none">
    <path
      d="M10 33 C 40 10, 70 10, 100 33 C 120 48, 140 15, 150 33 C 160 15, 180 48, 200 33 C 230 10, 260 10, 290 33"
      stroke={color}
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const CupidIcon = ({
  color = "#7A5B41",
  size = 90,
}: {
  color?: string;
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse
      cx="34"
      cy="42"
      rx="16"
      ry="22"
      stroke={color}
      strokeWidth="1.4"
      transform="rotate(-25 34 42)"
    />
    <circle cx="52" cy="48" r="9" stroke={color} strokeWidth="1.4" />
    <path
      d="M58 46 Q75 40 82 46"
      stroke={color}
      strokeWidth="1.4"
      fill="none"
    />
    <path d="M60 40 L83 42 L60 55" stroke={color} strokeWidth="1.4" fill="none" />
    <path
      d="M42 62 Q50 74 60 62"
      stroke={color}
      strokeWidth="1.4"
      fill="none"
    />
  </svg>
);

export const WaxSeal = styled.div<{ $size?: number; $color?: string }>`
  width: ${(p) => p.$size || 72}px;
  height: ${(p) => p.$size || 72}px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 30%,
    ${(p) => p.$color || "#8B1E1E"} 0%,
    #5c1414 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
  color: #f2ddb0;
  font-family: var(--font-script);
  font-size: ${(p) => (p.$size ? p.$size * 0.32 : 22)}px;
`;

export const RingSpin = ({
  color = "#C9A15F",
  size = 56,
}: {
  color?: string;
  size?: number;
}) => (
  <svg width={size} height={size * 0.65} viewBox="0 0 90 55" fill="none">
    <ellipse cx="32" cy="30" rx="17" ry="17" stroke={color} strokeWidth="2" />
    <ellipse cx="55" cy="24" rx="17" ry="17" stroke={color} strokeWidth="2" />
    <polygon points="52,8 58,0 64,8 60,12 62,18 54,18 56,12" fill={color} />
  </svg>
);

export const HouseTent = ({ color = "#4A362A", size = 40 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <path d="M5 26 L30 8 L55 26" stroke={color} strokeWidth="0" fill={color} />
    <path d="M5 26 L30 8 L55 26 L48 30 L30 16 L12 30 Z" fill={color} />
    <rect x="12" y="30" width="36" height="24" fill={color} opacity="0.9" />
    <path d="M25 54 L25 38 L35 38 L35 54" stroke="#F7F2E9" strokeWidth="2" fill="none" />
  </svg>
);
