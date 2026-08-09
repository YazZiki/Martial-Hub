// Single source of truth for every martial art shown across the app.
// ratings are 0-100 illustrative scores used for comparison bars & charts.

import Boxing from "../assets/images/martial-arts/Boxing.jpg"
import BJJ from "../assets/images/martial-arts/BJJ.jpg"
import MMA from "../assets/images/martial-arts/MMA.jpg"
import Karate from "../assets/images/martial-arts/Karate.jpg"
import MuayThai from "../assets/images/martial-arts/MuayThai.jpg"
import wrestling from "../assets/images/martial-arts/wrestling.jpg"


export const martialArts = [
  {
    id: "boxing",
    name: "Boxing",
    category: "Striking",
    origin: "England",
    founded: "18th century",
    description:
      "The sweet science. Focuses entirely on precise punches, dynamic footwork, and evasive head movement.",
    longDescription:
      "Boxing is a combat sport built around punching technique, footwork, and defensive head movement. Fighters compete in a roped ring, scored on clean punches landed, ring control, and effective aggression.",
    image:Boxing,
    ratings: {
      striking: 95,
      grappling: 10,
      kicks: 0,
      clinch: 40,
      fitness: 90,
      competition: 95,
      selfDefense: 80,
    },
  },
  {
    id: "muay-thai",
    name: "Muay Thai",
    category: "Striking",
    origin: "Thailand",
    founded: "18th century",
    description:
      "The art of eight limbs. Utilizes devastating punches, kicks, elbows, and knee strikes with clinch work.",
    longDescription:
      "Known as the art of eight limbs, Muay Thai uses fists, elbows, knees, and shins as weapons. Clinch fighting for knees and off-balancing throws is a defining feature of the sport.",
    image:MuayThai,
    ratings: {
      striking: 90,
      grappling: 15,
      kicks: 95,
      clinch: 90,
      fitness: 95,
      competition: 90,
      selfDefense: 85,
    },
  },
  {
    id: "bjj",
    name: "Brazilian Jiu-Jitsu",
    category: "Grappling",
    origin: "Brazil",
    founded: "1920s",
    description:
      "The gentle art. Focuses on ground fighting, leverage, and submission holds to defeat larger opponents.",
    longDescription:
      "Brazilian Jiu-Jitsu emphasizes ground fighting and submission grappling, using leverage and technique so a smaller person can control and submit a larger, stronger opponent.",
    image:BJJ,
    ratings: {
      striking: 5,
      grappling: 95,
      kicks: 0,
      clinch: 60,
      fitness: 80,
      competition: 90,
      selfDefense: 90,
    },
  },
  {
    id: "wrestling",
    name: "Wrestling",
    category: "Grappling",
    origin: "Greece",
    founded: "Ancient",
    description:
      "The oldest sport. Emphasizes takedowns, throws, pins, and positional control on the mat.",
    longDescription:
      "One of the oldest combat sports, wrestling centers on takedowns, throws, and positional control. It underpins the grappling base of most modern combat sports.",
    image:wrestling,
    ratings: {
      striking: 5,
      grappling: 90,
      kicks: 0,
      clinch: 70,
      fitness: 95,
      competition: 90,
      selfDefense: 75,
    },
  },
  {
    id: "karate",
    name: "Karate",
    category: "Striking",
    origin: "Japan (Okinawa)",
    founded: "19th century",
    description:
      "The empty hand. A traditional striking art emphasizing precise punches, kicks, and deep stances.",
    longDescription:
      "Karate is a traditional Japanese striking art built on linear punches, kicks, and disciplined stances, developed on Okinawa and later systemized into competitive and traditional forms.",
    image:Karate,
    ratings: {
      striking: 85,
      grappling: 15,
      kicks: 75,
      clinch: 20,
      fitness: 70,
      competition: 75,
      selfDefense: 80,
    },
  },
  {
  id: "mma",
  name: "MMA",
  category: "Hybrid",
  origin: "Dagestan",
  founded: "1990s",
    description:
    "The complete fighter. Blends striking, wrestling, and submission grappling into one full-spectrum combat sport.",
    longDescription:
    "Mixed Martial Arts combines techniques from boxing, wrestling, Brazilian Jiu-Jitsu, Muay Thai, and other disciplines into a single ruleset fought both standing and on the ground. Dagestan, in particular, has produced a disproportionate number of elite fighters thanks to a deep-rooted wrestling and combat sambo culture passed down through generations, most famously producing Khabib Nurmagomedov.",
    image:MMA,
  ratings: {
    striking: 75,
    grappling: 80,
    kicks: 60,
    clinch: 70,
    fitness: 95,
    competition: 95,
    selfDefense: 90,
  },
},
];

export const getMartialArtById = (id) =>
  martialArts.find((art) => art.id === id);

export const ratingLabels = [
  { key: "striking", label: "Striking" },
  { key: "grappling", label: "Grappling" },
  { key: "kicks", label: "Kicks" },
  { key: "clinch", label: "Clinch" },
  { key: "fitness", label: "Fitness" },
  { key: "competition", label: "Competition" },
  { key: "selfDefense", label: "Self Defense" },
];
