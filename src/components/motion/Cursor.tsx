"use client";

/* The signature cursor — a quick espresso dot and a lagging gold ring.
   Over anything interactive the ring blooms; cards can whisper a word
   ("Open", "Send"…) via data-cursor. Desktop / fine pointers only. */

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap, finePointer, prefersReducedMotion } from "@/lib/motion";
import { colors } from "@/theme/tokens";

const Dot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 7px;
  height: 7px;
  margin: -3.5px 0 0 -3.5px;
  border-radius: 50%;
  background: #fff;
  pointer-events: none;
  mix-blend-mode: difference;
`;

const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 42px;
  height: 42px;
  margin: -21px 0 0 -21px;
  border-radius: 50%;
  border: 1.25px solid ${colors.gold};
  background: rgba(201, 162, 84, 0);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease, border-color 0.25s ease;

  &[data-active="true"] {
    background: rgba(201, 162, 84, 0.14);
    border-color: ${colors.goldBright};
  }
`;

const Label = styled.span`
  font-family: var(--font-display);
  font-size: 9.5px;
  letter-spacing: 0.22em;
  text-indent: 0.22em;
  text-transform: uppercase;
  color: ${colors.espresso};
  background: ${colors.goldBright};
  border-radius: 999px;
  padding: 5px 10px 4px;
  white-space: nowrap;
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 0.22s ease, transform 0.22s ease;

  [data-active="true"] > & {
    opacity: 1;
    transform: scale(1);
  }
`;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!finePointer() || prefersReducedMotion()) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    gsap.set([dot, ring], { xPercent: 0, yPercent: 0, opacity: 0 });
    let shown = false;

    const move = (e: PointerEvent) => {
      if (!shown) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        shown = true;
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);

      const t = e.target as HTMLElement | null;
      const hot = t?.closest?.(
        "a, button, [data-cursor], input, textarea, select, iframe",
      ) as HTMLElement | null;

      if (hot && (hot.tagName === "INPUT" || hot.tagName === "TEXTAREA" || hot.tagName === "SELECT" || hot.tagName === "IFRAME")) {
        /* native affordances win in form fields & the map */
        gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
        shown = false;
        return;
      }

      const text = hot?.closest?.("[data-cursor]")?.getAttribute("data-cursor") ?? "";
      setLabel(text);
      const active = !!hot;
      ring.dataset.active = String(active && !!text ? true : active);
      gsap.to(ring, {
        scale: text ? 2.1 : active ? 1.55 : 1,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(dot, { scale: active ? 0 : 1, duration: 0.25 });
    };

    const hide = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.25 });
      shown = false;
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    const press = () =>
      gsap.fromTo(
        ring,
        { scale: "-=0.25" },
        { scale: "+=0.25", duration: 0.35, ease: "elastic.out(1, 0.5)" },
      );
    window.addEventListener("pointerdown", press);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  void enabled; // hosts always render so the effect can attach

  return (
    <>
      <Ring ref={ringRef} aria-hidden>
        <Label>{label}</Label>
      </Ring>
      <Dot ref={dotRef} aria-hidden />
    </>
  );
}
