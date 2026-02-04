import Image from "next/image";
import Dev from "../../../public/svg/dev_image.svg";
import Link from "next/link";

interface BlockHeroWithBlobProps {
  title: string;
  underTitle: string;
  para: string;
  icons: IconsObjectType[];
  buttonText: string;
  buttonLink: string;
}
interface IconsObjectType {
  icons: HTMLImageElement;
  alt: string;
}

export const BlockHeroWithBlob = ({
  title,
  underTitle,
  para,
  icons,
  buttonText,
  buttonLink,
}: BlockHeroWithBlobProps) => {
  return (
    <section className="mt-[75px] p-1 lg:p-10 xl:p-20 grid grid-cols-1 sm:grid-cols-2  gap-[20px] my-14">
      <Image src={Dev} alt="An image representing someone developping" />

      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center sm:items-start justify-center my-6">
          <h2 className="text-2xl lg:text-5xl font-bold">{title}</h2>
          <div className="flex  items-center ">
            <span className="h-[2px] w-[40px] bg-black mr-2" />
            <h3 className="font-bold">{underTitle}</h3>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-xl text-gray-light">{para}</p>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-6">
          {icons?.map((val: IconsObjectType, index: number) => (
            <div key={index} className="border flex flex-col items-center ">
              <Image width={40} height={40} src={val?.icons} alt={val?.alt} />
              <span className="text-gray-light">{val?.alt}</span>
            </div>
          ))}
        </div>
        <button className="mx-auto md:mx-0 p-2.5 outline-1 bg-white dark:bg-black text-black dark:text-white max-w-[200px]">
          {buttonText}
        </button>
      </div>
    </section>
  );
};
