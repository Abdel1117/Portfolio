"use client";
import { useState } from "react";
import { FAQListProps } from "./types";
import { FAQItem } from "./FAQItem";

/**
 * FAQList Component
 * Single Responsibility: Manage the state and rendering of multiple FAQ items
 * Dependency Inversion: Depends on FAQItemData interface, not concrete implementations
 */
export const FAQList = ({ items }: FAQListProps) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItemId((currentId) => (currentId === id ? null : id));
  };

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        Aucune question disponible pour le moment.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <FAQItem
          key={item.id}
          data={item}
          isOpen={openItemId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};
