import Image from "next/image";
import Dev from "../../../public/svg/dev_image.svg";

export const BlockHero = () => {
  return (
    <section className="mt-[75px] p-1 lg:p-10 xl:p-20 grid grid-cols-1 sm:grid-cols-2  gap-[20px] ">
      <div className="ml-auto  flex flex-col h justify-center lg:justify-start p-1 md:p-2 lg:p-3 w-full max-w-180">
        <h2 className="text-xl">Abderahmane Adjali</h2>
        <h3 className="text-2xl md:text-5xl my-4">
          Développeur Web Full Stack
        </h3>

        <p className="text-base md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
          debitis! Aliquam facilis blanditiis accusantium sapiente ut similique
          incidunt illum a quas nemo. Dolorum, ut molestiae. Dicta, doloribus
          nostrum ex, possimus quidem expedita iusto ullam esse rerum non
          corrupti. Aliquam, neque?
        </p>

        <div className="my-4">
          <button className="bg-green-light rounded-lg p-2 hover:cursor-pointer mr-6">
            Get in Touch
          </button>
          <button className="bg-green-light rounded-lg p-2 hover:cursor-pointer">
            Available now
          </button>
        </div>
      </div>
      <Image
        className="w-full sm:h-auto  rounded-lg  "
        src={Dev}
        alt="An image representing someone developping"
      />
    </section>
  );
};
