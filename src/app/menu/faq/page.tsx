"use client";

/* Images 14–15 — FAQ. Numbering fixed to be sequential; the design's
   [time], [date], [preference] and [name + contact] blanks are filled
   from the rest of the invitation.
   Each question folds open on tap — first one open by default. */

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { SplitWords } from "@/components/motion/text";
import { Reveal } from "@/components/motion/fx";
import { colors } from "@/theme/tokens";

const Head = styled.header`
  position: relative;
  padding-left: clamp(3.4rem, 9vw, 5.4rem);
  margin-bottom: clamp(2.2rem, 6vh, 3.4rem);
`;

const Monogram = styled.span`
  position: absolute;
  left: 0;
  top: -0.4rem;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(2.6rem, 7vw, 3.8rem);
  line-height: 0.8;
  color: ${colors.goldBright};
  user-select: none;

  i {
    font-style: normal;
    display: block;
    transform: translateX(0.42em) translateY(-0.28em);
  }
`;

const Caps = styled.h1`
  font-family: var(--font-display);
  font-weight: 600;
  font-style: italic;
  font-size: clamp(1.5rem, 4.6vw, 2.4rem);
  letter-spacing: 0.14em;
  color: ${colors.rust};
  margin: 0;
`;

const Script = styled.span`
  display: block;
  font-family: var(--font-script);
  font-weight: 400;
  font-size: clamp(2.4rem, 7vw, 3.6rem);
  letter-spacing: 0.02em;
  color: ${colors.rust};
  margin-top: -0.15em;
  transform: translateX(1.4em);

  @media (max-width: 480px) {
    transform: translateX(0.55em);
  }
`;

const List = styled.div`
  counter-reset: faq;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  border-top: 1px dotted rgba(169, 104, 47, 0.4);
`;

const Item = styled.div`
  counter-increment: faq;
  border-bottom: 1px dotted rgba(169, 104, 47, 0.4);
`;

const Q = styled.h2`
  margin: 0;
`;

/* The whole question row is the switch — number, words and seal alike. */
const Toggle = styled.button`
  appearance: none;
  background: none;
  border: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
  padding: clamp(0.95rem, 2.6vh, 1.25rem) 0;

  font-family: var(--font-body);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.2rem, 3.4vw, 1.55rem);
  letter-spacing: 0.04em;
  line-height: 1.45;
  color: ${colors.espresso};
  transition: color 0.3s ease;

  &::before {
    content: counter(faq) ".";
    margin-right: -0.35rem;
  }

  &:hover,
  &[aria-expanded="true"] {
    color: ${colors.rust};
  }

  &:focus-visible {
    outline: 2px dotted ${colors.gold};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const QText = styled.span`
  flex: 1;
`;

/* A slim gold "+" that turns into "×" — kin to the line-art florals. */
const Seal = styled.span<{ $open: boolean }>`
  position: relative;
  flex: 0 0 auto;
  width: 15px;
  height: 15px;
  transform: rotate(${(p) => (p.$open ? 45 : 0)}deg);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${colors.gold};
    border-radius: 2px;
  }
  &::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 1.5px;
    margin-top: -0.75px;
  }
  &::after {
    left: 50%;
    top: 0;
    height: 100%;
    width: 1.5px;
    margin-left: -0.75px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* CSS-grid fold: rows animate 0fr -> 1fr, the inner pane just clips. */
const Fold = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${(p) => (p.$open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  > div {
    overflow: hidden;
    min-height: 0;
    opacity: ${(p) => (p.$open ? 1 : 0)};
    transform: translateY(${(p) => (p.$open ? 0 : -6)}px);
    transition: opacity 0.4s ease ${(p) => (p.$open ? "0.12s" : "0s")},
      transform 0.4s ease ${(p) => (p.$open ? "0.12s" : "0s")};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    > div {
      transition: none;
    }
  }
`;

const A = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(1.05rem, 2.9vw, 1.3rem);
  letter-spacing: 0.05em;
  line-height: 1.8;
  color: ${colors.clay};
  margin: 0;
  padding: 0.1rem 2rem clamp(1.2rem, 3vh, 1.5rem) 0;

  a {
    color: ${colors.rust};
    text-decoration: none;
    border-bottom: 1px dotted currentColor;

    &:hover {
      color: ${colors.bronze};
    }
  }
`;

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What time should I arrive?",
    a: "We kindly request guests to arrive by 11:00am to allow the celebrations to begin on time.",
  },
  {
    q: "Is there parking available at the venue?",
    a: "Yes, parking will be available for guests at the venue. Our team will be available to guide you upon arrival.",
  },
  {
    q: "What should I wear?",
    a: "We invite you to come dressed in elegant traditional/formal attire as we celebrate this special occasion.",
  },
  {
    q: "Can I bring a plus one?",
    a: "Kindly note that one invite only admits one. Please confirm your attendance accordingly.",
  },
  {
    q: "Are children invited?",
    a: "We love your children but please leave them at home for this event.",
  },
  {
    q: "Will food be provided?",
    a: "Yes, guests will be hosted with meals and refreshments during the celebration.",
  },
  {
    q: "Are gifts appreciated?",
    a: "Your presence is the greatest gift. Should you wish to bless the couple further, monetary gifts towards their new journey will be warmly appreciated.",
  },
  {
    q: "Where can guests stay?",
    a: (
      <>
        We have shared a few{" "}
        <Link href="/menu/stay">accommodation options nearby</Link> for guests
        travelling from out of town.
      </>
    ),
  },
  {
    q: "How do I RSVP?",
    a: (
      <>
        Kindly confirm your attendance through the{" "}
        <Link href="/menu/rsvp">RSVP section</Link> before July 15th.
      </>
    ),
  },
  {
    q: "Can I take photos/videos during the wedding?",
    a: "We would love for you to capture beautiful memories with us. Kindly be mindful during key moments and allow our photographers to capture the best moments.",
  },
  {
    q: "Who can I contact if I have questions?",
    a: (
      <>
        For any questions or assistance, please reach out to:{" "}
        <a href="tel:0705843839">0705 843839</a> or{" "}
        <a href="tel:0713859757">0713 859757</a>
      </>
    ),
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <PageShell>
      <Head>
        <Monogram aria-hidden>
          D<i>F</i>
        </Monogram>
        <Caps>
          <SplitWords text="FREQUENTLY ASKED" trigger="load" delay={0.25} stagger={0.07} y={100} />
        </Caps>
        <Script>
          <SplitWords text="Questions" trigger="load" delay={0.55} duration={1.3} />
        </Script>
      </Head>

      <List role="list">
        <Reveal stagger={0.09} y={30} start="top 92%" style={{ display: "contents" }}>
          {faqs.map(({ q, a }, i) => {
            const isOpen = open.has(i);
            return (
              <Item role="listitem" key={q}>
                <Q>
                  <Toggle
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    data-cursor={isOpen ? "Close" : "Open"}
                    onClick={() => toggle(i)}
                  >
                    <QText>{q}</QText>
                    <Seal aria-hidden $open={isOpen} />
                  </Toggle>
                </Q>
                <Fold
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  $open={isOpen}
                >
                  <div>
                    <A>{a}</A>
                  </div>
                </Fold>
              </Item>
            );
          })}
        </Reveal>
      </List>
    </PageShell>
  );
}
