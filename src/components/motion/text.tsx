"use client";

/* Word-level choreography.
   <SplitWords>  — each word rises out of its own mask (on load or on view)
   <ScrubWords>  — words breathe in one-by-one, tied to the scrollbar      */

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

/* split a string into word spans; "\n" forces a line break */
function renderWords(text: string) {
  const out: ReactNode[] = [];
  text.split("\n").forEach((line, li, lines) => {
    line.split(" ").forEach((word, wi) => {
      if (!word) return;
      out.push(
        <span
          key={`${li}-${wi}`}
          className="sw-mask"
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <span className="sw-word" style={{ display: "inline-block", willChange: "transform" }}>
            {word}
          </span>
        </span>,
      );
      out.push(" ");
    });
    if (li < lines.length - 1) out.push(<br key={`br-${li}`} />);
  });
  return out;
}

export function SplitWords({
  text,
  as: Tag = "span",
  className,
  trigger = "view",
  delay = 0,
  stagger = 0.055,
  duration = 1.1,
  y = 115,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  /** "load" animates immediately; "view" waits until scrolled into view */
  trigger?: "load" | "view";
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const words = el.querySelectorAll<HTMLElement>(".sw-word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: y, rotate: 2 },
        {
          yPercent: 0,
          rotate: 0,
          duration,
          delay,
          stagger,
          ease: "power4.out",
          ...(trigger === "view"
            ? { scrollTrigger: { trigger: el, start: "top 88%", once: true } }
            : {}),
        },
      );
    }, el);
    return () => ctx.revert();
  }, [text, trigger, delay, stagger, duration, y]);

  return (
    <Tag ref={ref} className={className} aria-label={text.replace(/\n/g, " ")}>
      {renderWords(text)}
    </Tag>
  );
}

export function ScrubWords({
  text,
  as: Tag = "p",
  className,
  start = "top 78%",
  end = "top 32%",
}: {
  text: string;
  as?: ElementType;
  className?: string;
  start?: string;
  end?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>(".sw-word");
    if (!words.length) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.12, yPercent: 30 },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: { trigger: el, start, end, scrub: 0.4 },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [text, start, end]);

  return (
    <Tag ref={ref} className={className} aria-label={text.replace(/\n/g, " ")}>
      {renderWords(text)}
    </Tag>
  );
}
