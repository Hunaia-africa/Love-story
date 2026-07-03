"use client";

/* Image 4 — the florals ink themselves in from the corners, the ghost
   monogram drifts with the scroll, and the countdown ticks alive. */

import { useRef } from "react";
import styled from "styled-components";
import PageShell from "@/components/PageShell";
import Countdown from "@/components/Countdown";
import { ScriptTitle } from "@/components/Typography";
import { GoldCornerFloral, Twig, PinIcon } from "@/components/decor";
import { SplitWords } from "@/components/motion/text";
import { Reveal, Parallax, useDraw } from "@/components/motion/fx";
import { colors } from "@/theme/tokens";

const Corner = styled.div<{ $pos: "tr" | "bl" }>`
  position: fixed;
  width: clamp(150px, 24vw, 300px);

  @media (max-width: 640px) {
    width: 116px;
  }

  z-index: 0;
  pointer-events: none;
  color: ${colors.gold};
  ${(p) =>
    p.$pos === "tr"
      ? "top: -8px; right: -10px;"
      : "bottom: -8px; left: -10px; transform: rotate(180deg);"}

  svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }
`;

const Ghost = styled.span`
  position: absolute;
  top: -3.2rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-display);
  font-size: clamp(9rem, 26vw, 15rem);
  letter-spacing: -0.06em;
  color: rgba(226, 197, 138, 0.22);
  user-select: none;
  pointer-events: none;
  line-height: 1;
`;

const TwigWrap = styled.span`
  display: block;
  width: clamp(74px, 10vw, 110px);
  margin: 0 auto 0.2rem;
  color: #57493b;

  svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }
`;

const Head = styled.header`
  position: relative;
  text-align: center;
  padding-top: 2.2rem;
`;

const DateLine = styled.p`
  margin: clamp(2.6rem, 7vh, 4.2rem) 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 3.4vw, 1.75rem);
  letter-spacing: 0.28em;
  text-indent: 0.28em;
  color: ${colors.rust};
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.08rem;
    letter-spacing: 0.18em;
    text-indent: 0.18em;
  }
`;

const Place = styled.p`
  margin: clamp(2.4rem, 6.5vh, 4rem) 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.25rem 0.8rem;
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 4.4vw, 2.15rem);
  letter-spacing: 0.22em;
  text-indent: 0.1em;
  color: ${colors.bark};

  svg {
    width: clamp(22px, 3.4vw, 30px);
    height: auto;
    color: #8a5a33;
    flex: none;
  }

  @media (max-width: 480px) {
    font-size: 1.18rem;
    letter-spacing: 0.12em;
    gap: 0.2rem 0.55rem;
  }
`;

const SubPlace = styled.p`
  margin: clamp(1.8rem, 5vh, 3rem) 0 0;
  font-family: var(--font-display);
  font-size: clamp(0.95rem, 2.6vw, 1.35rem);
  letter-spacing: 0.24em;
  text-indent: 0.24em;

  @media (max-width: 480px) {
    letter-spacing: 0.15em;
    text-indent: 0.15em;
  }

  color: ${colors.clay};
  text-align: center;
`;

const CountHead = styled.h2`
  margin: clamp(2.6rem, 7vh, 4.4rem) 0 1.6rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.15rem, 3.2vw, 1.6rem);
  letter-spacing: 0.2em;
  text-indent: 0.2em;
  color: ${colors.rust};
  text-align: center;

  @media (max-width: 480px) {
    letter-spacing: 0.13em;
    text-indent: 0.13em;
  }

  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 1.5px;
`;

export default function SaveTheDatePage() {
  const cornersRef = useRef<HTMLDivElement>(null);
  const twigRef = useRef<HTMLSpanElement>(null);
  useDraw(cornersRef, { trigger: "load", duration: 2.1, stagger: 0.045 });
  useDraw(twigRef, { trigger: "load", delay: 0.4, duration: 1.4 });

  return (
    <PageShell>
      <div ref={cornersRef}>
        <Corner $pos="tr" aria-hidden>
          <GoldCornerFloral />
        </Corner>
        <Corner $pos="bl" aria-hidden>
          <GoldCornerFloral />
        </Corner>
      </div>

      <Head>
        <Parallax amount={18} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Ghost aria-hidden>DF</Ghost>
        </Parallax>
        <TwigWrap ref={twigRef} aria-hidden>
          <Twig />
        </TwigWrap>
        <ScriptTitle>
          <SplitWords text="Save The Date" trigger="load" delay={0.35} stagger={0.11} duration={1.3} />
        </ScriptTitle>
      </Head>

      <DateLine>
        <SplitWords text="14TH AUGUST 2026" trigger="load" delay={0.85} stagger={0.07} y={100} />
      </DateLine>

      <Reveal delay={0.2} y={30}>
        <Place>
          <PinIcon aria-hidden />
          KAKAMEGA TOWN
        </Place>
        <SubPlace>OPPOSITE LITTLE HOMES AMALEMBA</SubPlace>
      </Reveal>

      <Reveal y={34}>
        <CountHead>THE COUNTDOWN</CountHead>
        <Countdown target="2026-08-14T09:00:00+03:00" />
      </Reveal>
    </PageShell>
  );
}
