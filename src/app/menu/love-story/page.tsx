"use client";

import styled from "styled-components";
import PageShell from "@/components/PageShell";
import Placeholder from "@/components/Placeholder";
import { CupidIcon, RingSpin } from "@/components/Ornaments";
import { colors } from "@/theme/tokens";

const Section = styled.section`
  margin-bottom: 6rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TitleWrap = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const Script = styled.h1`
  font-family: var(--font-script);
  font-size: clamp(2.4rem, 7vw, 3.8rem);
  color: ${colors.bronze};
  text-align: center;
  margin: 0;
`;

const Subtitle = styled.p`
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
  color: ${colors.espresso};
  margin: 0.6rem 0 2.5rem;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.4fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const PhotoStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StoryText = styled.p`
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.15rem;
  line-height: 1.85;
  color: ${colors.cocoa};
  margin: 0 0 1.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Interlude = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const InterludeScript = styled.p`
  font-family: var(--font-script);
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  color: ${colors.bronze};
  margin: 1rem 0 0;
`;

const TwoHeartsTitle = styled.h2`
  font-family: var(--font-script);
  font-size: clamp(2rem, 6vw, 3rem);
  text-align: center;
  color: ${colors.espresso};
  margin: 0 0 2rem;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const StackedTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ClosingCard = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  padding: 3rem 2rem;
  background: linear-gradient(180deg, #7a5b41 0%, #2b211c 100%);
`;

const ClosingContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
`;

const ClosingScript = styled.h2`
  font-family: var(--font-script);
  font-size: clamp(2.4rem, 8vw, 4rem);
  color: ${colors.ivory};
  margin: 0 0 1rem;
`;

const ForeverTag = styled.p`
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.gold};
  font-size: 1.3rem;
  margin: 0;
`;

const DateTag = styled.p`
  font-family: var(--font-display);
  color: ${colors.ivory};
  font-size: 1.1rem;
  margin: 0.4rem 0 0;
`;

export default function LoveStoryPage() {
  return (
    <PageShell>
      <Section>
        <IconRow>
          <CupidIcon />
        </IconRow>
        <TitleWrap>
          <Script>Our Love Story</Script>
        </TitleWrap>
        <Subtitle>A friendship that found its way back</Subtitle>

        <Columns>
          <PhotoStack>
            <Placeholder label="Dave &amp; Faizah, desert trip" ratio="1 / 1" />
            <Placeholder label="Dave &amp; Faizah, road trip" ratio="1 / 1" />
            <Placeholder label="Dave &amp; Faizah, close up" ratio="1 / 1" />
          </PhotoStack>
          <div>
            <StoryText>
              It all began in 2012, when Faizah and David met through a
              mutual friend during their high school years.
            </StoryText>
            <StoryText>
              What started as friendship quickly became a beautiful
              connection filled with laughter, conversations, and
              unforgettable moments.
            </StoryText>
            <StoryText>
              One memory stayed close to Faizah&rsquo;s heart; a simple
              housewarming invitation where he held her hand and walked her
              around his home, showing her his world.
            </StoryText>
            <StoryText>
              It was such a small gesture, but to her, it revealed something
              special: kindness, gentleness, and a heart she would always
              remember.
            </StoryText>
          </div>
        </Columns>
      </Section>

      <Interlude>
        <RingSpin />
        <InterludeScript>Some stories take time to unfold</InterludeScript>
      </Interlude>

      <Section>
        <TwoHeartsTitle>Two hearts. One journey</TwoHeartsTitle>

        <PhotoGrid>
          <Placeholder label="Dave &amp; Faizah selfie" ratio="4 / 5" />
          <StackedTwo>
            <Placeholder label="Desert adventure" ratio="4 / 3" />
            <Placeholder label="Cozy moment" ratio="4 / 3" />
          </StackedTwo>
        </PhotoGrid>

        <StoryText>
          After some time, life took them in different directions and their
          friendship went quiet. But years later, their paths crossed again.
        </StoryText>
        <StoryText>
          A few messages turned into conversations, and soon they found
          themselves reconnecting and creating new memories together.
        </StoryText>
        <StoryText>
          From a first rock concert experience to a spontaneous New
          Year&rsquo;s Eve celebration, somewhere along the way, friendship
          became love.
        </StoryText>
        <StoryText>
          For Faizah, she knew she had found something different — a love
          she had prayed for. For David, he knew he had found someone who
          fit perfectly into his life, someone who not only loved him but
          embraced his daughter, Zani, with so much warmth and care.
        </StoryText>
        <StoryText>
          What began as a friendship became a partnership, a family, and a
          promise to walk through life together.
        </StoryText>
      </Section>

      <ClosingCard>
        <ClosingContent>
          <ClosingScript>David &amp; Faizah</ClosingScript>
          <ForeverTag>Forever begins here!</ForeverTag>
          <DateTag>14.08.2026</DateTag>
        </ClosingContent>
      </ClosingCard>
    </PageShell>
  );
}
