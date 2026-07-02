/* ------------------------------------------------------------------ */
/*  Hand-drawn SVG decor library — every ornament used on the site.   */
/*  All artwork is original, tuned to match the Canva reference.      */
/* ------------------------------------------------------------------ */

type SvgProps = { className?: string; style?: React.CSSProperties };

/* ---------------------------------------------------------------- */
/*  Kissing swans (menu)                                            */
/* ---------------------------------------------------------------- */
export function Swans(props: SvgProps) {
  const body = "#FBF7EC";
  const line = "#CDBB9C";
  const shade = "#E9DFC9";
  return (
    <svg viewBox="0 0 340 160" fill="none" {...props} aria-hidden>
      <defs>
        <radialGradient id="swanBody" cx="45%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#FFFDF6" />
          <stop offset="100%" stopColor={body} />
        </radialGradient>
      </defs>
      {[1, -1].map((dir) => (
        <g
          key={dir}
          transform={dir === -1 ? "translate(340 0) scale(-1 1)" : undefined}
        >
          {/* body */}
          <path
            d="M28 118
               C 16 108 14 92 26 84
               C 20 70 34 58 50 62
               C 52 44 76 36 92 48
               C 116 40 142 54 146 78
               C 150 102 132 124 100 128
               C 72 132 42 130 28 118 Z"
            fill="url(#swanBody)"
            stroke={line}
            strokeWidth="2"
          />
          {/* wing feather scallops */}
          <path
            d="M52 96 Q64 84 80 88 M46 108 Q66 96 90 102 M60 118 Q80 108 102 114"
            stroke={shade}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M96 52 Q112 50 122 62 M104 66 Q118 66 128 78"
            stroke={shade}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* neck — S curve toward centre */}
          <path
            d="M138 84
               C 158 80 166 64 162 48
               C 158 32 160 20 172 14"
            stroke={body}
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="M138 84
               C 158 80 166 64 162 48
               C 158 32 160 20 172 14"
            stroke={line}
            strokeWidth="15.5"
            strokeLinecap="round"
            opacity="0.28"
          />
          <path
            d="M138 84
               C 158 80 166 64 162 48
               C 158 32 160 20 172 14"
            stroke={body}
            strokeWidth="12.5"
            strokeLinecap="round"
          />
          {/* head + black mask + orange beak */}
          <circle cx="173" cy="13" r="8.6" fill={body} stroke={line} strokeWidth="1.6" />
          <path
            d="M167 8 C 171 4 178 5 180 10 C 181 13 179 16 176 17 C 171 18 166 13 167 8 Z"
            fill="#2E241D"
          />
          <path d="M179 12 L 192 16 L 179 19 Z" fill="#E2953B" />
          <circle cx="173.6" cy="11.4" r="1.15" fill="#F6F1E7" />
          {/* ripple */}
          <path
            d="M30 132 Q70 140 118 134"
            stroke={line}
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.55"
          />
        </g>
      ))}
      {/* little black bow where the beaks meet */}
      <g transform="translate(170 22)">
        <path
          d="M0 0 L -11 -6 Q -15 0 -11 6 Z M0 0 L 11 -6 Q 15 0 11 6 Z"
          fill="#2E241D"
        />
        <circle r="2.4" fill="#2E241D" />
        <path d="M-2 2 L -5 10 M2 2 L 5 10" stroke="#2E241D" strokeWidth="1.6" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Dried-flower sprig (menu, left)                                 */
/* ---------------------------------------------------------------- */
export function DriedSprig(props: SvgProps) {
  return (
    <svg viewBox="0 0 200 260" fill="none" {...props} aria-hidden>
      <g strokeLinecap="round">
        <path
          d="M96 250 C 92 190 78 130 44 70 M96 250 C 98 180 104 120 128 58 M96 250 C 96 200 90 150 96 96"
          stroke="#9A6B4A"
          strokeWidth="2.4"
        />
        {/* wispy grass */}
        <path
          d="M60 120 C 50 100 52 78 66 60 M132 116 C 144 96 146 74 136 54 M92 130 C 84 110 86 86 98 70"
          stroke="#D9C6A5"
          strokeWidth="1.8"
        />
        {/* buds — dusty pink / tan / cocoa */}
        {[
          [44, 70, "#E4B9A6"],
          [58, 92, "#D9A088"],
          [36, 96, "#C98A6B"],
          [128, 58, "#E8D2AE"],
          [140, 82, "#D9BE8F"],
          [118, 84, "#C9A254"],
          [96, 96, "#8A5A3F"],
          [86, 116, "#B07845"],
          [110, 112, "#E4B9A6"],
          [70, 76, "#EAD8C4"],
          [150, 104, "#C98A6B"],
        ].map(([x, y, c], i) => (
          <ellipse
            key={i}
            cx={x as number}
            cy={y as number}
            rx="7.5"
            ry="10"
            fill={c as string}
            transform={`rotate(${(i * 37) % 60 - 30} ${x} ${y})`}
          />
        ))}
        {/* tiny seed dots */}
        {[
          [52, 58], [64, 52], [122, 44], [134, 40], [104, 60],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.4" fill="#8A5A3F" />
        ))}
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Watercolour rose cluster (menu, right)                          */
/* ---------------------------------------------------------------- */
export function RoseCluster(props: SvgProps) {
  return (
    <svg viewBox="0 0 260 200" fill="none" {...props} aria-hidden>
      {/* eucalyptus behind */}
      <path
        d="M150 150 C 190 120 214 84 220 40"
        stroke="#B9A49B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[
        [214, 52], [206, 72], [196, 92], [184, 110], [170, 128],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="8" fill="#CDB6AC" opacity="0.85" />
      ))}
      {/* sage leaves */}
      <path
        d="M60 150 C 30 140 16 116 20 92 C 44 96 60 116 62 144 Z"
        fill="#AEB49E"
      />
      <path
        d="M170 168 C 198 168 218 152 224 130 C 200 124 178 138 168 162 Z"
        fill="#9BA48C"
      />
      <path d="M40 118 L58 142 M196 148 L188 160" stroke="#7E8871" strokeWidth="1.6" />
      {/* big rose */}
      <g stroke="#D8CBB4" strokeWidth="1.6">
        <circle cx="112" cy="118" r="58" fill="#F6F0E3" />
        <path d="M112 74 C 84 78 66 98 68 124 C 70 148 92 164 116 162" fill="none" />
        <path d="M148 90 C 162 106 164 130 150 146 C 138 160 116 164 100 156" fill="none" />
        <path d="M112 92 C 94 96 84 110 88 126 C 92 140 106 148 120 144" fill="none" />
        <path d="M132 104 C 140 114 140 128 130 136" fill="none" />
        <path d="M112 108 C 102 112 100 122 106 128 C 112 134 122 132 124 124 C 126 116 120 108 112 108 Z" fill="#EFE6D4" />
      </g>
      {/* magnolia bud */}
      <g stroke="#D8CBB4" strokeWidth="1.4">
        <path d="M188 128 C 182 108 190 92 206 86 C 214 100 212 120 198 132 Z" fill="#F4EDDD" />
        <path d="M198 132 C 206 116 220 108 234 110 C 232 126 220 138 204 140 Z" fill="#EDE3CF" />
      </g>
      {/* baby's breath dots */}
      {[
        [58, 78], [70, 64], [50, 96], [172, 60], [186, 50],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#E8DDC6" stroke="#CDBB9C" />
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Trailing greenery vine (menu, over Details card)                */
/* ---------------------------------------------------------------- */
export function Vine(props: SvgProps) {
  const leaf = (x: number, y: number, r: number, c: string) => (
    <path
      key={`${x}-${y}`}
      d="M0 0 C 5 -7 13 -7 16 0 C 13 7 5 7 0 0 Z"
      fill={c}
      transform={`translate(${x} ${y}) rotate(${r})`}
    />
  );
  return (
    <svg viewBox="0 0 160 170" fill="none" {...props} aria-hidden>
      <path
        d="M120 6 C 96 30 86 62 92 96 C 96 122 88 148 66 164
           M120 6 C 134 34 138 68 128 100 C 122 122 124 146 138 162
           M112 20 C 92 34 80 54 78 78"
        stroke="#5E6B4F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {leaf(84, 40, -40, "#77855F")}
      {leaf(72, 62, -70, "#5E6B4F")}
      {leaf(88, 84, -20, "#8B9973")}
      {leaf(78, 108, -60, "#77855F")}
      {leaf(58, 132, -80, "#5E6B4F")}
      {leaf(66, 152, -30, "#8B9973")}
      {leaf(126, 34, 30, "#77855F")}
      {leaf(134, 62, 60, "#5E6B4F")}
      {leaf(122, 92, 10, "#8B9973")}
      {leaf(130, 120, 50, "#77855F")}
      {leaf(140, 146, 70, "#5E6B4F")}
      {leaf(100, 14, -10, "#8B9973")}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Watercolour champagne toast (menu, bottom-left)                 */
/* ---------------------------------------------------------------- */
export function ChampagneWatercolour(props: SvgProps) {
  return (
    <svg viewBox="0 0 220 220" fill="none" {...props} aria-hidden>
      <defs>
        <linearGradient id="champFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2DFA6" />
          <stop offset="100%" stopColor="#E0BE6C" />
        </linearGradient>
      </defs>
      {/* left flute, tilted right */}
      <g transform="rotate(14 70 110)" stroke="#C9A254" strokeWidth="2.2">
        <path d="M52 30 C 50 66 58 92 70 100 L 70 168" fill="none" />
        <path d="M88 30 C 90 66 82 92 70 100" fill="none" />
        <path d="M54 40 C 54 66 60 86 70 94 C 80 86 86 66 86 40 Z" fill="url(#champFill)" opacity="0.9" />
        <path d="M52 168 L 88 168 M56 174 L 84 174" strokeLinecap="round" />
        <ellipse cx="70" cy="30" rx="18" ry="4" fill="#FBF4DF" />
      </g>
      {/* right flute, tilted left */}
      <g transform="rotate(-14 150 110)" stroke="#C9A254" strokeWidth="2.2">
        <path d="M132 30 C 130 66 138 92 150 100 L 150 168" fill="none" />
        <path d="M168 30 C 170 66 162 92 150 100" fill="none" />
        <path d="M134 40 C 134 66 140 86 150 94 C 160 86 166 66 166 40 Z" fill="url(#champFill)" opacity="0.9" />
        <path d="M132 168 L 168 168 M136 174 L 164 174" strokeLinecap="round" />
        <ellipse cx="150" cy="30" rx="18" ry="4" fill="#FBF4DF" />
      </g>
      {/* fizz + sparkles */}
      <g fill="#E7C878">
        {[
          [104, 20], [116, 12], [110, 34], [96, 40], [124, 30],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 2.4 : 3.4} />
        ))}
      </g>
      <g stroke="#C9A254" strokeWidth="1.8" strokeLinecap="round">
        <path d="M108 46 L108 58 M102 52 L114 52" />
        <path d="M132 6 L132 14 M128 10 L136 10" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Red / gold wax seals                                            */
/* ---------------------------------------------------------------- */
export function WaxSealRed(props: SvgProps) {
  return (
    <svg viewBox="0 0 100 100" {...props} aria-hidden>
      <defs>
        <radialGradient id="waxR" cx="36%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#B23131" />
          <stop offset="55%" stopColor="#8E1F1F" />
          <stop offset="100%" stopColor="#5B1212" />
        </radialGradient>
      </defs>
      <path
        d="M50 4 C 66 2 82 10 90 24 C 98 38 98 58 90 72 C 82 88 64 98 48 96
           C 32 94 14 86 8 70 C 2 54 4 34 14 22 C 24 10 36 6 50 4 Z"
        fill="url(#waxR)"
      />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#F0D3B4" strokeWidth="1.4" opacity="0.5" />
      <path
        d="M32 56 C 40 42 52 40 58 48 C 62 54 58 60 52 60 C 46 60 44 54 48 50 M58 48 C 62 42 68 42 70 46"
        stroke="#F0D3B4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <ellipse cx="34" cy="26" rx="10" ry="5" fill="#C9584F" opacity="0.5" transform="rotate(-24 34 26)" />
    </svg>
  );
}

export function WaxSealGold({ text = "", ...props }: SvgProps & { text?: string }) {
  return (
    <svg viewBox="0 0 100 100" {...props} aria-hidden>
      <defs>
        <radialGradient id="waxG" cx="36%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#EDD394" />
          <stop offset="55%" stopColor="#CBA35C" />
          <stop offset="100%" stopColor="#96702F" />
        </radialGradient>
      </defs>
      <path
        d="M50 4 C 67 2 83 11 90 25 C 97 39 97 59 89 73 C 81 88 63 97 47 95
           C 31 93 14 85 8 69 C 2 53 5 33 15 21 C 25 9 37 6 50 4 Z"
        fill="url(#waxG)"
      />
      <circle cx="50" cy="50" r="31" fill="none" stroke="#7A5320" strokeWidth="1.3" opacity="0.6" />
      {text ? (
        <text
          x="50"
          y="60"
          textAnchor="middle"
          fontFamily="var(--font-script)"
          fontSize="30"
          fill="#6B4715"
        >
          {text}
        </text>
      ) : (
        <path
          d="M28 58 C 36 44 48 40 56 46 C 62 51 58 58 52 58 C 47 58 45 52 49 48 M56 46 C 61 40 68 41 72 46 M34 64 C 44 60 58 60 68 64"
          stroke="#6B4715"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      )}
      <ellipse cx="33" cy="25" rx="11" ry="5" fill="#F7E7BE" opacity="0.7" transform="rotate(-24 33 25)" />
    </svg>
  );
}

/* small gold wax "pin" used on polaroids */
export function WaxPin(props: SvgProps) {
  return (
    <svg viewBox="0 0 60 60" {...props} aria-hidden>
      <defs>
        <radialGradient id="waxP" cx="36%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#EED79C" />
          <stop offset="60%" stopColor="#C9A254" />
          <stop offset="100%" stopColor="#93692B" />
        </radialGradient>
      </defs>
      <path
        d="M30 3 C 41 2 51 8 55 17 C 59 26 58 38 52 46 C 46 55 34 59 25 56 C 16 53 6 47 4 37 C 2 27 6 15 14 9 C 20 4 25 4 30 3 Z"
        fill="url(#waxP)"
      />
      <circle cx="30" cy="30" r="17" fill="none" stroke="#7A5320" strokeWidth="1" opacity="0.55" />
      <path
        d="M20 34 C 25 26 33 25 37 30 C 39 33 36 36 33 35"
        stroke="#7A5320"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Sunset harbour silhouettes (landing background)                 */
/* ---------------------------------------------------------------- */
export function HarbourBoats(props: SvgProps) {
  const boat = (x: number, s: number) => (
    <g key={x} transform={`translate(${x} 0) scale(${s})`} fill="#0D0906">
      <path d="M0 20 Q 30 30 60 20 L 52 30 Q 30 36 8 30 Z" />
      <rect x="28" y="-8" width="2.6" height="28" />
      <path d="M30 -8 L 46 6 L 30 6 Z" opacity="0.9" />
      <rect x="14" y="12" width="14" height="6" rx="2" />
    </g>
  );
  return (
    <svg viewBox="0 0 800 60" fill="none" preserveAspectRatio="none" {...props} aria-hidden>
      {boat(90, 0.8)}
      {boat(340, 1.15)}
      {boat(620, 0.65)}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Fine-line cupid (love story / gifts)                            */
/* ---------------------------------------------------------------- */
export function Cupid(props: SvgProps) {
  const s = "#8A5B3B";
  return (
    <svg viewBox="0 0 120 90" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="1.4" strokeLinecap="round">
        {/* wings */}
        <path d="M38 34 C 24 18 24 6 38 2 C 44 12 44 24 40 34 M40 30 C 32 22 30 12 36 6 M44 34 C 40 26 40 16 46 10" />
        {/* head + curls */}
        <circle cx="56" cy="18" r="7" />
        <path d="M50 12 Q 54 8 58 11 Q 62 8 64 13" />
        {/* torso + tummy */}
        <path d="M52 25 C 46 34 46 46 54 52 C 62 58 74 56 78 48 C 81 42 79 36 74 33" />
        <path d="M58 40 Q 62 44 66 42" />
        {/* legs kicking back */}
        <path d="M56 52 C 48 58 40 60 32 58 M64 55 C 60 64 52 70 44 70" />
        {/* arms + bow + arrow */}
        <path d="M72 30 C 80 26 88 26 96 30" />
        <path d="M92 12 C 104 24 104 44 92 56" />
        <path d="M92 12 L 92 56 M78 34 L 110 34 M110 34 L 103 30 M110 34 L 103 38" />
        {/* sash */}
        <path d="M52 44 Q 60 50 70 46 M70 46 Q 76 52 74 60" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Sketched gift boxes (gifts registry)                            */
/* ---------------------------------------------------------------- */
export function GiftSketch(props: SvgProps) {
  const s = "#6B4A33";
  return (
    <svg viewBox="0 0 220 150" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* tall back box */}
        <path d="M78 42 L 142 42 L 142 112 L 78 112 Z M78 42 L 92 30 L 156 30 L 142 42 M156 30 L 156 100 L 142 112" />
        <path d="M110 42 L 110 112 M110 42 L 124 30" />
        <path d="M110 30 C 100 18 86 20 88 30 C 90 38 102 36 110 30 C 118 36 130 38 132 30 C 134 20 120 18 110 30 Z" />
        {/* front-left box */}
        <path d="M28 88 L 84 88 L 84 128 L 28 128 Z M28 88 L 38 80 L 94 80 L 84 88 M94 80 L 94 120 L 84 128" />
        <path d="M56 88 L 56 128" />
        <path d="M56 84 C 48 76 38 78 40 84 C 42 90 50 88 56 84 C 62 88 70 90 72 84 C 74 78 64 76 56 84 Z" />
        {/* front-right box */}
        <path d="M136 92 L 196 92 L 196 132 L 136 132 Z M136 92 L 146 84 L 206 84 L 196 92 M206 84 L 206 124 L 196 132" />
        <path d="M166 92 L 166 132" />
        <path d="M166 88 C 158 80 148 82 150 88 C 152 94 160 92 166 88 C 172 92 180 94 182 88 C 184 82 174 80 166 88 Z" />
        {/* hatching */}
        <path d="M82 50 L 88 44 M82 60 L 92 50 M82 70 L 92 60 M146 96 L 152 90 M146 106 L 156 96 M32 92 L 38 86 M32 102 L 42 92" opacity="0.6" strokeWidth="1.1" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Line-art villa with cypress + fountain (venue)                  */
/* ---------------------------------------------------------------- */
export function Villa(props: SvgProps) {
  const s = "#6B4A33";
  return (
    <svg viewBox="0 0 260 150" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="1.3" strokeLinecap="round">
        {/* main block */}
        <rect x="86" y="40" width="88" height="58" />
        <path d="M82 40 L 178 40 L 174 32 L 86 32 Z" />
        <path d="M110 32 L 110 20 L 150 20 L 150 32 M106 20 L 154 20" />
        <path d="M118 20 L 118 12 L 142 12 L 142 20 M126 12 L 130 6 L 134 12" />
        {/* windows */}
        {[94, 112, 130, 148].map((x) => (
          <g key={x}>
            <rect x={x} y="48" width="12" height="14" />
            <rect x={x} y="70" width="12" height="14" />
            <path d={`M${x} 55 h12 M${x + 6} 48 v14 M${x} 77 h12 M${x + 6} 70 v14`} strokeWidth="0.8" />
          </g>
        ))}
        <rect x="166" y="48" width="0" height="0" />
        {/* door */}
        <path d="M124 98 L 124 82 Q 130 76 136 82 L 136 98" />
        {/* wings */}
        <rect x="58" y="58" width="28" height="40" />
        <rect x="174" y="58" width="28" height="40" />
        <path d="M58 58 L 86 58 M174 58 L 202 58 M56 58 L 88 52 M172 58 L 204 52" strokeWidth="1" />
        <rect x="64" y="66" width="10" height="12" />
        <rect x="186" y="66" width="10" height="12" />
        {/* cypress trees */}
        <path d="M36 98 C 26 84 26 56 36 34 C 46 56 46 84 36 98 Z M36 98 L 36 104" />
        <path d="M224 98 C 214 84 214 56 224 34 C 234 56 234 84 224 98 Z M224 98 L 224 104" />
        <path d="M32 72 C 34 62 38 62 40 72 M32 54 C 34 46 38 46 40 54 M220 72 C 222 62 226 62 228 72" strokeWidth="0.8" />
        {/* fountain */}
        <ellipse cx="130" cy="122" rx="52" ry="12" />
        <ellipse cx="130" cy="118" rx="20" ry="6" />
        <path d="M130 118 L 130 106 M124 108 Q 130 100 136 108" />
        <path d="M120 122 Q 130 128 140 122" strokeWidth="0.8" />
        {/* ground */}
        <path d="M20 132 L 240 132" strokeWidth="0.8" opacity="0.6" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Timeline icons                                                  */
/* ---------------------------------------------------------------- */
const tlBrown = "#7A4A2C";

export function TentIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 90 80" {...props} aria-hidden>
      <path
        d="M6 30 L 45 4 L 84 30 L 84 36
           Q 78 42 71 36 Q 64 42 58 36 Q 51 42 45 36 Q 39 42 32 36 Q 25 42 19 36 Q 12 42 6 36 Z"
        fill={tlBrown}
      />
      <path d="M10 38 L 10 76 L 80 76 L 80 38" stroke={tlBrown} strokeWidth="7" fill="none" />
      <path d="M45 36 C 30 46 26 62 28 76 L 45 76 Z" fill={tlBrown} />
      <path d="M45 36 C 60 46 64 62 62 76 L 45 76 Z" fill={tlBrown} />
      <path d="M45 36 L 45 76" stroke="#F6F1E7" strokeWidth="3" />
    </svg>
  );
}

export function RingsSketch(props: SvgProps) {
  return (
    <svg viewBox="0 0 110 80" fill="none" {...props} aria-hidden>
      <g stroke={tlBrown} strokeWidth="2">
        <circle cx="40" cy="46" r="24" />
        <circle cx="40" cy="46" r="20" strokeWidth="1" opacity="0.6" />
        <circle cx="68" cy="40" r="24" />
        <circle cx="68" cy="40" r="20" strokeWidth="1" opacity="0.6" />
        <path d="M60 12 L 68 4 L 76 12 L 72 16 L 76 20 L 68 16 L 60 20 L 64 16 Z" fill="#F6F1E7" />
        <path d="M62 14 L 74 14 M68 4 L 68 16" strokeWidth="1" />
      </g>
      <g stroke={tlBrown} strokeWidth="1.4" strokeLinecap="round">
        <path d="M14 12 L 14 20 M10 16 L 18 16 M94 8 L 94 14 M91 11 L 97 11 M88 60 L 92 60" />
        <circle cx="24" cy="6" r="1.4" fill={tlBrown} />
        <circle cx="100" cy="26" r="1.4" fill={tlBrown} />
      </g>
    </svg>
  );
}

export function PlateIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 110 80" {...props} aria-hidden>
      <circle cx="55" cy="40" r="30" fill={tlBrown} />
      <circle cx="55" cy="40" r="19" fill="none" stroke="#F6F1E7" strokeWidth="2" />
      {/* fork */}
      <g fill={tlBrown}>
        <rect x="14" y="34" width="5" height="38" rx="2.5" />
        <path d="M9 10 L 12 10 L 12 26 M15 10 L 18 10 L 18 26 M21 10 L 24 10 L 24 26" stroke={tlBrown} strokeWidth="3.4" fill="none" strokeLinecap="round" />
        <path d="M9 24 Q 16.5 34 24 24 L 24 30 Q 16.5 38 9 30 Z" />
      </g>
      {/* spoon */}
      <g fill={tlBrown}>
        <ellipse cx="93" cy="20" rx="9" ry="13" />
        <rect x="90.5" y="30" width="5" height="42" rx="2.5" />
      </g>
    </svg>
  );
}

export function ToastGlasses(props: SvgProps) {
  return (
    <svg viewBox="0 0 110 90" fill="none" {...props} aria-hidden>
      <defs>
        <linearGradient id="toastFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9A6A50" />
          <stop offset="100%" stopColor="#6E4433" />
        </linearGradient>
      </defs>
      <g transform="rotate(12 42 46)" stroke={tlBrown} strokeWidth="1.8">
        <path d="M30 12 C 29 34 34 50 42 56 L 42 78 M54 12 C 55 34 50 50 42 56" fill="none" />
        <path d="M31 20 C 31 36 35 48 42 53 C 49 48 53 36 53 20 Z" fill="url(#toastFill)" />
        <path d="M32 78 L 52 78" strokeLinecap="round" />
      </g>
      <g transform="rotate(-12 72 42)" stroke={tlBrown} strokeWidth="1.8">
        <path d="M60 8 C 59 30 64 46 72 52 L 72 74 M84 8 C 85 30 80 46 72 52" fill="none" />
        <path d="M61 16 C 61 32 65 44 72 49 C 79 44 83 32 83 16 Z" fill="url(#toastFill)" />
        <path d="M62 74 L 82 74" strokeLinecap="round" />
      </g>
      <g stroke={tlBrown} strokeWidth="1.4" strokeLinecap="round">
        <path d="M54 2 L 54 8 M51 5 L 57 5 M92 24 L 92 30 M89 27 L 95 27 M16 30 L 20 30" />
        <circle cx="26" cy="14" r="1.4" fill={tlBrown} />
        <circle cx="98" cy="10" r="1.4" fill={tlBrown} />
      </g>
    </svg>
  );
}

export function CakeSketch(props: SvgProps) {
  const s = tlBrown;
  return (
    <svg viewBox="0 0 100 110" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="1.5" strokeLinecap="round">
        <rect x="34" y="10" width="32" height="24" rx="3" />
        <rect x="24" y="34" width="52" height="28" rx="3" />
        <rect x="14" y="62" width="72" height="32" rx="3" />
        {/* drips */}
        <path d="M34 18 Q 38 24 42 18 Q 46 24 50 18 Q 54 24 58 18 Q 62 24 66 18" strokeWidth="1.1" />
        <path d="M24 42 Q 29 49 34 42 Q 39 49 44 42 Q 49 49 54 42 Q 59 49 64 42 Q 69 49 74 42" strokeWidth="1.1" />
        {/* florals */}
        <circle cx="30" cy="34" r="5" />
        <circle cx="30" cy="34" r="2" fill={s} />
        <path d="M24 30 C 20 26 20 22 24 20 M36 30 C 40 26 40 24 38 20" strokeWidth="1.1" />
        <circle cx="72" cy="62" r="5" />
        <circle cx="72" cy="62" r="2" fill={s} />
        <path d="M78 58 C 82 54 82 50 78 48" strokeWidth="1.1" />
        {/* plate */}
        <path d="M8 96 L 92 96 M20 100 L 80 100" />
      </g>
    </svg>
  );
}

export function MusicNotes(props: SvgProps) {
  return (
    <svg viewBox="0 0 90 80" {...props} aria-hidden>
      <g fill={tlBrown}>
        <ellipse cx="24" cy="62" rx="10" ry="7.5" transform="rotate(-18 24 62)" />
        <ellipse cx="58" cy="70" rx="10" ry="7.5" transform="rotate(-18 58 70)" />
        <rect x="30.5" y="16" width="4.5" height="46" />
        <rect x="64.5" y="24" width="4.5" height="46" />
        <path d="M30.5 16 L 69 24 L 69 36 L 30.5 28 Z" />
      </g>
      <g stroke={tlBrown} strokeWidth="1.4" strokeLinecap="round">
        <path d="M80 8 L 80 14 M77 11 L 83 11" />
        <circle cx="10" cy="34" r="1.4" fill={tlBrown} />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Gold corner floral line-art (save the date)                     */
/* ---------------------------------------------------------------- */
export function GoldCornerFloral(props: SvgProps) {
  const s = "#C9A254";
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="1.5" strokeLinecap="round">
        {/* stems from corner */}
        <path d="M232 8 C 196 34 160 58 118 74 M232 8 C 214 52 192 92 158 122 M232 8 C 244 60 240 116 214 164" />
        {/* open blossom 1 */}
        <g transform="translate(112 78) rotate(-18)">
          <path d="M0 0 C -14 -8 -14 -26 0 -32 C 14 -26 14 -8 0 0 Z" />
          <path d="M0 0 C -22 -2 -30 -18 -22 -30 C -10 -32 0 -18 0 0 Z" transform="rotate(72)" />
          <path d="M0 0 C -22 -2 -30 -18 -22 -30 C -10 -32 0 -18 0 0 Z" transform="rotate(144)" />
          <path d="M0 0 C -22 -2 -30 -18 -22 -30 C -10 -32 0 -18 0 0 Z" transform="rotate(216)" />
          <path d="M0 0 C -22 -2 -30 -18 -22 -30 C -10 -32 0 -18 0 0 Z" transform="rotate(288)" />
          <circle r="4" />
          <circle r="8" strokeWidth="0.9" opacity="0.7" />
        </g>
        {/* blossom 2, smaller */}
        <g transform="translate(206 168) rotate(24) scale(0.72)">
          <path d="M0 0 C -14 -8 -14 -26 0 -32 C 14 -26 14 -8 0 0 Z" />
          <path d="M0 0 C -14 -8 -14 -26 0 -32 C 14 -26 14 -8 0 0 Z" transform="rotate(72)" />
          <path d="M0 0 C -14 -8 -14 -26 0 -32 C 14 -26 14 -8 0 0 Z" transform="rotate(144)" />
          <path d="M0 0 C -14 -8 -14 -26 0 -32 C 14 -26 14 -8 0 0 Z" transform="rotate(216)" />
          <path d="M0 0 C -14 -8 -14 -26 0 -32 C 14 -26 14 -8 0 0 Z" transform="rotate(288)" />
          <circle r="4" />
        </g>
        {/* leaves with centre vein */}
        <g>
          <path d="M154 126 C 136 128 124 142 124 158 C 142 156 154 144 154 126 Z M154 126 C 142 138 134 148 128 156" />
          <path d="M186 96 C 172 92 158 98 152 110 C 166 114 180 108 186 96 Z M186 96 C 174 100 164 104 156 108" />
          <path d="M120 46 C 108 38 92 40 84 50 C 96 58 112 56 120 46 Z M120 46 C 108 48 98 48 88 50" />
          <path d="M226 190 C 214 198 210 212 216 224 C 228 216 232 202 226 190 Z" />
        </g>
        {/* buds + dots */}
        <path d="M96 92 C 88 86 88 76 96 72 C 102 78 102 88 96 92 Z" />
        <circle cx="76" cy="104" r="2.2" fill={s} />
        <circle cx="66" cy="88" r="1.6" fill={s} />
        <circle cx="192" cy="212" r="2.2" fill={s} />
        <circle cx="146" cy="150" r="1.6" fill={s} />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Brown side florals (RSVP page)                                  */
/* ---------------------------------------------------------------- */
export function BrownSideFloral(props: SvgProps) {
  const s = "#A9713F";
  return (
    <svg viewBox="0 0 200 320" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 316 C 44 260 78 214 128 176 M12 316 C 30 250 58 196 104 152 M60 250 C 84 236 104 216 116 192" />
        {/* poppy blossoms */}
        <g transform="translate(134 170) rotate(-16)">
          <path d="M0 0 C -18 -4 -26 -22 -16 -34 C -4 -38 8 -28 6 -14 C 5 -6 3 -2 0 0 Z" />
          <path d="M0 0 C 4 -18 20 -26 32 -18 C 36 -6 26 6 12 4 C 5 3 2 2 0 0 Z" />
          <path d="M0 0 C -14 10 -14 26 -2 32 C 10 28 14 14 6 4 Z" />
          <circle r="3.4" />
          <path d="M-2 -8 L -4 -14 M4 -7 L 7 -12 M6 6 L 11 8" strokeWidth="1" />
        </g>
        <g transform="translate(96 236) rotate(30) scale(0.8)">
          <path d="M0 0 C -18 -4 -26 -22 -16 -34 C -4 -38 8 -28 6 -14 C 5 -6 3 -2 0 0 Z" />
          <path d="M0 0 C 4 -18 20 -26 32 -18 C 36 -6 26 6 12 4 Z" />
          <circle r="3" />
        </g>
        {/* leaves */}
        <path d="M70 268 C 52 262 42 246 46 230 C 62 234 72 248 70 268 Z M70 268 C 62 254 56 246 50 236" />
        <path d="M108 210 C 122 200 126 184 118 172 M104 216 C 92 206 88 192 94 180" />
        <path d="M40 292 C 30 282 28 268 34 258 M46 288 C 56 280 60 268 56 256" />
        {/* bud */}
        <path d="M148 140 C 142 130 146 118 156 116 C 162 126 158 136 148 140 Z M152 128 L 152 118" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Tiny twig (save-the-date, above title)                          */
/* ---------------------------------------------------------------- */
export function Twig(props: SvgProps) {
  const s = "#5B4634";
  return (
    <svg viewBox="0 0 120 44" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="1.4" strokeLinecap="round">
        <path d="M6 36 C 40 26 78 20 114 22" />
        <path d="M40 29 C 38 20 42 12 50 8 M62 25 C 62 16 68 9 76 7 M86 23 C 88 15 94 10 102 9 M28 32 C 24 26 24 18 28 12" />
        {[
          [50, 8], [54, 4], [76, 7], [80, 3], [102, 9], [106, 5], [28, 12], [24, 8],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.6" fill={s} />
        ))}
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Location pin                                                    */
/* ---------------------------------------------------------------- */
export function PinIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 40 52" {...props} aria-hidden>
      <path
        d="M20 2 C 10 2 2 10 2 20 C 2 33 20 50 20 50 C 20 50 38 33 38 20 C 38 10 30 2 20 2 Z"
        fill="#8A5230"
      />
      <circle cx="20" cy="19" r="7" fill="#F6F1E7" />
      <path d="M8 12 L 14 8 M26 8 L 32 12" stroke="#A9713F" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Interlocking rings, thin gold sketch (invite / finale)          */
/* ---------------------------------------------------------------- */
export function GoldRings(props: SvgProps) {
  const s = "#E8C27C";
  return (
    <svg viewBox="0 0 96 60" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="2">
        <ellipse cx="34" cy="34" rx="21" ry="20" />
        <ellipse cx="34" cy="34" rx="17" ry="16" strokeWidth="1" opacity="0.7" />
        <ellipse cx="61" cy="27" rx="21" ry="20" />
        <ellipse cx="61" cy="27" rx="17" ry="16" strokeWidth="1" opacity="0.7" />
        <path d="M52 8 Q 61 2 70 8" strokeWidth="1.2" opacity="0.8" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Ornate frame corner flourish (timeline)                         */
/* ---------------------------------------------------------------- */
export function FrameCorner(props: SvgProps) {
  const s = "#B98A4E";
  return (
    <svg viewBox="0 0 150 150" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="2" strokeLinecap="round">
        {/* main curl along top */}
        <path d="M146 14 C 110 12 84 20 70 36 C 60 48 62 62 74 66 C 84 69 92 62 90 54 C 88 47 80 46 77 51" />
        <path d="M100 24 C 92 18 82 18 76 24" strokeWidth="1.4" />
        {/* main curl along left */}
        <path d="M14 146 C 12 110 20 84 36 70 C 48 60 62 62 66 74 C 69 84 62 92 54 90 C 47 88 46 80 51 77" />
        <path d="M24 100 C 18 92 18 82 24 76" strokeWidth="1.4" />
        {/* connecting inner curl */}
        <path d="M34 34 C 44 26 58 26 66 34 C 58 42 44 42 34 34 Z" strokeWidth="1.4" />
        <circle cx="50" cy="34" r="2" fill={s} />
        {/* leaf ticks */}
        <path d="M118 20 C 122 14 128 12 134 14 M20 118 C 14 122 12 128 14 134" strokeWidth="1.4" />
      </g>
      {/* 4-point diamonds */}
      {[
        [104, 44, 11],
        [44, 104, 11],
        [86, 86, 7],
      ].map(([x, y, r], i) => (
        <path
          key={i}
          d={`M${x} ${(y as number) - (r as number)} L ${(x as number) + (r as number) * 0.42} ${y} L ${x} ${(y as number) + (r as number)} L ${(x as number) - (r as number) * 0.42} ${y} Z`}
          fill={s}
        />
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/*  Faint background doodles (gifts registry)                       */
/* ---------------------------------------------------------------- */
export function BouquetDoodle(props: SvgProps) {
  const s = "#6B4A33";
  return (
    <svg viewBox="0 0 120 160" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="1.4" strokeLinecap="round">
        <path d="M48 156 L 62 108 M72 156 L 60 108" />
        <path d="M46 128 L 76 122" />
        {[
          [44, 76, 13], [66, 62, 15], [88, 80, 12], [56, 92, 11], [78, 98, 10],
        ].map(([x, y, r], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={r} />
            <path
              d={`M${(x as number) - (r as number) * 0.5} ${y} Q ${x} ${(y as number) - (r as number) * 0.7} ${(x as number) + (r as number) * 0.5} ${y} Q ${x} ${(y as number) + (r as number) * 0.7} ${(x as number) - (r as number) * 0.5} ${y}`}
              strokeWidth="1"
            />
          </g>
        ))}
        <path d="M34 96 C 26 88 24 76 30 68 M96 96 C 104 88 106 78 100 70" />
      </g>
    </svg>
  );
}

export function RingDoodle(props: SvgProps) {
  const s = "#6B4A33";
  return (
    <svg viewBox="0 0 100 110" fill="none" {...props} aria-hidden>
      <g stroke={s} strokeWidth="1.6">
        <circle cx="50" cy="66" r="32" />
        <circle cx="50" cy="66" r="26" strokeWidth="1" />
        <path d="M38 26 L 50 12 L 62 26 L 56 34 L 44 34 Z" />
        <path d="M44 34 L 50 12 M56 34 L 50 12 M38 26 L 62 26" strokeWidth="0.9" />
      </g>
    </svg>
  );
}
