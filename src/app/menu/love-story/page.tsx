"use client";

/* Images 10–13 as one cinematic scroll:
   chapter one (filmstrip wipes in) → the interlude line breathes in
   word-by-word with the scroll → chapter two (polaroids tumble onto
   the page) → a drifting strip of moments → the full-bleed finale. */

import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { ScriptTitle } from "@/components/Typography";
import { Img, Polaroid } from "@/components/Photo";
import { Cupid, GoldRings, DriedSprig } from "@/components/decor";
import { SplitWords, ScrubWords } from "@/components/motion/text";
import { Reveal, useDraw } from "@/components/motion/fx";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";
import { colors } from "@/theme/tokens";
import { photos } from "@/lib/assets";

const Section = styled.section`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: clamp(3rem, 8vh, 5rem) 6vw;
`;

const CupidWrap = styled.div<{ $small?: boolean }>`
  width: ${(p) => (p.$small ? "clamp(64px, 9vw, 92px)" : "clamp(80px, 11vw, 118px)")};
  margin: 0 auto 0.3rem;
  color: #7a4a2a;

  svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }
`;

const Kicker = styled.p`
  margin: 1rem 0 0;
  text-align: center;
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.05rem, 3vw, 1.45rem);
  letter-spacing: 0.14em;
  color: #4b2f1d;

  @media (max-width: 480px) {
    letter-spacing: 0.1em;
  }
`;

const Chapter = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(2rem, 6vw, 3.6rem);
  align-items: start;
  margin-top: clamp(2.4rem, 6vh, 3.8rem);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

/* photo-booth filmstrip */
const Filmstrip = styled.div`
  background: #241a13;
  padding: clamp(0.9rem, 2.4vw, 1.3rem);
  display: flex;
  flex-direction: column;
  gap: clamp(0.9rem, 2.4vw, 1.3rem);
  transform: rotate(-2.4deg);
  box-shadow: 0 22px 46px rgba(43, 33, 28, 0.3);
  max-width: 330px;
  justify-self: center;
  width: 100%;

  @media (max-width: 720px) {
    transform: rotate(-1.4deg);
  }
`;

const Cell = styled.div`
  overflow: hidden;

  img {
    will-change: transform;
  }
`;

const Story = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
`;

const Para = styled.p<{ $dropcap?: boolean }>`
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(1.08rem, 2.7vw, 1.32rem);
  letter-spacing: 0.06em;
  line-height: 1.95;
  color: #5b4632;
  margin: 0;

  ${(p) =>
    p.$dropcap &&
    `
    &::first-letter {
      font-size: 2.1em;
      font-style: normal;
      font-weight: 600;
      color: ${colors.espresso};
      padding-right: 2px;
      line-height: 0.9;
    }
  `}
`;

const DarkPara = styled(Para)`
  color: #3c2c1e;
  text-align: center;
  max-width: 62ch;
  margin: 0 auto;
`;

/* interlude */
const Interlude = styled.section`
  padding: clamp(4.5rem, 22vh, 14rem) 6vw;
  text-align: center;
`;

const InterludeLine = styled.div`
  margin: 0.6rem auto 0;
  max-width: 22ch;
  font-family: var(--font-script);
  font-size: clamp(2.1rem, 6.5vw, 3.6rem);
  color: ${colors.rust};
  line-height: 1.25;
`;

/* chapter two collage */
const Collage = styled.div`
  position: relative;
  margin: clamp(2.4rem, 6vh, 3.6rem) auto clamp(2.8rem, 7vh, 4.2rem);
  max-width: 780px;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: clamp(1.4rem, 4vw, 2.4rem);
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    gap: clamp(1.1rem, 4.5vw, 1.6rem);
  }
`;

const BigShot = styled.div`
  grid-row: span 2;

  /* phones: hero shot goes full width, the two smaller share a row below */
  @media (max-width: 640px) {
    grid-row: auto;
    grid-column: 1 / -1;
    width: min(100%, 420px);
    justify-self: center;
  }
