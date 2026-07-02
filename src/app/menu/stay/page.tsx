"use client";

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import Placeholder from "@/components/Placeholder";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { colors } from "@/theme/tokens";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  align-items: start;
  margin-top: 2.5rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const Item = styled.div`
  border-left: 2px solid ${colors.bronze};
  padding-left: 1rem;
`;

const Name = styled.p`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.3rem;
  color: ${colors.espresso};
  margin: 0 0 0.3rem;
`;

const Desc = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.05rem;
  color: ${colors.bark};
  margin: 0;
`;

const Footer = styled.p`
  text-align: center;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.1rem;
  color: ${colors.cocoa};
  margin-top: 3rem;
`;

const hotels = [
  {
    name: "Kakamega Golf Hotel",
    desc: "A comfortable stay in the heart of Kakamega",
  },
  {
    name: "Petrichor House",
    desc: "A peaceful retreat, good for a large group of people.",
  },
  {
    name: "Amanda Resort",
    desc: "Spacious suites for a home-away-from-home feel",
  },
];

export default function StayPage() {
  return (
    <PageShell>
      <ScriptTitle>Where To Stay</ScriptTitle>
      <BodyItalic style={{ marginTop: "1.2rem" }}>
        For our guests travelling to Kakamega, we have put together a few
        accommodation options nearby for your convenience.
      </BodyItalic>

      <Layout>
        <List>
          {hotels.map((h) => (
            <Item key={h.name}>
              <Name>{h.name}</Name>
              <Desc>{h.desc}</Desc>
            </Item>
          ))}
        </List>
        <Placeholder label="Hotel room photo" ratio="3 / 4" rounded="10px" />
      </Layout>

      <Footer>
        Kindly confirm availability directly with the accommodation before
        booking
      </Footer>
    </PageShell>
  );
}
