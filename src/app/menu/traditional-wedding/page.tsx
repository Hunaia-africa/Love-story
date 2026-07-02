"use client";

/* Image 3 — full-bleed couple photo, dark wash, thin gold-framed box. */

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { GoldRings } from "@/components/decor";

const Stage = styled.div`
  position: relative;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18vh 6vw;
  overflow: hidden;

  /* photo placeholder backdrop — swap for the real image later */
  background:
    radial-gradient(circle at 24% 18%, rgba(255, 214, 150, 0.28), transparent 42%),
    radial-gradient(circle at 78% 30%, rgba(214, 160, 110, 0.22), transparent 46%),
    repeating-linear-gradient(115deg, rgba(0, 0, 0, 0.05) 0 2px, transparent 2px 11px),
    linear-gradient(160deg, #8a6647 0%, #5d4330 45%, #33241a 100%);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(24, 16, 11, 0.52);
  }
`;

const PhotoNote = styled.span`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  color: rgba(246, 241, 231, 0.55);
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
  background: rgba(28, 19, 13, 0.14);
  backdrop-filter: blur(1px);
`;

const Rings = styled.div`
  width: clamp(58px, 9vw, 84px);
  margin: 0 auto 0.4rem;
  color: #e2b055;

  svg {
    width: 100%;
    height: auto;
  }
`;

const Names = styled.h1`
  font-family: var(--font-script);
  font-weight: 400;
  font-size: clamp(3rem, 11vw, 5.4rem);
  line-height: 1.1;
  margin: 0 0 1.4rem;
  color: #f1e9d7;
`;

const Rule = styled.hr`
  width: min(420px, 78%);
  margin: 0 auto 1.6rem;
  border: none;
  border-top: 1px solid rgba(226, 190, 122, 0.9);
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
  return (
    <PageShell dark bare>
      <Stage>
        <GoldBox>
          <Rings aria-hidden>
            <GoldRings />
          </Rings>
          <Names>Dave &amp; Faizah</Names>
          <Rule />
          <Invite>
            You are invited to join us as we celebrate our traditional wedding
          </Invite>
        </GoldBox>
        <PhotoNote>Background photo placeholder — your favourite selfie goes here</PhotoNote>
      </Stage>
    </PageShell>
  );
}
