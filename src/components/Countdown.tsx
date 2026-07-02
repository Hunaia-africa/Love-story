"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "@/theme/tokens";

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    gap: 0.9rem;
  }
`;

const Unit = styled.div`
  text-align: center;
  min-width: 60px;
`;

const Num = styled.div`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  color: ${colors.bronze};
`;

const Label = styled.div`
  font-family: var(--font-display);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${colors.bark};
  margin-top: 2px;
`;

const Sep = styled.div`
  width: 1px;
  height: 44px;
  background: ${colors.bark};
  opacity: 0.4;
  margin-top: 6px;
`;

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown({ target }: { target: string }) {
  const targetDate = new Date(target);
  const [time, setTime] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const units: [string, number][] = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <Row>
      {units.map(([label, value], i) => (
        <>
          <Unit key={label}>
            <Num>{String(value).padStart(2, "0")}</Num>
            <Label>{label}</Label>
          </Unit>
          {i < units.length - 1 && <Sep key={label + "-sep"} />}
        </>
      ))}
    </Row>
  );
}
