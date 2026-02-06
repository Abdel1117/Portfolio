import Python from "../../../public/svg/python-svgrepo.svg";
import Node from "../../../public/svg/node-js-svgrepo.svg";
import NextJs from "../../../public/svg/nextjs-fill-svgrepo.svg";
import Tailwind from "../../../public/svg/tailwind-svgrepo.svg";
import TypeScript from "../../../public/svg/typescript-official-svgrepo.svg";
import { Canvas } from "../Canvas/Canvas";

export const StackList = () => {
  const iconsArray = [
    { icons: TypeScript, alt: "TypeScript" },
    { icons: Python, alt: "Python" },
    { icons: Node, alt: "NodeJs" },
    { icons: NextJs, alt: "NextJs" },
    { icons: Tailwind, alt: "Tailwind" },
    { icons: TypeScript, alt: "TypeScript" },
    { icons: Python, alt: "Python" },
    { icons: Node, alt: "NodeJs" },
    { icons: NextJs, alt: "NextJs" },
    { icons: Tailwind, alt: "Tailwind" },
    { icons: Tailwind, alt: "Tailwind" },
  ];
  return (
    <section className="px-1 md:pt-28 md:pb-16 sm:px-4 my-14 mx-auto ">
      <div>
        <h2 className="text-2xl lg:text-5xl font-bold text-center">
          Mes Stacks Techniques:
        </h2>
      </div>
      <div>
        <Canvas icons={iconsArray} />
      </div>
    </section>
  );
};
