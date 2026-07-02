"use client";

/* Image 7 — ornate corner frame, "Wedding TIMELINE", 2-column schedule. */

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import {
  FrameCorner,
  TentIcon,
  RingsSketch,
  PlateIcon,
  ToastGlasses,
  CakeSketch,
  MusicNotes,
} from "@/components/decor";
import { colors } from "@/theme/tokens";

const Framed = styled.div`
  position: relative;
  width: 100%;
  padding: clamp(2.6rem, 7vw, 4.6rem) clamp(1.2rem, 5vw, 3.4rem);
`;

/* double rules top & bottom, like the reference */
const Rule = styled.span<{ $pos: "top" | "bottom" }>`
  position: absolute;
  left: 14%;
  right: 14%;
  ${(p) => (p.$pos === "top" ? "top: 1.4rem;" : "bottom: 1.4rem;")}
  height: 7px;
  border-top: 2.5px solid ${colors.espresso};
  border-bottom: 1px solid ${colors.espresso};
  opacity: 0.85;
  pointer-events: none;
`;

const InnerBorder = styled.span`
  position: absolute;
  inset: clamp(2.1rem, 5.4vw, 3.4rem);
  border: 1.5px solid ${colors.espresso};
  outline: 1px solid ${colors.espresso};
  outline-offset: 3px;
  opacity: 0.75;
  pointer-events: none;
`;

const Corner = styled.span<{ $pos: "tl" | "tr" | "bl" | "br" }>`
  position: absolute;
  width: clamp(72px, 12vw, 128px);
  aspect-ratio: 1;
  color: #b07845;
  pointer-events: none;
  z-index: 1;
  ${(p) =>
    p.$pos === "tl"
      ? "top: 0; left: 0;"
      : p.$pos === "tr"
        ? "top: 0; right: 0; transform: scaleX(-1);"
        : p.$pos === "bl"
          ? "bottom: 0; left: 0; transform: scaleY(-1);"
          : "bottom: 0; right: 0; transform: scale(-1);"}

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TitleWrap = styled.header`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: clamp(2rem, 6vh, 3.6rem);
`;

const TitleScript = styled.h1`
  font-family: var(--font-script);
  font-weight: 400;
  font-size: clamp(3rem, 10vw, 4.8rem);
  color: ${colors.rust};
  margin: 0;
  line-height: 1;
  transform: translateX(-6%);
`;

const TitleCaps = styled.span`
  display: block;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.7rem, 5.6vw, 2.8rem);
  letter-spacing: 0.14em;
  color: ${colors.espresso};
  transform: translateX(9%);
  margin-top: -0.35em;
`;

const Grid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vh, 3.4rem) clamp(1rem, 6vw, 3rem);
  max-width: 620px;
  margin: 0 auto;
`;

const Item = styled.div`
  text-align: center;
`;

const Icon = styled.div`
  height: clamp(58px, 10vw, 88px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 0.9rem;
  color: #7a4a2a;

  svg {
    height: 100%;
    width: auto;
    max-width: 100%;
  }
`;

const Time = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.05rem, 2.8vw, 1.3rem);
  color: ${colors.espresso};
  margin: 0 0 0.3rem;
`;

const Event = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.5rem, 4.2vw, 2rem);
  color: ${colors.espresso};
  margin: 0;
  line-height: 1.25;
`;

const schedule = [
  { time: "11:00am", event: "Arrival", Icon: TentIcon },
  { time: "12:00pm", event: "Ceremony", Icon: RingsSketch },
  { time: "2:00pm", event: "Lunch", Icon: PlateIcon },
  { time: "3:00pm", event: "Toast", Icon: ToastGlasses },
  { time: "4:00pm", event: "Cake Cutting", Icon: CakeSketch },
  { time: "5:00pm", event: "Party Time!", Icon: MusicNotes },
];

export default function TimelinePage() {
  return (
    <PageShell wide>
      <Framed>
        {(["tl", "tr", "bl", "br"] as const).map((p) => (
          <Corner key={p} $pos={p} aria-hidden>
            <FrameCorner />
          </Corner>
        ))}
        <Rule $pos="top" aria-hidden />
        <Rule $pos="bottom" aria-hidden />
        <InnerBorder aria-hidden />

        <TitleWrap>
          <TitleScript>
            Wedding
            <TitleCaps>TIMELINE</TitleCaps>
          </TitleScript>
        </TitleWrap>

        <Grid>
          {schedule.map(({ time, event, Icon: Glyph }) => (
            <Item key={event}>
              <Icon aria-hidden>
                <Glyph />
              </Icon>
              <Time>{time}</Time>
              <Event>{event}</Event>
            </Item>
          ))}
        </Grid>
      </Framed>
    </PageShell>
  );
}
