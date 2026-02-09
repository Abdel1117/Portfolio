import { IconsObjectType } from "@/Types/IconsType/IconsType";
import Image from "next/image";
import { Button } from "../Button/Button";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  icons: IconsObjectType[];
  takeTwoCol?: boolean;
}

export const ProjectCard = ({
  image,
  category,
  title,
  description,
  icons,
  takeTwoCol = false,
}: ProjectCardProps) => {
  return (
    <div
      className={`h-full bg-white dark:bg-[#151C25] rounded-lg overflow-hidden ${takeTwoCol ? "lg:col-span-2" : "col-span-1"}`}
    >
      <div className="relative overflow-hidden">
        <Image
          className="lg:h-50 md:h-36 w-full object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className="md:p-6">
        <h1 className="title-font text-center text-lg font-medium text-white mb-3">
          {title}
        </h1>
        <h2 className="tracking-widest text-center text-xs title-font font-medium text-gray-500 mb-1">
          {category}
        </h2>
        <p className="leading-relaxed text-center mb-3">{description}</p>

        <div>
          <h3 className="text-center">Technology Used:</h3>
          <div className="flex items-center justify-center relative py-4">
            {icons?.map((icon: IconsObjectType, index) => (
              <div key={index} className="overflow-hidden  max-w-[50px] mr-5">
                <Image src={icon.icons} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap  items-center justify-center py-6">
          <Button text="Code Source" />
          <Button text="Visiter le site" />
        </div>
      </div>
    </div>
  );
};
