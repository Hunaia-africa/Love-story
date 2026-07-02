"use client";

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import { ScriptTitle, BodyItalic } from "@/components/Typography";
import { colors } from "@/theme/tokens";

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const Heart = styled.p`
  text-align: center;
  font-family: var(--font-body);
  font-size: 1.4rem;
  color: ${colors.espresso};
  margin: 1.5rem 0;
`;

const ContactBlock = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const GiftLabel = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${colors.bronze};
  margin: 0 0 0.5rem;
`;

const Numbers = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.3rem;
  color: ${colors.espresso};
  margin: 0;
`;

export default function GiftsPage() {
  return (
    <PageShell>
      <IconWrap>
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
          <rect x="20" y="45" width="25" height="35" stroke={colors.bark} strokeWidth="1.6" />
          <rect x="50" y="38" width="25" height="42" stroke={colors.bark} strokeWidth="1.6" />
          <path d="M30 45 Q32 30 42 32 Q38 40 30 45Z" stroke={colors.bark} strokeWidth="1.4" fill="none" />
        </svg>
      </IconWrap>
      <ScriptTitle>Gifts Registry</ScriptTitle>

      <Heart>Your presence is the greatest gift ❤️</Heart>

      <BodyItalic>
        Should you wish to bless the couple further, monetary gifts towards
        their new journey will be deeply appreciated.
      </BodyItalic>

      <ContactBlock>
        <GiftLabel>Gift us here! 🤗</GiftLabel>
        <Numbers>0705 843839 or 0713 859757</Numbers>
      </ContactBlock>
    </PageShell>
  );
}
