"use client";

import styled from "styled-components";
import { colors } from "@/theme/tokens";

const Box = styled.div<{ $ratio?: string; $rounded?: string }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${(p) => p.$ratio || "4 / 5"};
  border-radius: ${(p) => p.$rounded || "4px"};
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${colors.creamDark} 0%,
    #e3d5bd 45%,
    #cbb28c 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.bark};
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-align: center;
  padding: 1rem;
  border: 1px solid rgba(122, 91, 65, 0.25);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
        45deg,
        rgba(122, 91, 65, 0.06) 0px,
        rgba(122, 91, 65, 0.06) 1px,
        transparent 1px,
        transparent 12px
      );
  }

  span {
    position: relative;
    z-index: 1;
    opacity: 0.75;
  }
`;

export default function Placeholder({
  label = "Photo",
  ratio,
  rounded,
  className,
}: {
  label?: string;
  ratio?: string;
  rounded?: string;
  className?: string;
}) {
  return (
    <Box $ratio={ratio} $rounded={rounded} className={className}>
      <span>{label}</span>
    </Box>
  );
}
