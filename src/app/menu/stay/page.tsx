"use client";

/* Image 8 — Where To Stay: three options + room photo + booking note. */

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { PhotoPlaceholder } from "@/components/Photo";
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

const hotels = [
  {
    name: "Kakamega Golf Hotel",
    blurb: "A comfortable stay in the heart of Kakamega",
  },
  {
    name: "Petrichor House",
    blurb: "A peaceful retreat, good for a large group of people.",
  },
  {
    name: "Amanda Resort",
    blurb: "Spacious suites for a home-away-from-home feel",
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
              </div>
            ))}
          </Reveal>
        </List>
        <RoomPhoto>
          <Parallax amount={10}>
            <PhotoPlaceholder label="Hotel suite" ratio="3 / 4" radius="22px" />
          </Parallax>
        </RoomPhoto>
      </Row>

      <Reveal y={28}>
        <Referral>
          Reach out to David or Faizah for more accommodation referrals
        </Referral>
        <Note>
          Kindly confirm availability directly with the accommodation before
          booking
        </Note>
      </Reveal>
    </PageShell>
  );
}
