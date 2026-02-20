"use client";
import { IconsObjectType } from "@/Types/IconsType/IconsType";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface canvasProps {
  icons: IconsObjectType[];
}

export const Canvas = ({ icons }: canvasProps) => {
  const [offset, setOffset] = useState<number>(0);
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const speed = hasFocus ? 0 : 3;

    const scroll = () => {
      setOffset((prevOffset) => {
        const track = trackRef.current;
        if (!track) return prevOffset;

        const itemsWidth = track.scrollWidth / 2; // car on répète 2 fois
        const newOffset = prevOffset + speed;

        if (newOffset >= itemsWidth) return 0;
        return newOffset;
      });
    };

    const id = window.setInterval(scroll, 16);
    return () => window.clearInterval(id);
  }, [hasFocus]);

  return (
    <section className="px-1 md:pt-28 md:pb-16 sm:px-4 lg:px-10 sm:max-w-7xl max-w-7xl mx-auto overflow-x-hidden">
      <div className="relative w-full overflow-x-hidden py-4">
        <div
          ref={trackRef}
          className="flex items-center w-max will-change-transform "
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "none",
          }}
        >
          {[...Array(2)].map((_, repeatIndex) => (
            <div
              key={repeatIndex}
              className="flex items-center gap-5 flex-shrink-0"
            >
              {icons?.map((val: IconsObjectType, index: number) => (
                <div
                  onMouseOver={() => setHasFocus(true)}
                  onMouseLeave={() => setHasFocus(false)}
                  key={`${repeatIndex}-${index}`}
                  className="flex flex-col items-center p-1 md:p-3 hover:cursor-pointer hover:scale-125 hover:border hover:dark:border-white rounded-lg duration-200 flex-shrink-0 "
                >
                  <Image width={65} height={65} src={val.icons} alt={val.alt} />
                  <span className="text-gray-light">{val.alt}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
