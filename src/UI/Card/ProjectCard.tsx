import { IconsObjectType } from "@/Types/IconsType/IconsType";
import Image, { StaticImageData } from "next/image";
import { Button } from "../Button/Button";

interface ProjectCardProps {
  image: string | StaticImageData;
  category: string;
  title: string;
  description: string;
  icons: IconsObjectType[];
  takeTwoCol?: boolean;
  link: string;
  isLinkNotAvailable: boolean;
  linkSourceCode: string;
  isLinkSourceCodeNotAvailable: boolean;
}

export const ProjectCard = ({
  image,
  category,
  title,
  description,
  icons,
  takeTwoCol = false,
  link,
  isLinkNotAvailable,
  linkSourceCode,
  isLinkSourceCodeNotAvailable,
}: ProjectCardProps) => {
  return (
    <div
      className={`h-full bg-white dark:bg-[#151C25] rounded-lg overflow-hidden shadow-lg ${takeTwoCol ? "lg:col-span-2" : "col-span-1"}`}
    >
      <div className="flex justify-center items-center w-full ">
        <div className="relative overflow-hidden w-full h-56">
          <Image className="object-contain" fill src={image} alt={title} />
        </div>
      </div>
      <div className="p-1 md:p-6">
        <h2 className="title-font text-center text-2xl font-medium dark:text-white mb-3">
          {title}
        </h2>
        <h3 className="tracking-widest text-center text-md title-font font-medium text-gray-500 mb-1">
          {category}
        </h3>
        <p className="leading-relaxed text-center mb-3">{description}</p>

        <div>
          <h3 className="text-center">Stack technique :</h3>
          <div className="flex flex-wrap items-center justify-center relative py-4">
            {icons?.map((icon: IconsObjectType, index) => (
              <div
                key={index}
                className="overflow-hidden  max-w-[50px] m-2 md:mr-5"
              >
                <Image src={icon.icons} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex  items-center justify-center py-6">
          <Button
            lock={isLinkNotAvailable}
            text="Visiter le site"
            link={link}
            target="_blank"
          />
          <Button
            lock={isLinkSourceCodeNotAvailable}
            text="Code Source"
            link={linkSourceCode}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};
