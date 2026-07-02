"use client";

/**
 * Vintage "label" plaque — the scalloped brown shapes used on the menu
 * for "Our Love Story" and "Save The Date". Concave-scooped corners,
 * gentle pointed peaks mid-edge, and a dotted inner border.
 */

import styled from "styled-components";

function labelPath(w: number, h: number) {
  const s = Math.min(w, h) * 0.16; // corner scoop size
  const p = Math.min(w, h) * 0.045; // mid-edge peak
  const cx = w / 2;
  const cy = h / 2;
  return [
    // top edge (left → right) with peak
    `M ${s} ${p * 1.6}`,
    `Q ${cx - s} 0 ${cx} 0`,
    `Q ${cx + s} 0 ${w - s} ${p * 1.6}`,
    // top-right concave corner
    `Q ${w - s} ${s} ${w - p * 1.6} ${s}`,
    // right edge with peak
    `Q ${w} ${cy - s} ${w} ${cy}`,
    `Q ${w} ${cy + s} ${w - p * 1.6} ${h - s}`,
    // bottom-right corner
    `Q ${w - s} ${h - s} ${w - s} ${h - p * 1.6}`,
    // bottom edge
    `Q ${cx + s} ${h} ${cx} ${h}`,
    `Q ${cx - s} ${h} ${s} ${h - p * 1.6}`,
    // bottom-left corner
    `Q ${s} ${h - s} ${p * 1.6} ${h - s}`,
    // left edge
    `Q 0 ${cy + s} 0 ${cy}`,
    `Q 0 ${cy - s} ${p * 1.6} ${s}`,
    // top-left corner
    `Q ${s} ${s} ${s} ${p * 1.6}`,
    "Z",
  ].join(" ");
}

const Shape = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 8px 16px rgba(43, 33, 28, 0.28));
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 14% 12%;
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function OrnatePlaque({
  fill,
  variant = "wide",
  children,
  className,
}: {
  fill: string;
  variant?: "wide" | "tall";
  children: React.ReactNode;
  className?: string;
}) {
  const w = 400;
  const h = variant === "wide" ? 190 : 500;
  const d = labelPath(w, h);
  return (
    <Wrap className={className}>
      <Shape viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden>
        <path d={d} fill={fill} />
        <g
          transform={`translate(${w / 2} ${h / 2}) scale(${
            variant === "wide" ? "0.9 0.82" : "0.92 0.94"
          }) translate(${-w / 2} ${-h / 2})`}
        >
          <path
            d={d}
            fill="none"
            stroke="rgba(246, 241, 231, 0.85)"
            strokeWidth={variant === "wide" ? 2.4 : 2.8}
            strokeLinecap="round"
            strokeDasharray="0.1 9"
          />
        </g>
      </Shape>
      <Content>{children}</Content>
    </Wrap>
  );
}
