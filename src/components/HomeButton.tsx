"use client";

import styled from "styled-components";
import Link from "next/link";
import { colors } from "@/theme/tokens";

const Btn = styled(Link)<{ $dark?: boolean }>`
  position: fixed;
  top: 24px;
  left: 28px;
  z-index: 50;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) =>
    p.$dark ? "rgba(247,242,233,0.1)" : "rgba(43,33,28,0.08)"};
  border: 1px solid
    ${(p) => (p.$dark ? "rgba(247,242,233,0.35)" : "rgba(43,33,28,0.25)")};
  color: inherit;
  transition: transform 0.25s ease, background 0.25s ease;

  &:hover {
    transform: scale(1.08);
    background: ${colors.gold};
    color: ${colors.espresso};
  }
`;

export default function HomeButton({ dark = false }: { dark?: boolean }) {
  return (
    <Btn href="/" $dark={dark} aria-label="Back to home">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 11.5L12 4l9 7.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 20v-5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Btn>
  );
}