`;

const SprigOverlay = styled.span`
  position: absolute;
  left: 48%;
  bottom: -7%;
  width: clamp(60px, 9vw, 96px);
  transform: rotate(14deg);
  color: #b78e83;
  opacity: 0.85;
  pointer-events: none;

  svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 640px) {
    left: auto;
    right: 2%;
    bottom: -4%;
    width: clamp(46px, 14vw, 64px);
  }
`;

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
`;

/* moments strip — GSAP drift on desktop, native swipe on phones */
const Moments = styled.section`
  padding: clamp(2rem, 6vh, 4rem) 0 clamp(3rem, 8vh, 5rem);
  overflow: hidden;

  @media (max-width: 720px) {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 8vw;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const MomentsLabel = styled.p`
  text-align: center;
  margin: 0 0 clamp(1.4rem, 4vh, 2.4rem);
  font-family: var(--font-display);
  font-size: 0.78rem;
  letter-spacing: 0.32em;
  text-indent: 0.32em;
  text-transform: uppercase;
  color: ${colors.softBrownText};

  @media (max-width: 720px) {
    position: sticky;
    left: 0;
    width: 100vw;
  }
`;

const Track = styled.div`
  display: flex;
  gap: clamp(1rem, 2.6vw, 1.8rem);
  width: max-content;
  margin-inline: auto;
  padding: 0 6vw;
  will-change: transform;

  @media (max-width: 720px) {
    padding: 0.4rem 8vw 1rem;
    will-change: auto;
  }
`;

const Tile = styled.figure<{ $tilt: number }>`
  margin: 0;
  width: clamp(200px, 26vw, 280px);
  flex: none;
  background: #fdfbf6;
  padding: 3.5% 3.5% 9%;
  box-shadow: 0 14px 30px rgba(43, 33, 28, 0.18);
  transform: rotate(${(p) => p.$tilt}deg);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  img {
    filter: saturate(0.88);
    transition: filter 0.35s ease, transform 0.6s ease;
  }

  @media (max-width: 720px) {
    width: min(62vw, 250px);
    scroll-snap-align: center;
    transform: rotate(${(p) => p.$tilt * 0.6}deg);
  }

  @media (hover: hover) {
    &:hover {
      transform: rotate(0deg) translateY(-8px) scale(1.03);
      box-shadow: 0 24px 44px rgba(43, 33, 28, 0.26);
      z-index: 2;
      position: relative;

      img {
        filter: saturate(1.06);
        transform: scale(1.05);
      }
    }
  }
`;

/* finale */
const Finale = styled.section`
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: clamp(3.4rem, 9vh, 5.4rem) 6vw clamp(3rem, 8vh, 4.6rem);
  text-align: center;
  overflow: hidden;
  background: #26180f;
`;

const FinaleBg = styled.div`
  position: absolute;
  inset: -12% 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 45%;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(30, 19, 12, 0.42) 0%,
      rgba(30, 19, 12, 0.1) 34%,
      rgba(30, 19, 12, 0.16) 66%,
      rgba(24, 15, 9, 0.55) 100%
    );
  }
`;

const FinaleInner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FinaleNames = styled.h2`
  font-family: var(--font-script);
  font-weight: 400;
  font-size: clamp(2.9rem, 10vw, 5rem);
  color: #fdfaf2;
  margin: 0;
  text-shadow: 0 2px 14px rgba(40, 26, 16, 0.45);
`;

const Arch = styled.svg`
  width: min(680px, 94%);
  height: auto;
  overflow: visible;

  text {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 44px;
    letter-spacing: 0.14em;
    fill: #f2b44c;
  }
`;

const FinaleDate = styled.p`
  margin: -0.6rem 0 0.8rem;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 4vw, 2rem);
  letter-spacing: 0.16em;
  color: #fdfaf2;
`;

const FinaleRings = styled.div`
  width: clamp(60px, 9vw, 84px);
  color: #f2b44c;

  svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }
