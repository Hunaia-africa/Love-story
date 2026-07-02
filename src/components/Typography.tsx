"use client";

import styled from "styled-components";
import { colors } from "@/theme/tokens";

export const ScriptTitle = styled.h1<{ $size?: string; $color?: string }>`
  font-family: var(--font-script);
  font-weight: 400;
  font-size: ${(p) => p.$size || "clamp(3rem, 10vw, 5.2rem)"};
  color: ${(p) => p.$color || colors.rust};
  text-align: center;
  margin: 0;
  line-height: 1.15;
`;

export const BodyItalic = styled.p<{ $color?: string; $size?: string }>`
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 500;
  font-size: ${(p) => p.$size || "clamp(1.1rem, 2.6vw, 1.35rem)"};
  letter-spacing: 0.05em;
  line-height: 1.85;
  color: ${(p) => p.$color || colors.clay};
  text-align: center;
  margin: 0;
`;
