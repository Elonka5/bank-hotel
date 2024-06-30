import React from "react";
import OpenAccordionItem from "./OpenAccordionItem";
import ClosedAccordionItem from "./ClosedAccordionItem";

export interface AccordionItemProps {
  item: {
    id: number;
    image?: string;
    bigImg?: string;
    title?: string[];
    fullText?: string;
    isItemOpen?: boolean;
  };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  index,
  onToggle,
}) => {

  const isArrowOpen = isOpen;

  const handleToggle = () => {
    onToggle();
  };

  return (
    <li className={`accordion__item ${isOpen ? "accordion__item--open" : "accordion__item--closed"}`}>
      {!isOpen ? (
        <OpenAccordionItem item={item} index={index} isOpen={isArrowOpen} onToggle={handleToggle}/>
      ) : (
        <ClosedAccordionItem item={item} index={index} isOpen={isArrowOpen} onToggle={handleToggle}/>
      )}
    </li>
  );
};

export default AccordionItem;

