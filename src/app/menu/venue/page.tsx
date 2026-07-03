"use client";

/* Image 6 — villa etching, "The Venue", Google map, closing note. */

import { useRef } from "react";
import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { Villa } from "@/components/decor";
import { SplitWords } from "@/components/motion/text";
import { Reveal, useDraw } from "@/components/motion/fx";
import { colors } from "@/theme/tokens";

const VillaWrap = styled.div`
  width: clamp(180px, 26vw, 250px);
  margin: 0 auto -0.4rem;
  color: #6b5138;

  svg {
    width: 100%;
    height: auto;
  }
`;

const Lead = styled(BodyItalic)`
  max-width: 52ch;
  margin: 1.6rem auto 2.4rem;
`;

const MapFrame = styled.div`
  width: min(760px, 100%);
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(46, 36, 29, 0.18);
  box-shadow: 0 16px 38px rgba(43, 33, 28, 0.16);
  background: #e8e6e1;

  iframe {
    display: block;
    width: 100%;
    height: clamp(320px, 52vh, 460px);
    border: 0;
  }
`;

const MapNote = styled(BodyItalic)`
  margin-top: 2.2rem;
  color: ${colors.espresso};
  font-size: clamp(1.05rem, 2.6vw, 1.3rem);
`;

const MapLink = styled.a`
  display: inline-block;
  margin-top: 0.9rem;
  font-family: var(--font-display);
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.rust};
  text-decoration: none;
  border-bottom: 1px solid ${colors.rust};
  padding-bottom: 3px;

  &:hover {
    color: ${colors.bronze};
    border-color: ${colors.bronze};
  }
`;

const Centered = styled.div`
  text-align: center;
`;

const MAP_QUERY = "Little Home Hotel, Amalemba Rd, Kakamega, Kenya";

export default function VenuePage() {
  const villaRef = useRef<HTMLDivElement>(null);
  useDraw(villaRef, { trigger: "load", delay: 0.15, duration: 2, stagger: 0.05 });

  return (
    <PageShell>
      <VillaWrap ref={villaRef} aria-hidden>
        <Villa />
      </VillaWrap>
      <ScriptTitle>
        <SplitWords text="The Venue" trigger="load" delay={0.4} stagger={0.11} duration={1.3} />
      </ScriptTitle>
      <Reveal delay={0.7} y={26}>
        <Lead>
          With hearts full of joy and gratitude, we invite you to join us as we
          celebrate the union of two families and the beginning of a beautiful
          new chapter.
        </Lead>
      </Reveal>

      <Reveal y={40} scale={0.985} duration={1.2}>
        <MapFrame>
        <iframe
          title="Map — Little Home Hotel, Amalemba Road, Kakamega"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        </MapFrame>
      </Reveal>

      <Reveal y={24}>
        <Centered>
        <MapNote>Kindly use the map above</MapNote>
        <br />
        <MapLink
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
          </MapLink>
        </Centered>
      </Reveal>
    </PageShell>
  );
}
