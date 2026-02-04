"use client";

import { BlockHero } from "@/components/BlockHero/BlockHero";
import { BlockHeroWithBlob } from "@/components/BlockHeroWithBlob/BlockHeroWithBlob";
import { useTheme } from "@/context/Theme/ThemeContext";
import Python from "../../public/svg/python-svgrepo.svg";
import Node from "../../public/svg/node-js-svgrepo.svg";
import NextJs from "../../public/svg/nextjs-fill-svgrepo.svg";
import Tailwind from "../../public/svg/tailwind-svgrepo.svg";
import TypeScript from "../../public/svg/tailwind-svgrepo.svg";
export default function Home() {
  const iconsArray = [
    { icons: TypeScript, alt: "Python" },
    { icons: Python, alt: "Python" },
    { icons: Node, alt: "Python" },
    { icons: NextJs, alt: "Python" },
    { icons: Tailwind, alt: "Python" },
  ];

  return (
    <main className="bg-[#F0F0F4] dark:bg-[#151C25] min-h-[100vh]">
      <BlockHero />
      <hr className="text-back dark:text-green-light my-24" />
      <BlockHeroWithBlob
        title="A propos de moi"
        underTitle="Qui-suis-je?"
        para="I am currently a master’s student in Applied Geoinformatics at the  University of Salzburg, Austria. I have a keen interest in front-end and  GIS development. My goal is to use my expertise in building exciting  and functional user interfaces. Additionally, employ my geospatial  analysis, modeling, and process automation skills to engineer  innovative, customizable, and sustainable software solutions. The following are tech stacks that I use regularly:"
        icons={iconsArray}
        buttonText="Télécharger mon CV"
        buttonLink="/Cv"
      />
    </main>
  );
}
