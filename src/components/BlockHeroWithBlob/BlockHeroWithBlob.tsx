import Image from "next/image";
import Dev from "../../../public/svg/dev_image.svg";
import Link from "next/link";

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
  return (
    <>
      <section className="px-1 md:pt-28 md:pb-16 sm:px-4 lg:px-10 sm:max-w-7xl max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-[20px] my-14 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-5xl font-bold">{title}</h2>
            <div className="flex items-center ">
              <span className="h-[2px] w-[40px] bg-black mr-2" />
              <h3 className="font-bold">{underTitle}</h3>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-center leading-relaxed lg:text-start text-base lg:text-md xl:text-xl text-gray-light">
              {para}
            </p>
          </div>

          <button className="mx-auto lg:mx-0 p-2.5 outline-2 mt-auto mb-0 bg-white dark:bg-black text-black font-semibold dark:text-white max-w-[200px] hover:cursor-pointer">
            {buttonText}
          </button>
        </div>
        <div className=" max-w-[90%] sm:max-w-[80%] lg:max-w-full mx-auto lg:mx-0">
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
