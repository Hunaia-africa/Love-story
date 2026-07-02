"use client";

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { colors } from "@/theme/tokens";

const TitleWrap = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Script = styled.span`
  display: block;
  font-family: var(--font-script);
  font-size: clamp(2.2rem, 7vw, 3.4rem);
  color: ${colors.bronze};
`;

const Display = styled.span`
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.2em;
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: ${colors.espresso};
  margin-top: 0.3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem 2rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  text-align: center;
`;

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${colors.creamDark};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.6rem;
`;

const Time = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.1rem;
  color: ${colors.bark};
  margin: 0;
`;

const Event = styled.p`
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.5rem;
  color: ${colors.espresso};
  margin: 0.3rem 0 0;
`;

const items = [
  { time: "11:00am", event: "Arrival", icon: "⛺" },
  { time: "12:00pm", event: "Ceremony", icon: "💍" },
  { time: "2:00pm", event: "Lunch", icon: "🍽️" },
  { time: "3:00pm", event: "Toast", icon: "🥂" },
  { time: "4:00pm", event: "Cake Cutting", icon: "🎂" },
  { time: "5:00pm", event: "Party Time!", icon: "🎶" },
];

export default function TimelinePage() {
  return (
    <PageShell>
      <TitleWrap>
        <Script>Wedding</Script>
        <Display>TIMELINE</Display>
      </TitleWrap>

      <Grid>
        {items.map((it) => (
          <Item key={it.event}>
            <IconCircle>{it.icon}</IconCircle>
            <Time>{it.time}</Time>
            <Event>{it.event}</Event>
          </Item>
        ))}
      </Grid>
    </PageShell>
  );
}
