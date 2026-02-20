"use client";
import Image from "next/image";
import Dev from "../../../public/svg/dev_image.svg";
import { Button } from "@/UI/Button/Button";
import { useRef } from "react";
import { useFadeFromLeftOnScroll } from "@/Hooks/useFadeFromLeftOnScroll";
import { useFadeFromRightOnScroll } from "@/Hooks/useFadeFromRightOnScroll";

export const BlockHero = () => {
  const card = useRef(null);
  const speech = useRef(null);
  useFadeFromLeftOnScroll(
    card as unknown as React.RefObject<HTMLElement>,
    0.2,
    1,
  );
  useFadeFromRightOnScroll(
    speech as unknown as React.RefObject<HTMLElement>,
    0.2,
    1,
  );

  return (
    <section className="px-1 pt-28 pb-16 sm:px-4 lg:px-10 sm:max-w-7xl mt-26 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 mx-auto ">
      <div className="flex justify-center items-center lg:justify-start max-w-100 lg:pr-8 ">
        <div ref={card} className="relative overflow-hidden ">
          <Image
            src={Dev}
            alt="Illustration développeur"
            className="rounded-full transition-all duration-300 shadow-sm "
            priority
          />
        </div>
      </div>
      <div
        ref={speech}
        className="flex flex-col justify-center items-center lg:items-start  w-full lg:max-w-180"
      >
        <h2 className="text-center lg:text-left text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white-light mb-4">
          Abderahmane Adjali
        </h2>
        <h3 className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-bold text-green-light mb-6">
          Développeur Web Full Stack
        </h3>

        <p className="text-center lg:text-left text-lg md:text-xl text-black dark:text-gray-light max-w-2xl">
          Passionné par le développement web depuis 2019, je conçois des
          applications Full Stack alliant performance, sécurité et qualité de
          code. Mon objectif : créer des solutions fiables qui répondent à de
          vrais besoins.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 my-4 ">
          <a
            className="px-4 lg:px-5 py-2 lg:py-2.5 bg-slate-light dark:bg-green-light text-white-light dark:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:cursor-pointer mr-2 md:mr-6"
            href="images/cv/CV__Abderahmane_Adjali.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Télécharger mon CV
          </a>
          <Button text={"Me contacter"} link={"/contact"} target="_self" />
        </div>
      </div>
    </section>
  );
};
