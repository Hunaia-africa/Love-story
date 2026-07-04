/* ------------------------------------------------------------------ */
/*  Every photo on the site, in one place.                            */
/*  Later, to serve from ImageKit, change IMG_BASE to e.g.            */
/*  "https://ik.imagekit.io/<your_id>/wedding" — nothing else moves.  */
/* ------------------------------------------------------------------ */

export const IMG_BASE = "/images";

const img = (file: string, alt: string) => ({ src: `${IMG_BASE}/${file}`, alt });

export const photos = {
  /* landing */
  sunset: img("sunset-harbour.jpg", "Golden sunset over the water with fishing boats"),

  /* menu collage */
  toast: img("toast.jpg", "Dave and Faizah toasting with champagne"),
  menuSelfie: img("menu-selfie.jpg", "A selfie of Dave and Faizah under a thatched roof"),

  /* the traditional wedding invitation */
  inviteCouple: img("invite-couple.jpg", "Dave and Faizah smiling in the golden hour"),

  /* love story — chapter one filmstrip */
  filmBeach: img("film-beach.jpg", "Dave and Faizah on the beach"),
  filmCar: img("film-car.jpg", "Road-trip selfie in the back seat"),
  filmThatch: img("film-thatch.jpg", "Smiling together under a thatched roof"),

  /* love story — chapter two collage */
  storyStripes: img("story-stripes.jpg", "Dave and Faizah at a beach bar"),
  storyQuad: img("story-quad.jpg", "Celebrating on a quad bike in the dunes"),
  storyHugBw: img("story-hug-bw.jpg", "A quiet hug at home, in black and white"),

  /* love story — moments strip */
  momentLaugh: img("moment-laugh.jpg", "Faizah laughing, Dave smiling behind her"),
  momentCouch: img("moment-couch.jpg", "Cosy on the couch together"),
  momentYellow: img("moment-yellow.jpg", "A happy evening at home"),
  momentClose: img("moment-close.jpg", "Close together, cheek to cheek"),

  /* where to stay */
  staySuite: img("stay-suite.jpg", "A warm hotel suite with a large window looking onto lush greenery"),

  /* finale */
  ringHand: img("ring-hand.jpg", "Faizah's hand with her ring, raised against the sunset sea"),
} as const;

export type Photo = (typeof photos)[keyof typeof photos];
