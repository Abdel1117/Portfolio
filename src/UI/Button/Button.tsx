import React from "react";
interface ButtonProps {
  text: string;
  action: () => void;
}

export const Button = ({ text, action }: ButtonProps) => {
  return (
    <button
      onClick={() => action()}
      className="px-4 lg:px-5 py-2 lg:py-2.5 bg-slate-light dark:bg-green-light text-white-light dark:text-black font-semibold rounded-lg p-2 hover:cursor-pointer mr-2 md:mr-6"
    >
      {text}
    </button>
  );
};
