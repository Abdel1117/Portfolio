import Node from "../../../public/svg/node-js-svgrepo.svg";
import NextJs from "../../../public/svg/nextjs-fill-svgrepo.svg";
import Tailwind from "../../../public/svg/tailwind-svgrepo.svg";
import TypeScript from "../../../public/svg/typescript-official-svgrepo.svg";
import Dev from "../../../public/images/logo.png";
import { ProjectCard } from "@/UI/Card/ProjectCard";
export const MyProject = () => {
  const iconsArray = [
    { icons: TypeScript, alt: "TypeScript" },

    { icons: Node, alt: "NodeJs" },

    { icons: Tailwind, alt: "Tailwind" },
  ];
  return (
    <section className="px-1 md:pt-28 md:pb-16 sm:px-4 lg:px-10 sm:max-w-7xl mx-auto my-14 outline-1">
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-center lg:text-start text-2xl md:text-5xl ">
          Les projets auquelles j'ai contribué
        </h2>
      </div>

      <div className="p-4 grid lg:grid-cols-2 lg:grid-rows-2 gap-5">
        <ProjectCard
          image={Dev}
          category={"Front-End"}
          title={"Adsunga"}
          description={"Site vitrine avec une creation d'article "}
          icons={iconsArray}
        />
        <ProjectCard
          image={Dev}
          category={"Front-End"}
          title={"Adsunga"}
          description={"Site vitrine avec une creation d'article "}
          icons={iconsArray}
        />
        <ProjectCard
          image={Dev}
          category={"Front-End"}
          title={"Adsunga"}
          description={"Site vitrine avec une creation d'article "}
          icons={iconsArray}
          takeTwoCol={true}
        />
      </div>
    </section>
  );
};
