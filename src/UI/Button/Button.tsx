import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  link: string;
  lock?: boolean;
  target: string;
}

export const Button = ({
  text,
  link,
  lock = false,
  target = "_self",
}: ButtonProps) => {
  const baseClasses =
    "px-4 lg:px-5 py-2 lg:py-2.5 bg-slate-light dark:bg-green-light  text-white-light dark:text-black font-semibold rounded-lg transition-all duration-300 transform shadow-xl mr-2 md:mr-6";

  const enabledClasses =
    "hover:scale-105 hover:shadow-2xl hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-light dark:focus:ring-green-light";

  const disabledClasses =
    "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-xl grayscale";

  if (lock) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={`${baseClasses} ${disabledClasses}`}
        title="Indisponible"
      >
        {text}
      </button>
    );
  }

  return (
    <Link target={target} href={link}>
      <button type="button" className={`${baseClasses} ${enabledClasses}`}>
        {text}
      </button>
    </Link>
  );
};
