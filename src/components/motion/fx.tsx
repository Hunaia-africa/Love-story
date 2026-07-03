"use client";

/* Scroll-effects toolkit.
   <Reveal>       — fade-and-rise (optionally staggering its children)
   <Parallax>     — the classic slow drift inside a masked frame
   useDraw(ref)   — hand-draws every stroked path in an SVG on view      */

import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";

export function Reveal({
  children,
  y = 44,
  delay = 0,
  duration = 1,
  stagger,
  start = "top 86%",
  scale,
  className,
  style,
  once = true,
}: {
  children: ReactNode;
  y?: number;
  delay?: number;
  duration?: number;
  /** if set, animates direct children with this stagger instead of the wrapper */
  stagger?: number;
  start?: string;
  scale?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets = stagger != null ? Array.from(el.children) : el;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y, ...(scale ? { scale } : {}) },
        {
          autoAlpha: 1,
          y: 0,
          ...(scale ? { scale: 1 } : {}),
          duration,
          delay,
          ...(stagger != null ? { stagger } : {}),
          ease: "power3.out",
          scrollTrigger: { trigger: el, start, once },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [y, delay, duration, stagger, start, scale, once]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export function Parallax({
  children,
  amount = 12,
  className,
  style,
}: {
  children: ReactNode;
  /** total drift in % of the element's own height */
  amount?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -amount / 2 },
        {
          yPercent: amount / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [amount]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform", ...style }}>
      {children}
    </div>
  );
}

/** Animates every stroked shape inside the ref'd element as if inked by hand. */
export function useDraw(
  ref: RefObject<HTMLElement | null>,
  {
    duration = 1.6,
    stagger = 0.06,
    delay = 0,
    trigger = "view",
    start = "top 85%",
  }: {
    duration?: number;
    stagger?: number;
    delay?: number;
    trigger?: "view" | "load";
    start?: string;
  } = {},
) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const shapes = Array.from(
      el.querySelectorAll<SVGGeometryElement>("path, circle, line, ellipse, polyline, rect"),
    ).filter((s) => {
      const stroke = getComputedStyle(s).stroke;
      if (!stroke || stroke === "none") return false;
      try {
        return s.getTotalLength() > 0;
      } catch {
        return false;
      }
    });
    if (!shapes.length) return;

    const ctx = gsap.context(() => {
      shapes.forEach((s) => {
        const len = s.getTotalLength();
        gsap.set(s, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.to(shapes, {
        strokeDashoffset: 0,
        duration,
        delay,
        stagger,
        ease: "power2.inOut",
        ...(trigger === "view"
          ? { scrollTrigger: { trigger: el, start, once: true } }
          : {}),
        clearProps: "strokeDasharray,strokeDashoffset",
      });
    }, el);
    return () => ctx.revert();
  }, [ref, duration, stagger, delay, trigger, start]);
}
