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
    <div className="bg-white dark:bg-slate-light rounded-lg overflow-hidden mb-4 transition-all duration-300 hover:shadow-lg ">
      <button
        onClick={handleClick}
        className="w-full px-6 py-4 flex justify-between items-center text-left   hover:cursor-pointer"
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
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {data?.answer}
        </div>
      </div>
    </div>
  );
};
