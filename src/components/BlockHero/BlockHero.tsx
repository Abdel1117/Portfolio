import Image from "next/image";
import Dev from "../../../public/svg/dev_image.svg";
import { Button } from "@/UI/Button/Button";

export const BlockHero = () => {
  return (
    <section className="px-1 pt-28 pb-16 sm:px-4 lg:px-10 sm:max-w-7xl  grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 mx-auto outline-1">
      <div className="flex justify-center lg:justify-start max-w-[90%] sm:max-w-[75%] md:max-w-[50%] lg:max-w-full lg:pr-8 ">
        <div className="relative overflow-hidden ">
          <Image
            src={Dev}
            alt="Illustration développeur"
            className="rounded-full transition-all duration-300 shadow-sm "
            priority
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start  w-full lg:max-w-180">
        <h2 className="text-xl">Abderahmane Adjali</h2>
        <h3 className="text-center lg:text-start text-2xl md:text-5xl my-4">
          Développeur Web Full Stack
        </h3>

        <p className="text-center lg:text-left sm:text-base md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
          debitis! Aliquam facilis blanditiis accusantium sapiente ut similique
          incidunt illum a quas nemo. Dolorum, ut molestiae. Dicta, doloribus
          nostrum ex, possimus quidem expedita iusto ullam esse rerum non
          corrupti. Aliquam, neque?
        </p>

        <div className="my-4 ">
          <Button
            text={"Get in Touch"}
            action={() => {
              console.log("/");
            }}
          />
          <Button
            text={"Get in Touch"}
            action={() => {
              console.log("/");
            }}
          />
        </div>
      </div>
    </section>
  );
};
