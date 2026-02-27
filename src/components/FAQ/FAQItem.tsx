"use client";
import React from "react";
import { FAQItemProps } from "./types";

/**
 * FAQItem Component
 * Single Responsibility: Render a single FAQ item with toggle functionality
 * Open/Closed: Can be extended with new animations or styles without modifying core logic
 */
export const FAQItem = ({ data, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = () => {
    onToggle(data?.id);
  };

  return (
    <div className="bg-white dark:bg-slate-light rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <button
        type="button"
        onClick={handleClick}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${data?.id}`}
      >
        <h3 className="text-sm md:text-lg font-semibold text-black dark:text-white pr-4">
          {data?.question}
        </h3>

        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-slate-light dark:bg-green-light transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            className="w-4 h-4 text-white dark:text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${data?.id}`}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-200 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {data?.answer}
          </div>
        </div>
      </div>
    </div>
  );
};
