"use client";

/* Image 8 — Where To Stay: three options + room photo + booking note. */

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { PhotoPlaceholder } from "@/components/Photo";
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

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
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

const Note = styled(BodyItalic)`
  margin-top: clamp(2.6rem, 7vh, 4rem);
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
      <ScriptTitle>Where To Stay</ScriptTitle>
      <Lead>
        For our guests travelling to Kakamega, we have put together a few
        accommodation options nearby for your convenience.
      </Lead>

      <Row>
        <List>
          {hotels.map((h) => (
            <li key={h.name}>
              <Name>{h.name}</Name>
              <Blurb>{h.blurb}</Blurb>
            </li>
          ))}
        </List>
        <RoomPhoto>
          <PhotoPlaceholder label="Hotel suite" ratio="3 / 4" radius="22px" />
        </RoomPhoto>
      </Row>

      <Note>
        Kindly confirm availability directly with the accommodation before
        booking
      </Note>
    </PageShell>
  );
}
