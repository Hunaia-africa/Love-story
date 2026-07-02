"use client";

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import Countdown from "@/components/Countdown";
import { colors } from "@/theme/tokens";

const Wrap = styled.div`
  text-align: center;
  padding-top: 1rem;
`;

const Monogram = styled.div`
  position: relative;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GhostLetters = styled.div`
  position: absolute;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(4rem, 16vw, 8rem);
  color: ${colors.creamDark};
  opacity: 0.7;
  letter-spacing: 0.05em;
`;

const Script = styled.h1`
  position: relative;
  font-family: var(--font-script);
  font-size: clamp(2.6rem, 9vw, 4.6rem);
  color: ${colors.bronze};
  margin: 0;
`;

const DateLine = styled.p`
  font-family: var(--font-display);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 1.1rem;
  color: ${colors.cocoa};
  margin: 2rem 0 0.5rem;
`;

const LocationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 2rem;
`;

const Pin = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50% 50% 50% 0;
  background: ${colors.bronze};
  transform: rotate(-45deg);
`;

const LocationText = styled.p`
  font-family: var(--font-display);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${colors.espresso};
  margin: 0;
`;

const SubLocation = styled.p`
  font-family: var(--font-display);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.95rem;
  color: ${colors.bark};
  margin: 1.2rem 0 0;
`;

const CountdownLabel = styled.p`
  font-family: var(--font-display);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 6px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 1.1rem;
  color: ${colors.bronze};
  margin: 3rem 0 0;
`;

export default function SaveTheDatePage() {
  return (
    <PageShell>
      <Wrap>
        <Monogram>
          <GhostLetters>DF</GhostLetters>
          <Script>Save The Date</Script>
        </Monogram>

        <DateLine>14th August 2026</DateLine>

        <LocationRow>
          <Pin />
          <LocationText>Kakamega Town</LocationText>
        </LocationRow>
        <SubLocation>Opposite Little Homes Amalemba</SubLocation>

        <CountdownLabel>The Countdown</CountdownLabel>
        <Countdown target="2026-08-14T09:00:00" />
      </Wrap>
    </PageShell>
  );
}
