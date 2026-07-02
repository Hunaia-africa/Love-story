"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Stage,
  Sea,
  BoatsWrap,
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
import { HarbourBoats, WaxSealGold } from "@/components/decor";

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
      <Sea aria-hidden />
      <BoatsWrap aria-hidden>
        <HarbourBoats style={{ width: "100%", height: "100%" }} />
      </BoatsWrap>
      <Vignette aria-hidden />

      <Eyebrow>You&rsquo;ve got mail from</Eyebrow>
      <Names>Dave &amp; Faizah</Names>

      <EnvelopeButton
        onClick={handleOpen}
        $open={open}
        aria-label="Open the envelope to view the wedding invitation"
        disabled={open}
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
