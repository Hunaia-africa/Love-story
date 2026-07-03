"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Stage,
  PhotoLayer,
  Grade,
  Vignette,
  Eyebrow,
  Names,
  EnvelopeButton,
  EnvelopeBody,
  EnvelopePocket,
  EnvelopePocketBottom,
  EnvelopeFlap,
  FlapFront,
  FlapBack,
  SealWrap,
  LetterCard,
  LetterNames,
  LetterRule,
  LetterDate,
  Caption,
  FadeOverlay,
  SrOnly,
} from "./EnvelopeIntro.styles";
import { WaxSealGold } from "@/components/decor";
import { SplitWords } from "@/components/motion/text";
import { photos } from "@/lib/assets";

export default function EnvelopeIntro() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [fading, setFading] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    router.prefetch("/menu");
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, [router]);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      setFading(true);
      timers.current.push(setTimeout(() => router.push("/menu"), 350));
      return;
    }

    timers.current.push(setTimeout(() => setFading(true), 1300));
    timers.current.push(setTimeout(() => router.push("/menu"), 1850));
  };

  return (
    <Stage>
      <PhotoLayer aria-hidden data-ken>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.sunset.src} alt="" loading="eager" draggable={false} />
      </PhotoLayer>
      <Grade aria-hidden />
      <Vignette aria-hidden />

      <Eyebrow>
        <SplitWords
          text="You've got mail from"
          trigger="load"
          delay={0.15}
          stagger={0.05}
          y={110}
        />
      </Eyebrow>
      <Names>
        <SplitWords
          text="Dave & Faizah"
          trigger="load"
          delay={0.4}
          stagger={0.12}
          duration={1.4}
        />
      </Names>

      <EnvelopeButton
        onClick={handleOpen}
        $open={open}
        aria-label="Open the envelope to view the wedding invitation"
        disabled={open}
        data-cursor="Open"
      >
        <EnvelopeBody $open={open}>
          <LetterCard $open={open} aria-hidden>
            <LetterNames>Dave &amp; Faizah</LetterNames>
            <LetterRule />
            <LetterDate>14 . 08 . 2026</LetterDate>
          </LetterCard>

          <EnvelopePocket aria-hidden />
          <EnvelopePocketBottom aria-hidden />

          <EnvelopeFlap $open={open} aria-hidden>
            <FlapFront />
            <FlapBack />
          </EnvelopeFlap>

          <SealWrap $open={open} aria-hidden>
            <WaxSealGold style={{ width: "100%", height: "100%" }} />
          </SealWrap>
        </EnvelopeBody>
        <SrOnly>{open ? "Opening the invitation" : ""}</SrOnly>
      </EnvelopeButton>

      <Caption $open={open} aria-live="polite">
        {open ? "Opening…" : "Click envelope to open"}
      </Caption>

      <FadeOverlay $active={fading} aria-hidden />
    </Stage>
  );
}
