"use client";
import { Title } from "@/UI/Title/Title";
import React from "react";
import { FAQList } from "./FAQList";
import { faqData } from "./faqData";
import { Button } from "@/UI/Button/Button";

/**
 * FAQ Component
 * Single Responsibility: Main container for the FAQ section
 * Open/Closed: Can add new FAQ items through data without modifying this component
 * Liskov Substitution: FAQList can be replaced with any component accepting FAQListProps
 * Interface Segregation: Uses specific interfaces for data structure
 * Dependency Inversion: Depends on abstractions (interfaces) not implementations
 */
export const FAQ = () => {
  const send = () => {
    console.log("send");
  };
  return (
    <section className="px-4 md:pt-28 md:pb-16 sm:px-6 lg:px-10 max-w-7xl my-14 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 outline-2">
      <div className="flex flex-col justify-center items-centermb-8 text-center">
        <Title title="Questions Fréquentes" />
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Trouvez les réponses aux questions les plus fréquemment posées sur mes
          services et mon parcours.
        </p>
        <div className="w-full mt-5">
          <Button text="Posez votre question" action={() => send()} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <FAQList items={faqData} />
      </div>
    </section>
  );
};
