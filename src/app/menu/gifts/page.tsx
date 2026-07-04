"use client";

/* Image 9 — Gifts Registry with faint doodle wallpaper. */

import { useRef } from "react";
import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { SplitWords } from "@/components/motion/text";
import { Reveal, useDraw } from "@/components/motion/fx";
import {
  GiftSketch,
  BouquetDoodle,
  RingDoodle,
  CakeSketch,
} from "@/components/decor";
import { colors } from "@/theme/tokens";

const Doodle = styled.span<{
  $t: string;
  $l?: string;
  $r?: string;
  $w: string;
  $flip?: boolean;
}>`
  position: fixed;
  top: ${(p) => p.$t};
  ${(p) => (p.$l ? `left: ${p.$l};` : "")}
  ${(p) => (p.$r ? `right: ${p.$r};` : "")}
  width: ${(p) => p.$w};
  color: ${colors.espresso};
  opacity: 0.07;
  pointer-events: none;
  z-index: 0;
  transform: ${(p) => (p.$flip ? "scaleX(-1)" : "none")};

  svg {
    width: 100%;
    height: auto;
  }
`;

const GiftWrap = styled.div`
  width: clamp(150px, 22vw, 210px);
  margin: 0 auto 0.4rem;
  color: #5c4630;

  svg {
    width: 100%;
    height: auto;
  }
`;

const Presence = styled.p`
  margin: clamp(2.4rem, 7vh, 4rem) auto 0;
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.25rem, 3.6vw, 1.7rem);
  letter-spacing: 0.06em;
  color: ${colors.espresso};
  text-align: center;
`;

const Monetary = styled(BodyItalic)`
  max-width: 42ch;
  margin: clamp(2.6rem, 8vh, 4.6rem) auto 0;
  font-size: clamp(1.15rem, 3vw, 1.45rem);
`;

const GiftHere = styled.p`
  margin: clamp(2.6rem, 8vh, 4.4rem) 0 0.9rem;
  text-align: center;
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.15rem, 3.2vw, 1.5rem);
  letter-spacing: 0.22em;
  color: ${colors.clay};
`;

const Numbers = styled.p`
  margin: 0;
  text-align: center;
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.2rem, 3.4vw, 1.6rem);
  letter-spacing: 0.14em;
  color: ${colors.espresso};

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px dotted rgba(46, 36, 29, 0.45);

    &:hover {
      color: ${colors.rust};
    }
  }
`;

export default function GiftsPage() {
  const giftRef = useRef<HTMLDivElement>(null);
  useDraw(giftRef, { trigger: "load", delay: 0.1, duration: 1.7, stagger: 0.06 });

  return (
    <PageShell>
      <Doodle $t="6%" $l="4%" $w="clamp(90px, 13vw, 160px)" aria-hidden>
        <BouquetDoodle />
      </Doodle>
      <Doodle $t="12%" $r="6%" $w="clamp(80px, 11vw, 140px)" aria-hidden>
        <RingDoodle />
      </Doodle>
      <Doodle $t="52%" $l="7%" $w="clamp(90px, 12vw, 150px)" $flip aria-hidden>
        <CakeSketch />
      </Doodle>
      <Doodle $t="62%" $r="5%" $w="clamp(90px, 13vw, 160px)" $flip aria-hidden>
        <BouquetDoodle />
      </Doodle>

      <GiftWrap ref={giftRef} aria-hidden>
        <GiftSketch />
      </GiftWrap>
      <ScriptTitle>
        <SplitWords text="Gifts Registry" trigger="load" delay={0.35} stagger={0.11} duration={1.3} />
      </ScriptTitle>

      <Reveal delay={0.65} y={26}>
        <Presence>
          Your presence is the greatest gift{" "}
          <span role="img" aria-label="red heart">
            ❤️
          </span>
        </Presence>
      </Reveal>

      <Reveal y={30}>
        <Monetary>
          Should you wish to bless the couple further, monetary gifts towards
          their new journey will be deeply appreciated.
        </Monetary>
      </Reveal>

      <Reveal y={30}>
        <GiftHere>
          GIFT US HERE!{" "}
          <span role="img" aria-label="hugging face">
            🤗
          </span>
        </GiftHere>
        <Numbers>
          <a href="tel:0705843839">Paybill number: 542542</a> <br />Account number:{" "}
          <a href="tel:0713859757">00701425552910</a>
        </Numbers>
      </Reveal>
    </PageShell>
  );
}
