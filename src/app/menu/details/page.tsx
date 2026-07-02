"use client";

import styled from "styled-components";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { colors, shadows } from "@/theme/tokens";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;
  margin-top: 3rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Tile = styled(Link)`
  background: ${colors.paper};
  border: 1px solid rgba(43, 33, 28, 0.1);
  border-radius: 12px;
  padding: 2rem 1.4rem;
  text-align: center;
  box-shadow: ${shadows.card};
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${shadows.soft};
  }
`;

const TileEyebrow = styled.p`
  font-family: var(--font-display);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: ${colors.bark};
  margin: 0 0 0.5rem;
`;

const TileTitle = styled.p`
  font-family: var(--font-script);
  font-size: 1.9rem;
  color: ${colors.espresso};
  margin: 0;
`;

export default function DetailsPage() {
  return (
    <PageShell>
      <ScriptTitle>The Details</ScriptTitle>
      <BodyItalic style={{ marginTop: "1rem" }}>
        Everything you need to know for the big day.
      </BodyItalic>

      <Grid>
        <Tile href="/menu/venue">
          <TileEyebrow>Little Home Hotel</TileEyebrow>
          <TileTitle>The Venue</TileTitle>
        </Tile>
        <Tile href="/menu/timeline">
          <TileEyebrow>11:00am – Party Time</TileEyebrow>
          <TileTitle>Timeline</TileTitle>
        </Tile>
        <Tile href="/menu/stay">
          <TileEyebrow>For travelling guests</TileEyebrow>
          <TileTitle>Where To Stay</TileTitle>
        </Tile>
        <Tile href="/menu/gifts">
          <TileEyebrow>Should you wish to bless us</TileEyebrow>
          <TileTitle>Gifts Registry</TileTitle>
        </Tile>
        <Tile href="/menu/faq" style={{ gridColumn: "1 / -1" }}>
          <TileEyebrow>Got questions?</TileEyebrow>
          <TileTitle>Frequently Asked Questions</TileTitle>
        </Tile>
      </Grid>
    </PageShell>
  );
}
