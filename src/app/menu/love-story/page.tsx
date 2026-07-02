"use client";

/* Images 10–13 as one scroll: chapter one, interlude, chapter two,
   and the full-bleed "Forever begins here!" finale. */

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { ScriptTitle } from "@/components/Typography";
import { PhotoPlaceholder, Polaroid } from "@/components/Photo";
import { Cupid, GoldRings, DriedSprig } from "@/components/decor";
import { colors } from "@/theme/tokens";

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
  padding: clamp(6rem, 22vh, 12rem) 6vw;
  text-align: center;
`;

const InterludeLine = styled.p`
  margin: 0.6rem 0 0;
  font-family: var(--font-script);
  font-size: clamp(2.1rem, 6.5vw, 3.6rem);
  color: ${colors.rust};
  line-height: 1.2;
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
  }
`;

const BigShot = styled.div`
  grid-row: span 2;
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
`;

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
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
  background:
    radial-gradient(circle at 50% 34%, rgba(255, 205, 150, 0.42), transparent 45%),
    linear-gradient(180deg, #b9c3c9 0%, #d9c1a8 34%, #caa27e 55%, #a97f5e 78%, #8d6448 100%);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(40, 26, 16, 0.16);
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
  text-shadow: 0 2px 14px rgba(40, 26, 16, 0.35);
`;

const HandNote = styled.span`
  position: relative;
  z-index: 1;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  color: rgba(255, 252, 244, 0.75);
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
  }
`;

export default function LoveStoryPage() {
  return (
    <PageShell bare>
      {/* ---------------- chapter one (image 10) ---------------- */}
      <Section style={{ paddingTop: "clamp(5.4rem, 12vh, 7rem)" }}>
        <CupidWrap aria-hidden>
          <Cupid />
        </CupidWrap>
        <ScriptTitle>Our Love Story</ScriptTitle>
        <Kicker>A FRIENDSHIP THAT FOUND ITS WAY BACK</Kicker>

        <Chapter>
          <Filmstrip aria-label="Photo-booth strip of Dave and Faizah">
            <PhotoPlaceholder label="Desert day out" ratio="1 / 1" />
            <PhotoPlaceholder label="Road-trip selfie" ratio="1 / 1" />
            <PhotoPlaceholder label="Matching sunglasses" ratio="1 / 1" />
          </Filmstrip>

          <Story>
            <Para $dropcap>
              It all began in 2012, when Faizah and David met through a mutual
              friend during their high school years.
            </Para>
            <Para>
              What started as friendship quickly became a beautiful connection
              filled with laughter, conversations, and unforgettable moments.
            </Para>
            <Para>
              One memory stayed close to Faizah&rsquo;s heart; A simple
              housewarming invitation where he held her hand and walked her
              around his home, showing her his world.
            </Para>
            <Para>
              It was such a small gesture, but to her, it revealed something
              special: kindness, gentleness, and a heart she would always
              remember.
            </Para>
          </Story>
        </Chapter>
      </Section>

      {/* ---------------- interlude (image 11) ---------------- */}
      <Interlude>
        <CupidWrap $small aria-hidden>
          <Cupid />
        </CupidWrap>
        <InterludeLine>Some stories take time to unfold</InterludeLine>
      </Interlude>

      {/* ---------------- chapter two (image 12) ---------------- */}
      <Section>
        <ScriptTitle $size="clamp(2.6rem, 8.5vw, 4.4rem)">
          Two hearts. One journey
        </ScriptTitle>

        <Collage>
          <BigShot>
            <Polaroid label="Us, by the lake" ratio="3 / 4" tilt={-0.6} pinned />
          </BigShot>
          <Polaroid label="Quad-bike adventure" ratio="4 / 5" tilt={1.8} pinned />
          <Polaroid label="A quiet hug" ratio="1 / 1" tilt={-1.2} tone="mono" />
          <SprigOverlay aria-hidden>
            <DriedSprig />
          </SprigOverlay>
        </Collage>

        <Paragraphs>
          <DarkPara>
            After some time, life took them in different directions and their
            friendship went quiet. But years later, their paths crossed again.
          </DarkPara>
          <DarkPara>
            A few messages turned into conversations, and soon they found
            themselves reconnecting and creating new memories together.
          </DarkPara>
          <DarkPara>
            From a first rock concert experience to a spontaneous New
            Year&rsquo;s Eve celebration, somewhere along the way, friendship
            became love.
          </DarkPara>
          <DarkPara>
            For Faizah, she knew she had found something different — a love she
            had prayed for. For David, he knew he had found someone who fit
            perfectly into his life, someone who not only loved him but
            embraced his daughter, Zani, with so much warmth and care.
          </DarkPara>
          <DarkPara>
            What began as a friendship became a partnership, a family, and a
            promise to walk through life together.
          </DarkPara>
        </Paragraphs>
      </Section>

      {/* ---------------- finale (image 13) ---------------- */}
      <Finale>
        <FinaleInner>
          <FinaleNames>David &amp; Faizah</FinaleNames>
        </FinaleInner>

        <FinaleInner>
          <Arch viewBox="0 0 700 150" role="img" aria-label="Forever begins here!">
            <defs>
              <path id="forever-arc" d="M 40 140 Q 350 -30 660 140" fill="none" />
            </defs>
            <text textAnchor="middle">
              <textPath href="#forever-arc" startOffset="50%">
                FOREVER BEGINS HERE!
              </textPath>
            </text>
          </Arch>
          <FinaleDate>14.08.2026</FinaleDate>
          <FinaleRings aria-hidden>
            <GoldRings />
          </FinaleRings>
          <HandNote>
            Background photo placeholder — the beach ring shot goes here
          </HandNote>
        </FinaleInner>
      </Finale>
    </PageShell>
  );
}
