"use client";

/* The "Details" hub — the door to venue, timeline, stay, gifts & FAQ. */

import styled from "styled-components";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import {
  Villa,
  RingsSketch,
  TentIcon,
  GiftSketch,
  Cupid,
} from "@/components/decor";
import { colors, radii, shadows } from "@/theme/tokens";

const Lead = styled(BodyItalic)`
  max-width: 44ch;
  margin: 1.2rem auto 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 3vw, 1.6rem);
  margin-top: clamp(2.2rem, 6vh, 3.4rem);

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Tile = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  text-align: center;
  padding: clamp(1.7rem, 4.5vw, 2.4rem) 1.4rem;
  border-radius: ${radii.md};
  background: linear-gradient(178deg, #4a382e 0%, ${colors.cardBrown} 55%, #35271f 100%);
  color: #f1e8d6;
  text-decoration: none;
  box-shadow: ${shadows.card};
  border: 1px solid rgba(230, 217, 184, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 7px;
    border: 1px dotted rgba(240, 230, 210, 0.4);
    border-radius: calc(${radii.md} - 4px);
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    box-shadow: ${shadows.lift};
  }
`;

const TileIcon = styled.span`
  height: clamp(52px, 8vw, 68px);
  display: flex;
  align-items: flex-end;
  color: #e4c88a;

  svg {
    height: 100%;
    width: auto;
  }
`;

const TileScript = styled.span`
  font-family: var(--font-script);
  font-size: clamp(1.9rem, 5.4vw, 2.5rem);
  line-height: 1.05;
`;

const TileSub = styled.span`
  font-family: var(--font-body);
  font-style: italic;
  font-size: clamp(0.92rem, 2.4vw, 1.02rem);
  letter-spacing: 0.06em;
  color: rgba(241, 232, 214, 0.8);
`;

function QuestionGlyph() {
  return (
    <svg viewBox="0 0 60 68" fill="none" aria-hidden>
      <path
        d="M14 20c0-9 7.4-15 16.4-15C39.6 5 47 10.6 47 19.4c0 6.8-4 10.2-8.5 13.6-4.2 3.1-6.5 5.4-6.5 10.5v3"
        stroke="currentColor"
        strokeWidth="4.4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="60" r="4" fill="currentColor" />
    </svg>
  );
}

const tiles = [
  {
    href: "/menu/venue",
    icon: <Villa />,
    title: "The Venue",
    sub: "Little Home Hotel, Kakamega",
  },
  {
    href: "/menu/timeline",
    icon: <RingsSketch />,
    title: "Wedding Timeline",
    sub: "The order of the day",
  },
  {
    href: "/menu/stay",
    icon: <TentIcon />,
    title: "Where To Stay",
    sub: "For our travelling guests",
  },
  {
    href: "/menu/gifts",
    icon: <GiftSketch />,
    title: "Gifts Registry",
    sub: "Your presence is the greatest gift",
  },
  {
    href: "/menu/faq",
    icon: <QuestionGlyph />,
    title: "Questions",
    sub: "Everything you might wonder",
    wide: true,
  },
  {
    href: "/menu/love-story",
    icon: <Cupid />,
    title: "Our Love Story",
    sub: "A friendship that found its way back",
    wide: true,
  },
];

export default function DetailsPage() {
  return (
    <PageShell>
      <ScriptTitle>The Details</ScriptTitle>
      <Lead>
        Everything you need for the day — pick a card below and we&rsquo;ll
        take you there.
      </Lead>

      <Grid>
        {tiles.map((t) => (
          <Tile key={t.href} href={t.href}>
            <TileIcon aria-hidden>{t.icon}</TileIcon>
            <TileScript>{t.title}</TileScript>
            <TileSub>{t.sub}</TileSub>
          </Tile>
        ))}
      </Grid>
    </PageShell>
  );
}
