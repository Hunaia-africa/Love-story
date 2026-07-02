"use client";

import styled from "styled-components";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { RingsIcon } from "@/components/Ornaments";
import { colors } from "@/theme/tokens";

const Frame = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(160deg, #4a362a 0%, #2b211c 60%, #1a130f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const TextBox = styled.div`
  background: rgba(20, 15, 12, 0.55);
  border: 1px solid rgba(230, 210, 170, 0.5);
  border-radius: 6px;
  padding: 3rem 2.5rem;
  text-align: center;
  max-width: 560px;
  backdrop-filter: blur(2px);
`;

const Script = styled.h1`
  font-family: var(--font-script);
  font-size: clamp(2.6rem, 8vw, 4.2rem);
  color: ${colors.ivory};
  margin: 1rem 0 1rem;
`;

const Line = styled.div`
  width: 70%;
  height: 1px;
  background: ${colors.goldLight};
  margin: 1rem auto;
`;

const Body = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.3rem;
  line-height: 1.6;
  color: ${colors.ivory};
  margin: 0;
`;

const CTARow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

const CTA = styled(Link)`
  font-family: var(--font-display);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.9rem 1.6rem;
  border: 1px solid ${colors.gold};
  border-radius: 999px;
  color: ${colors.espresso};
  background: ${colors.gold};
  transition: all 0.25s ease;

  &:hover {
    background: transparent;
    color: ${colors.gold};
  }
`;

export default function TraditionalWeddingPage() {
  return (
    <PageShell dark>
      <Frame>
        <TextBox>
          <RingsIcon color={colors.goldLight} />
          <Script>Dave &amp; Faizah</Script>
          <Line />
          <Body>
            You are invited to join us as we celebrate our traditional
            wedding
          </Body>
        </TextBox>
      </Frame>
      <CTARow>
        <CTA href="/menu/save-the-date">Save The Date</CTA>
        <CTA href="/menu/rsvp">RSVP</CTA>
      </CTARow>
    </PageShell>
  );
}
