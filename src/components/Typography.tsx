"use client";

import styled from "styled-components";
import { colors } from "@/theme/tokens";

export const ScriptTitle = styled.h1<{ $size?: string; $color?: string }>`
  font-family: var(--font-script);
  font-weight: 400;
  font-size: ${(p) => p.$size || "clamp(2.6rem, 8vw, 5rem)"};
  color: ${(p) => p.$color || colors.espresso};
  text-align: center;
  margin: 0;
  line-height: 1.05;
`;

export const EyebrowLabel = styled.p<{ $color?: string }>`
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${(p) => p.$color || colors.bark};
  text-align: center;
  margin: 0 0 0.5rem;
`;

export const BodyItalic = styled.p<{ $color?: string; $size?: string }>`
  font-family: var(--font-body);
  font-style: italic;
  font-size: ${(p) => p.$size || "1.25rem"};
  line-height: 1.7;
  color: ${(p) => p.$color || colors.cocoa};
  text-align: center;
  margin: 0;
`;

export const SectionHeading = styled.h2<{ $color?: string }>`
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  color: ${(p) => p.$color || colors.espresso};
  text-align: center;
  margin: 0;
`;
