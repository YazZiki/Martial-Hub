// yearApprox is only used for sorting; year is the display label.
// Each entry links back to martialArts.js by id rather than duplicating data.

export const timelineEvents = [
  {
    yearApprox: -700,
    year: "Ancient Greece",
    martialArtId: "wrestling",
    note: "Formalized as an Olympic sport in 708 BCE, becoming one of the oldest documented combat disciplines.",
  },
  {
    yearApprox: 1700,
    year: "18th century",
    martialArtId: "boxing",
    note: "Bare-knuckle prizefighting in England evolves into the codified sport of boxing.",
  },
  {
    yearApprox: 1750,
    year: "18th century",
    martialArtId: "muay-thai",
    note: "Siamese soldiers' battlefield techniques are refined into Muay Thai, the art of eight limbs.",
  },
  {
    yearApprox: 1880,
    year: "1882",
    martialArtId: "judo",
    note: "Jigoro Kano founds Judo in Japan, adapting jujutsu into a modern, safer combat sport.",
  },
  {
    yearApprox: 1900,
    year: "19th–20th century",
    martialArtId: "karate",
    note: "Okinawan striking traditions are systemized and later introduced to mainland Japan.",
  },
  {
    yearApprox: 1925,
    year: "1920s",
    martialArtId: "bjj",
    note: "The Gracie family adapts Judo and jujutsu in Brazil, emphasizing ground control and leverage.",
  },
];

export const sortedTimeline = [...timelineEvents].sort(
  (a, b) => a.yearApprox - b.yearApprox
);
