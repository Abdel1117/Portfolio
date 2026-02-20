"use client";
import { BlockHero } from "@/components/BlockHero/BlockHero";
import { BlockHeroWithBlob } from "@/components/BlockHeroWithBlob/BlockHeroWithBlob";
import { ConclusionBlock } from "@/components/ConclusionBlock/ConclusionBlock";
import { FAQ } from "@/components/FAQ/FAQ";
import { MyProject } from "@/components/MyProjects/MyProject";

import { StackList } from "@/components/StackList/StackList";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BlockHero />
      <BlockHeroWithBlob
        title="A propos de moi"
        underTitle="Qui-suis-je?"
        para="Passionné par le développement web depuis 2019, j’ai construit mon parcours entre apprentissage autonome, des formations diplômante et expérience en alternance. Aujourd’hui développeur Full Stack avec une expertise en DevSecOps, je m’attache à créer des applications à la fois performantes, sécurisées et maintenables. J’aime transformer des besoins complexes en solutions claires, robustes et bien structurées."
        buttonText="Télécharger mon CV"
        buttonLink="/images/cv/CV__Abderahmane_Adjali.pdf"
      />
      <StackList />
      <MyProject />
      <FAQ />
      <ConclusionBlock />
    </main>
  );
}