`;

export default function LoveStoryPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cupidRef = useRef<HTMLDivElement>(null);
  const finaleRingsRef = useRef<HTMLDivElement>(null);
  useDraw(cupidRef, { trigger: "load", delay: 0.2, duration: 1.6 });
  useDraw(finaleRingsRef, { start: "top 92%", duration: 1.4 });

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      /* filmstrip: each frame wipes open, photo settles */
      gsap.utils.toArray<HTMLElement>("[data-film]").forEach((cell, i) => {
        gsap.fromTo(
          cell,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.1,
            delay: i * 0.14,
            ease: "power3.inOut",
            scrollTrigger: { trigger: cell, start: "top 88%", once: true },
          },
        );
        const img = cell.querySelector("img");
        if (img)
          gsap.fromTo(
            img,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 1.5,
              delay: i * 0.14,
              ease: "power3.out",
              scrollTrigger: { trigger: cell, start: "top 88%", once: true },
            },
          );
      });

      /* chapter two: polaroids tumble in */
      gsap.utils.toArray<HTMLElement>("[data-tumble]").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 70, rotate: i % 2 ? 7 : -6, scale: 0.92 },
          {
            autoAlpha: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 1.15,
            delay: i * 0.12,
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          },
        );
      });

      /* moments strip drifts with the scroll — desktop only; phones swipe it
         natively. Distance is measured so every tile passes through view. */
      mm.add("(min-width: 721px)", () => {
        const track = root.querySelector<HTMLElement>("[data-track]");
        if (!track) return;
        gsap.fromTo(
          track,
          { x: 60 },
          {
            x: () => -Math.max(0, track.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: track.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      /* finale: photo parallax + the arch letters breathe apart */
      const bg = root.querySelector<HTMLElement>("[data-finale-bg] img");
      if (bg) {
        gsap.fromTo(
          bg,
          { yPercent: -9 },
          {
            yPercent: 9,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-finale]",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          },
        );
      }
      gsap.fromTo(
        "[data-arch] text",
        { opacity: 0, letterSpacing: "0.55em" },
        {
          opacity: 1,
          letterSpacing: "0.14em",
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-arch]", start: "top 85%", once: true },
        },
      );
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <PageShell bare>
      <div ref={rootRef}>
        {/* ---------------- chapter one (image 10) ---------------- */}
        <Section style={{ paddingTop: "clamp(5.4rem, 12vh, 7rem)" }}>
          <CupidWrap ref={cupidRef} aria-hidden>
            <Cupid />
          </CupidWrap>
          <ScriptTitle>
            <SplitWords text="Our Love Story" trigger="load" delay={0.3} stagger={0.11} duration={1.3} />
          </ScriptTitle>
          <Kicker>
            <SplitWords
              text="A FRIENDSHIP THAT FOUND ITS WAY BACK"
              trigger="load"
              delay={0.75}
              stagger={0.045}
              y={100}
            />
          </Kicker>

          <Chapter>
            <Filmstrip aria-label="Photo-booth strip of Dave and Faizah">
              <Cell data-film>
                <Img photo={photos.filmBeach} ratio="1 / 1" position="50% 30%" />
              </Cell>
              <Cell data-film>
                <Img photo={photos.filmCar} ratio="1 / 1" position="50% 35%" />
              </Cell>
              <Cell data-film>
                <Img photo={photos.filmThatch} ratio="1 / 1" position="50% 28%" />
              </Cell>
            </Filmstrip>

            <Reveal stagger={0.16} y={38}>
              <Story>
                <Para $dropcap>
                  It all began in 2012, when Faizah and David met through a
                  mutual friend during their high school years.
                </Para>
                <Para>
                  What started as friendship quickly became a beautiful
                  connection filled with laughter, conversations, and
                  unforgettable moments.
                </Para>
                <Para>
                  One memory stayed close to Faizah&rsquo;s heart; A simple
                  housewarming invitation where he held her hand and walked her
                  around his home, showing her his world.
                </Para>
                <Para>
                  It was such a small gesture, but to her, it revealed
                  something special: kindness, gentleness, and a heart she
                  would always remember.
                </Para>
              </Story>
            </Reveal>
          </Chapter>
        </Section>

        {/* ---------------- interlude (image 11) ---------------- */}
        <Interlude>
          <Reveal y={20} scale={0.9}>
            <CupidWrap $small aria-hidden>
              <Cupid />
            </CupidWrap>
          </Reveal>
          <InterludeLine>
            <ScrubWords text="Some stories take time to unfold" start="top 74%" end="top 30%" />
          </InterludeLine>
        </Interlude>

        {/* ---------------- chapter two (image 12) ---------------- */}
        <Section>
          <ScriptTitle $size="clamp(2.6rem, 8.5vw, 4.4rem)">
            <SplitWords text="Two hearts. One journey" stagger={0.09} duration={1.2} />
          </ScriptTitle>

          <Collage>
            <BigShot data-tumble>
              <Polaroid photo={photos.storyStripes} ratio="3 / 4" tilt={-0.6} pinned position="38% 30%" />
            </BigShot>
            <div data-tumble>
              <Polaroid photo={photos.storyQuad} ratio="4 / 5" tilt={1.8} pinned position="50% 26%" />
            </div>
            <div data-tumble>
              <Polaroid photo={photos.storyHugBw} ratio="1 / 1" tilt={-1.2} tone="mono" position="50% 32%" />
            </div>
            <SprigOverlay aria-hidden>
              <DriedSprig />
            </SprigOverlay>
          </Collage>

          <Reveal stagger={0.16} y={36}>
            <Paragraphs>
              <DarkPara>
                After some time, life took them in different directions and
                their friendship went quiet. But years later, their paths
                crossed again.
              </DarkPara>
              <DarkPara>
                A few messages turned into conversations, and soon they found
                themselves reconnecting and creating new memories together.
              </DarkPara>
              <DarkPara>
                From a first rock concert experience to a spontaneous New
                Year&rsquo;s Eve celebration, somewhere along the way,
                friendship became love.
              </DarkPara>
              <DarkPara>
                For Faizah, she knew she had found something different — a
                love she had prayed for. For David, he knew he had found
                someone who fit perfectly into his life, someone who not only
                loved him but embraced his daughter, Zani, with so much warmth
                and care.
              </DarkPara>
              <DarkPara>
                What began as a friendship became a partnership, a family, and
                a promise to walk through life together.
              </DarkPara>
            </Paragraphs>
          </Reveal>
        </Section>

        {/* ---------------- moments strip ---------------- */}
        <Moments>
          <MomentsLabel>A few of our favourite moments</MomentsLabel>
          <Track data-track>
            {[
              { p: photos.momentLaugh, t: -2 },
              { p: photos.momentCouch, t: 1.6 },
              { p: photos.momentYellow, t: -1.2 },
              { p: photos.momentClose, t: 2.2 },
              { p: photos.filmThatch, t: -1.6 },
            ].map(({ p, t }, i) => (
              <Tile key={i} $tilt={t}>
                <Img photo={p} ratio="4 / 5" position="50% 30%" />
              </Tile>
            ))}
          </Track>
        </Moments>

        {/* ---------------- finale (image 13) ---------------- */}
        <Finale data-finale>
          <FinaleBg data-finale-bg aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.ringHand.src} alt="" loading="lazy" draggable={false} />
          </FinaleBg>

          <FinaleInner>
            <FinaleNames>
              <SplitWords text="Faizah & David" stagger={0.12} duration={1.3} />
            </FinaleNames>
          </FinaleInner>

          <FinaleInner>
            <Arch data-arch viewBox="0 0 700 150" role="img" aria-label="Forever begins here!">
              <defs>
                <path id="forever-arc" d="M 40 140 Q 350 -30 660 140" fill="none" />
              </defs>
              <text textAnchor="middle">
                <textPath href="#forever-arc" startOffset="50%">
                  FOREVER BEGINS HERE!
                </textPath>
              </text>
            </Arch>
            <Reveal y={26} delay={0.3}>
              <FinaleDate>14.08.2026</FinaleDate>
              <FinaleRings ref={finaleRingsRef} aria-hidden>
                <GoldRings />
              </FinaleRings>
            </Reveal>
          </FinaleInner>
        </Finale>
      </div>
    </PageShell>
  );
}
