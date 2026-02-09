import { IconsObjectType } from "@/Types/IconsType/IconsType";
import Image from "next/image";
import React from "react";
interface canvasProps {
  icons: IconsObjectType[];
}

export const Canvas = ({ icons }: canvasProps) => {
  return (
    <section className="w-full pt-12 my-14">
      <div className="flex items-center gap-5">
        {icons?.map((val: IconsObjectType, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 hover:cursor-pointer hover:outline-2 hover:scale-125 duration-200"
          >
            <Image width={65} height={65} src={val?.icons} alt={val?.alt} />
            <span className="text-gray-light">{val?.alt}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
