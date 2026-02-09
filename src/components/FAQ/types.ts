export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export interface FAQItemProps {
  data: FAQItemData;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export interface FAQListProps {
  items: FAQItemData[];
}
