import Muhamedali from "../assets/images/fighters/MohaAli.jpg"
import BruceLee from "../assets/images/fighters/BruceLee.jpg"
import Buakaw from "../assets/images/fighters/Buakaw.jpg"
import Khabib from "../assets/images/fighters/Khabib.jpg"

export const fighters = [
  {
    id: "muhammad-ali",
    name: "Muhammad Ali",
    discipline: "Boxing",
    martialArtId: "boxing",
    achievement: "The Greatest. 3-time Heavyweight Champion.",
    image: Muhamedali,
    featured: true,
  },
  {
    id: "bruce-lee",
    name:"Bruce Lee",
    discipline: "Jeet Kune Do",
    martialArtId: "karate",
    achievement: "Pioneer of mixed martial arts philosophy.",
    image : BruceLee,
    featured: true,
  },
  {
    id: "khabib-nurmagomedov",
    name: "Khabib Nurmagomedov",
    discipline: "Sambo / MMA",
    martialArtId: "wrestling",
    achievement: "Undefeated lightweight champion (29-0).",
    image: Khabib,
    featured: true,
  },
  {
    id: "buakaw-banchamek",
    name: "Buakaw Banchamek",
    discipline: "Muay Thai",
    martialArtId: "muay-thai",
    achievement: "Multiple-time K-1 World MAX champion.",
    image: Buakaw,
    featured: true,
  },
];

export const getFighterById = (id) => fighters.find((f) => f.id === id);
