"use client";

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import Placeholder from "@/components/Placeholder";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { colors } from "@/theme/tokens";

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const MapWrap = styled.div`
  max-width: 480px;
  margin: 3rem auto 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(43, 33, 28, 0.15);
`;

const Caption = styled.p`
  text-align: center;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.1rem;
  color: ${colors.cocoa};
  margin-top: 1rem;
`;

const LinkBtn = styled.a`
  display: block;
  width: fit-content;
  margin: 1.5rem auto 0;
  font-family: var(--font-display);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  background: ${colors.bronze};
  color: ${colors.ivory};

  &:hover {
    background: ${colors.cocoa};
  }
`;

export default function VenuePage() {
  return (
    <PageShell>
      <IconWrap>
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
          <path
            d="M30 40 L30 85 L70 85 L70 40"
            stroke={colors.bark}
            strokeWidth="2"
          />
          <path
            d="M20 45 L50 15 L80 45"
            stroke={colors.bark}
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="65" r="10" stroke={colors.bark} strokeWidth="2" />
        </svg>
      </IconWrap>
      <ScriptTitle>The Venue</ScriptTitle>
      <BodyItalic style={{ marginTop: "1.5rem" }}>
        With hearts full of joy and gratitude, we invite you to join us as
        we celebrate the union of two families and the beginning of a
        beautiful new chapter.
      </BodyItalic>

      <MapWrap>
        <Placeholder label="Map — Little Home Hotel, Amalemba Rd, Kakamega" ratio="4 / 3" rounded="0" />
      </MapWrap>

      <Caption>Kindly use the map above</Caption>
      <LinkBtn
        href="https://maps.google.com"
        target="_blank"
        rel="noreferrer"
      >
        Open in Google Maps
      </LinkBtn>
    </PageShell>
  );
}
