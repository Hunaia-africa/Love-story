"use client";

import { Fragment, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "@/theme/tokens";

const Row = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: clamp(0.9rem, 4vw, 2rem);
  margin-top: 1.6rem;
`;

const Unit = styled.div`
  text-align: center;
  min-width: 58px;
`;

const tick = keyframes`
  from { transform: translateY(46%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`;

const Num = styled.div`
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.7rem, 5.4vw, 2.4rem);
  color: ${colors.rust};
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  overflow: hidden;

  > span {
    display: inline-block;
    animation: ${tick} 0.45s cubic-bezier(0.2, 0.9, 0.3, 1) both;
  }
`;

const Label = styled.div`
  font-family: var(--font-display);
  font-size: clamp(0.6rem, 2vw, 0.78rem);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${colors.cocoa};
  margin-top: 4px;
`;

const Sep = styled.div`
  width: 1px;
  align-self: stretch;
  background: ${colors.espresso};
  opacity: 0.55;
`;

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const ts = new Date(target).getTime();
    setTime(getTimeLeft(ts));
    const id = setInterval(() => setTime(getTimeLeft(ts)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: [string, number | null][] = [
    ["Days", time?.days ?? null],
    ["Hours", time?.hours ?? null],
    ["Minutes", time?.minutes ?? null],
    ["Seconds", time?.seconds ?? null],
  ];

  return (
    <Row role="timer" aria-label="Countdown to the wedding day">
      {units.map(([label, value], i) => (
        <Fragment key={label}>
          <Unit>
            <Num>
              <span key={value ?? "-"}>{value === null ? "–" : value}</span>
            </Num>
            <Label>{label}</Label>
          </Unit>
          {i < units.length - 1 && <Sep aria-hidden />}
        </Fragment>
      ))}
    </Row>
  );
}
