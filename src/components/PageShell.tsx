"use client";

import styled from "styled-components";
import Link from "next/link";
import { colors } from "@/theme/tokens";
import HomeButton from "@/components/HomeButton";

const Wrap = styled.div<{ $dark?: boolean }>`
  min-height: 100dvh;
  width: 100%;
  background: ${(p) => (p.$dark ? colors.espresso : colors.cream)};
  color: ${(p) => (p.$dark ? colors.ivory : colors.espresso)};
  position: relative;
  padding: 96px 7vw 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    padding: 88px 6vw 64px;
  }
`;

const CloseBtn = styled(Link)<{ $dark?: boolean }>`
  position: fixed;
  top: 24px;
  right: 28px;
  z-index: 50;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => (p.$dark ? "rgba(247,242,233,0.1)" : "rgba(43,33,28,0.08)")};
  border: 1px solid ${(p) => (p.$dark ? "rgba(247,242,233,0.35)" : "rgba(43,33,28,0.25)")};
  color: inherit;
  font-size: 1.3rem;
  font-family: var(--font-body);
  transition: transform 0.25s ease, background 0.25s ease;

  &:hover {
    transform: rotate(90deg);
    background: ${colors.gold};
    color: ${colors.espresso};
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export default function PageShell({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Wrap $dark={dark}>
      <HomeButton dark={dark} />
      <CloseBtn href="/menu" $dark={dark} aria-label="Back to menu">
        ✕
      </CloseBtn>
      <Content>{children}</Content>
    </Wrap>
  );
}
