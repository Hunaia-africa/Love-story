"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { colors } from "@/theme/tokens";

const rise = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrap = styled.div<{ $dark?: boolean }>`
  min-height: 100dvh;
  width: 100%;
  background: ${(p) => (p.$dark ? colors.espressoDeep : colors.cream)};
  color: ${(p) => (p.$dark ? colors.ivory : colors.espresso)};
  position: relative;
  padding: 104px 7vw 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: clip;

  @media (max-width: 640px) {
    padding: 92px 6vw 72px;
  }
`;

const RoundBtn = styled.button<{ $dark?: boolean }>`
  position: fixed;
  top: 22px;
  z-index: 60;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(p) => (p.$dark ? "rgba(246,241,231,0.1)" : "rgba(46,36,29,0.07)")};
  border: 1px solid
    ${(p) => (p.$dark ? "rgba(246,241,231,0.4)" : "rgba(46,36,29,0.28)")};
  color: inherit;
  backdrop-filter: blur(3px);
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${colors.gold};
    color: ${colors.espresso};
  }
`;

const CloseBtn = styled(RoundBtn)`
  right: 24px;
  &:hover {
    transform: rotate(90deg);
  }
`;

const HomeLink = styled(Link)<{ $dark?: boolean }>`
  position: fixed;
  top: 22px;
  left: 24px;
  z-index: 60;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => (p.$dark ? "rgba(246,241,231,0.1)" : "rgba(46,36,29,0.07)")};
  border: 1px solid
    ${(p) => (p.$dark ? "rgba(246,241,231,0.4)" : "rgba(46,36,29,0.28)")};
  color: inherit;
  backdrop-filter: blur(3px);
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;

  &:hover {
    transform: scale(1.08);
    background: ${colors.gold};
    color: ${colors.espresso};
  }
`;

const Content = styled.div<{ $wide?: boolean }>`
  width: 100%;
  max-width: ${(p) => (p.$wide ? "1040px" : "860px")};
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: ${rise} 0.5s ease both;
`;

/* Bare (full-bleed) pages still need to span the flex column — without
   this, a wide inner element (e.g. a horizontal strip) makes the whole
   page shrink-wrap to that width and drift off-centre on phones. */
const Bare = styled.div`
  width: 100%;
  min-width: 0;
`;

function MailGlyph() {
  return (
    <svg width="18" height="15" viewBox="0 0 22 17" fill="none" aria-hidden>
      <rect x="1" y="1" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M1.5 2.5 L11 10 L20.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export default function PageShell({
  children,
  dark = false,
  wide = false,
  bare = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  wide?: boolean;
  /** bare = no cream padding wrapper (full-bleed pages) */
  bare?: boolean;
}) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.push("/menu");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <Wrap $dark={dark} style={bare ? { padding: 0 } : undefined}>
      <HomeLink href="/" $dark={dark} aria-label="Back to the envelope">
        <MailGlyph />
      </HomeLink>
      <CloseBtn
        $dark={dark}
        aria-label="Close and return to the menu"
        onClick={() => router.push("/menu")}
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M2 2 L14 14 M14 2 L2 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </CloseBtn>
      {bare ? <Bare>{children}</Bare> : <Content $wide={wide}>{children}</Content>}
    </Wrap>
  );
}
