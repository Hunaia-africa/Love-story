"use client";

/* Image 8 — Where To Stay: three options + room photo + booking note. */

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { Img } from "@/components/Photo";
import { photos } from "@/lib/assets";
import { SplitWords } from "@/components/motion/text";
import { Reveal, Parallax } from "@/components/motion/fx";
import { colors } from "@/theme/tokens";

const Lead = styled(BodyItalic)`
  max-width: 46ch;
  margin: 1.4rem auto 0;
  text-align: left;

  @media (max-width: 640px) {
    text-align: center;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(1.6rem, 5vw, 3rem);
  align-items: center;
  margin-top: clamp(2.2rem, 6vh, 3.4rem);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.8rem, 5vh, 2.8rem);
`;

const Name = styled.h2`
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.35rem, 3.8vw, 1.9rem);
  letter-spacing: 0.06em;
  color: #6f6257;
  margin: 0 0 0.5rem;

  &::before {
    content: "•";
    color: ${colors.espresso};
    margin-right: 0.55rem;
  }
`;

const Blurb = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(1.02rem, 2.7vw, 1.25rem);
  letter-spacing: 0.05em;
  line-height: 1.7;
  color: ${colors.clay};
  margin: 0;
  padding-left: 1.15rem;
`;

const LinksRow = styled.p`
  margin: 0.55rem 0 0;
  padding-left: 1.15rem;
  font-family: var(--font-display);
  font-size: clamp(0.8rem, 2.2vw, 0.88rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.clay};

  a {
    color: ${colors.rust};
    text-decoration: none;
    border-bottom: 1px dotted rgba(169, 104, 47, 0.55);
    padding-bottom: 2px;
    white-space: nowrap;

    &:hover {
      color: ${colors.bronze};
      border-color: currentColor;
    }
  }

  span[aria-hidden] {
    margin: 0 0.55rem;
    color: rgba(46, 36, 29, 0.35);
  }
`;

const RoomPhoto = styled.div`
  width: 100%;
  max-width: 340px;
  justify-self: center;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(43, 33, 28, 0.2);
`;

const Referral = styled(BodyItalic)`
  margin: clamp(2rem, 5vh, 3rem) auto 0;
  max-width: 44ch;
  color: ${colors.rust};
  font-weight: 600;
`;

const Note = styled(BodyItalic)`
  margin-top: clamp(1.6rem, 4vh, 2.4rem);
  color: ${colors.espresso};
  font-weight: 600;
  max-width: 44ch;
  margin-left: auto;
  margin-right: auto;
`;

/* Links researched via Google Places (place IDs verified) — the Golf Hotel
   has an official website; Petrichor & Amanda are best reached through
   their Google profile + phone. */
const hotels = [
  {
    name: "Kakamega Golf Hotel",
    blurb: "A comfortable stay in the heart of Kakamega",
    website: "https://www.golfhotelkakamega.com/",
    map: "https://www.google.com/maps/place/?q=place_id:ChIJOTKuuMk9gBcRP43Ajll99CE",
    tel: "+254709105700",
    telLabel: "0709 105 700",
  },
  {
    name: "Petrichor House",
    blurb: "A peaceful retreat, good for a large group of people.",
    website: null,
    map: "https://www.google.com/maps/place/?q=place_id:ChIJh7Dzt4o9gBcRqiicMP6Q5Wg",
    tel: "+254739120000",
    telLabel: "0739 120 000",
  },
  {
    name: "Amanda Resort",
    blurb: "Spacious suites for a home-away-from-home feel",
    website: null,
    map: "https://www.google.com/maps/place/?q=place_id:ChIJZR7rh6w9gBcRZt-zDPx1l58",
    tel: "+254757119450",
    telLabel: "0757 119 450",
  },
];

export default function StayPage() {
  return (
    <PageShell>
      <ScriptTitle>
        <SplitWords text="Where To Stay" trigger="load" delay={0.3} stagger={0.11} duration={1.3} />
      </ScriptTitle>
      <Reveal delay={0.55} y={26}>
        <Lead>
          For our guests travelling to Kakamega, we have put together a few
          accommodation options nearby for your convenience.
        </Lead>
      </Reveal>

      <Row>
        <List role="list">
          <Reveal stagger={0.16} y={34} style={{ display: "contents" }}>
            {hotels.map((h) => (
              <div role="listitem" key={h.name}>
                <Name>{h.name}</Name>
                <Blurb>{h.blurb}</Blurb>
                <LinksRow>
                  {h.website ? (
                    <>
                      <a
                        href={h.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="Visit"
                      >
                        Website&nbsp;&#8599;
                      </a>
                      <span aria-hidden>&middot;</span>
                    </>
                  ) : null}
                  <a href={h.map} target="_blank" rel="noopener noreferrer" data-cursor="Map">
                    Map&nbsp;&#8599;
                  </a>
                  <span aria-hidden>&middot;</span>
                  <a href={`tel:${h.tel}`} data-cursor="Call">{h.telLabel}</a>
                </LinksRow>
              </div>
            ))}
          </Reveal>
        </List>
        <RoomPhoto>
          <Parallax amount={10}>
            <Img photo={photos.staySuite} ratio="3 / 4" radius="22px" />
          </Parallax>
        </RoomPhoto>
      </Row>

      <Reveal y={28}>
        <Referral>
          Reach out to David or Faizah for more options
        </Referral>
      </Reveal>
    </PageShell>
  );
}
