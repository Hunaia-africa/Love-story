import HomeButton from "@/components/HomeButton";
import {
  MenuWrap,
  Board,
  Box,
  Polaroid,
  PolaroidPhoto,
  EnvelopeLink,
  LetterPeek,
  LetterScript,
  EnvelopeBody,
  EnvelopeFlapShape,
  EnvelopeSeal,
  PlaqueLink,
  PlaqueScript,
  PlaqueSub,
  RectCard,
  RectEyebrow,
  RectScript,
  RectSmall,
  DecorFlowers,
  DecorGlasses,
  HeaderBlock,
  KaribuLabel,
  HeaderScript,
  FooterNote,
} from "./menu.styles";

function SwanDecor() {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g fill="#F7F2E9" stroke="#c9b896" strokeWidth="1.5">
        <path d="M60 120 C20 120 10 95 20 75 C10 65 15 45 35 45 C40 30 60 20 75 30 C95 20 115 40 105 60 C120 65 120 90 100 100 C110 115 90 130 60 120 Z" />
        <path d="M240 120 C280 120 290 95 280 75 C290 65 285 45 265 45 C260 30 240 20 225 30 C205 20 185 40 195 60 C180 65 180 90 200 100 C190 115 210 130 240 120 Z" />
      </g>
      <path
        d="M75 30 Q150 -10 225 30"
        fill="none"
        stroke="#c9b896"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function GlassesDecor() {
  return (
    <svg viewBox="0 0 140 200" width="100%" height="100%">
      <g stroke="#C9A15F" strokeWidth="2" fill="none">
        <path d="M25 20 L45 70 L25 90 L25 170 M15 170 L35 170" />
        <path d="M25 20 L5 20" />
        <path d="M105 40 L120 80 L105 96 L105 170 M95 170 L115 170" />
      </g>
    </svg>
  );
}

export default function MenuPage() {
  return (
    <MenuWrap>
      <HomeButton />

      <HeaderBlock>
        <KaribuLabel>Dave &amp; Faizah — 14.08.2026</KaribuLabel>
        <HeaderScript>The Wedding Menu</HeaderScript>
      </HeaderBlock>

      <Board>
        {/* decorative dried flowers */}
        <Box $top={11} $left={2} $w={19} $h={24} $z={1}>
          <DecorFlowers />
        </Box>

        {/* The Traditional Wedding - envelope (clickable) */}
        <Box $top={2} $left={20} $w={34} $h={27} $z={4}>
          <EnvelopeLink href="/menu/traditional-wedding">
            <LetterPeek>
              <LetterScript>The Traditional Wedding</LetterScript>
            </LetterPeek>
            <EnvelopeBody>
              <EnvelopeFlapShape />
              <EnvelopeSeal />
            </EnvelopeBody>
          </EnvelopeLink>
        </Box>

        {/* swans, decorative */}
        <Box $top={25} $left={12} $w={36} $h={16} $z={2}>
          <SwanDecor />
        </Box>

        {/* couple photo top right, decorative */}
        <Box $top={3} $left={53} $w={30} $h={23} $z={2} $rotate={2}>
          <Polaroid $tilt={0}>
            <PolaroidPhoto>Dave &amp; Faizah</PolaroidPhoto>
          </Polaroid>
        </Box>

        {/* Click here for the Details (clickable) */}
        <Box $top={27} $left={55} $w={25} $h={17} $z={2} $rotate={-2}>
          <RectCard href="/menu/details">
            <RectEyebrow>Click here for the</RectEyebrow>
            <RectScript>Details</RectScript>
          </RectCard>
        </Box>

        {/* couple selfie photo, decorative */}
        <Box $top={41} $left={7} $w={29} $h={19} $z={2} $rotate={-2}>
          <Polaroid>
            <PolaroidPhoto>Dave &amp; Faizah</PolaroidPhoto>
          </Polaroid>
        </Box>

        {/* Our Love Story (clickable) */}
        <Box $top={43} $left={31} $w={32} $h={18} $z={3} $rotate={-1}>
          <PlaqueLink href="/menu/love-story" $dark>
            <div>
              <PlaqueScript>Our Love Story</PlaqueScript>
            </div>
          </PlaqueLink>
        </Box>

        {/* white rose flowers, decorative */}
        <Box $top={44} $left={63} $w={24} $h={15} $z={1}>
          <DecorFlowers />
        </Box>

        {/* champagne glasses, decorative */}
        <Box $top={62} $left={4} $w={22} $h={16} $z={2} $rotate={-6}>
          <DecorGlasses>
            <GlassesDecor />
          </DecorGlasses>
        </Box>

        {/* Save The Date (clickable) */}
        <Box $top={56} $left={27} $w={27} $h={36} $z={2} $rotate={1}>
          <PlaqueLink href="/menu/save-the-date">
            <div>
              <PlaqueScript>Save The Date</PlaqueScript>
              <PlaqueSub>14.08.2026</PlaqueSub>
            </div>
          </PlaqueLink>
        </Box>

        {/* Please Respond (clickable) */}
        <Box $top={57} $left={54} $w={26} $h={32} $z={2} $rotate={-1}>
          <RectCard href="/menu/rsvp">
            <RectEyebrow>Please</RectEyebrow>
            <RectScript>Respond</RectScript>
            <RectSmall>join us to celebrate this occasion</RectSmall>
            <RectSmall>Click here</RectSmall>
          </RectCard>
        </Box>
      </Board>

      <FooterNote>Tap any card to open it</FooterNote>
    </MenuWrap>
  );
}
