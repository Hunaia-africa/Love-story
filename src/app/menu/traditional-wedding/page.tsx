"use client";

/* Image 3 — full-bleed couple photograph, dark wash, gold-framed box.
   Sequence: photo breathes in → frame blooms → rings ink themselves →
   the names rise word by word → the invitation follows. */

import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { GoldRings } from "@/components/decor";
import { SplitWords } from "@/components/motion/text";
import { useDraw } from "@/components/motion/fx";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { photos } from "@/lib/assets";

const Stage = styled.div`
  position: relative;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16vh 6vw;
  overflow: hidden;
  background: #201610;
`;

const Photo = styled.div`
  position: absolute;
  inset: -2%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(120% 90% at 50% 40%, rgba(24, 16, 11, 0.18), rgba(24, 16, 11, 0.6) 90%),
      rgba(24, 16, 11, 0.42);
  }
`;

const GoldBox = styled.div`
  position: relative;
  z-index: 1;
  width: min(720px, 92%);
  border: 1px solid rgba(226, 190, 122, 0.75);
  border-radius: 10px;
  padding: clamp(2.4rem, 6vw, 4rem) clamp(1.6rem, 5vw, 3.4rem);
  text-align: center;
  color: #efe7d5;
  background: rgba(28, 19, 13, 0.16);
  backdrop-filter: blur(1.5px);
`;

const Rings = styled.div`
  width: clamp(58px, 9vw, 84px);
  margin: 0 auto 0.4rem;
  color: #e2b055;

  svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }
`;

const Names = styled.h1`
  font-family: var(--font-script);
  font-weight: 400;
  font-size: clamp(3rem, 11vw, 5.4rem);
  line-height: 1.15;
  margin: 0 0 1.4rem;
  color: #f1e9d7;
  text-shadow: 0 3px 22px rgba(0, 0, 0, 0.4);
`;

const Rule = styled.hr`
  width: min(420px, 78%);
  margin: 0 auto 1.6rem;
  border: none;
  border-top: 1px solid rgba(226, 190, 122, 0.9);
  transform-origin: center;
`;

const Invite = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.15rem, 3.4vw, 1.55rem);
  line-height: 1.65;
  letter-spacing: 0.03em;
  margin: 0 auto;
  max-width: 30ch;
`;

export default function TraditionalWeddingPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  useDraw(ringsRef, { trigger: "load", delay: 0.7, duration: 1.4 });

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-photo]",
        { scale: 1.12, autoAlpha: 0.4 },
        { scale: 1.02, autoAlpha: 1, duration: 2.4, ease: "power2.out" },
      );
      gsap.fromTo(
        "[data-box]",
        { autoAlpha: 0, scale: 0.94, y: 26 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 1.3, delay: 0.35, ease: "power3.out" },
      );
      gsap.fromTo(
        "[data-rule]",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.1, delay: 1.25, ease: "power3.inOut" },
      );
      /* keep the photograph breathing */
      gsap.to("[data-photo] img", {
        scale: 1.07,
        duration: 20,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <PageShell dark bare>
      <Stage ref={stageRef}>
        <Photo data-photo aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.inviteCouple.src} alt="" loading="eager" draggable={false} />
        </Photo>

        <GoldBox data-box>
          <Rings ref={ringsRef} aria-hidden>
            <GoldRings />
          </Rings>
          <Names>
            <SplitWords text="Faizah & Dave" trigger="load" delay={0.9} stagger={0.12} duration={1.3} />
          </Names>
          <Rule data-rule />
          <Invite>
            <SplitWords
              text="You are invited to join us as we celebrate our traditional wedding"
              trigger="load"
              delay={1.35}
              stagger={0.045}
              duration={0.9}
              y={100}
            />
          </Invite>
        </GoldBox>
      </Stage>
    </PageShell>
  );
}
