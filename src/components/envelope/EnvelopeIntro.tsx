"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Stage,
  Vignette,
  Eyebrow,
  Names,
  EnvelopeButton,
  EnvelopeBody,
  EnvelopePocket,
  EnvelopeFlap,
  SealWrap,
  LetterCard,
  Caption,
  FadeOverlay,
} from "./EnvelopeIntro.styles";
import { WaxSeal } from "@/components/Ornaments";

export default function EnvelopeIntro() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [fading, setFading] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    setTimeout(() => setFading(true), 950);
    setTimeout(() => router.push("/menu"), 1500);
  };

  return (
    <Stage>
      <Vignette />
      <Eyebrow>You&rsquo;ve got mail from</Eyebrow>
      <Names>Dave &amp; Faizah</Names>

      <EnvelopeButton onClick={handleOpen} aria-label="Open envelope">
        <EnvelopeBody>
          <LetterCard $open={open} />
          <EnvelopePocket />
          <EnvelopeFlap $open={open} />
          <SealWrap $open={open}>
            <WaxSeal $size={64}>DF</WaxSeal>
          </SealWrap>
        </EnvelopeBody>
      </EnvelopeButton>

      <Caption>{open ? "Opening…" : "Click envelope to open"}</Caption>
      <FadeOverlay $active={fading} />
    </Stage>
  );
}
