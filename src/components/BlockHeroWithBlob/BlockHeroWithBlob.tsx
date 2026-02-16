"use client";

import Image from "next/image";
import Dev from "../../../public/svg/dev_image.svg";
import { Button } from "@/UI/Button/Button";
import { useRef } from "react";
import { useFadeFromLeftOnScroll } from "@/Hooks/useFadeFromLeftOnScroll";
import { useFadeFromRightOnScroll } from "@/Hooks/useFadeFromRightOnScroll";

interface BlockHeroWithBlobProps {
  title: string;
  underTitle: string;
  para: string;
  buttonText: string;
  buttonLink: string;
}

export const BlockHeroWithBlob = ({
  title,
  underTitle,
  para,
  buttonText,
  buttonLink,
}: BlockHeroWithBlobProps) => {
  const leftBlock = useRef<HTMLDivElement>(null);
  const rightBlock = useRef<HTMLDivElement>(null);

  useFadeFromLeftOnScroll(leftBlock, 0.2, 1);
  useFadeFromRightOnScroll(rightBlock, 0.2, 1);

  return (
    <>
      <section className="px-1 md:pt-28 md:pb-16 sm:px-4 lg:px-10 sm:max-w-7xl max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto">
        <div ref={leftBlock} className="flex flex-col">
          <div className="flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-12">
            <h2 className="text-center lg:text-left text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white-light">
              {title}
            </h2>
            <div className="flex items-center ">
              <span className="h-0.5 w-10 bg-green-light mr-2" />
              <h3 className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-bold text-green-light">
                {underTitle}
              </h3>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-center lg:text-left text-lg md:text-xl text-black dark:text-gray-light lg:max-w-2xl">
              {para}
            </p>
          </div>
          <div className="mx-auto lg:mx-0 mt-auto mb-0 ">
            <Button text={buttonText} link={buttonLink} target="_blank" />
          </div>
        </div>
        <div
          ref={rightBlock}
          className=" max-w-[90%] sm:max-w-[80%] lg:max-w-full mx-auto lg:mx-0"
        >
          <div className="relative overflow-hidden">
            <Image
              className="object-contain "
              src={Dev}
              alt="An image representing someone developping"
            />
          </div>
        </div>
      </section>
    </>
  );
};
