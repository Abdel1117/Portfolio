"use client";
import { BlockHero } from "@/components/BlockHero/BlockHero";
import { BlockHeroWithBlob } from "@/components/BlockHeroWithBlob/BlockHeroWithBlob";
import { MyProject } from "@/components/MyProjects/MyProject";

import { StackList } from "@/components/StackList/StackList";
export default function Home() {
  return (
    <main className="bg-[#F0F0F4] dark:bg-[#151C25] min-h-[100vh]">
      <BlockHero />
      <hr className="text-back dark:text-green-light my-24" />
      <BlockHeroWithBlob
        title="A propos de moi"
        underTitle="Qui-suis-je?"
        para="I am currently a master’s student in Applied Geoinformatics at the  University of Salzburg, Austria. I have a keen interest in front-end and  GIS development. My goal is to use my expertise in building exciting  and functional user interfaces. Additionally, employ my geospatial  analysis, modeling, and process automation skills to engineer  innovative, customizable, and sustainable software solutions. The following are tech stacks that I use regularly:"
        buttonText="Télécharger mon CV"
        buttonLink="/Cv"
      />
      <StackList />
      <MyProject />
    </main>
  );
}
