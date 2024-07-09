import React from "react";
import OpenAccordionItem from "./OpenAccordionItem";
import ClosedAccordionItem from "./ClosedAccordionItem";
import { AccordionItemInterface } from "../../../../redux/interface/accordion";


export interface AccordionItemProps {
  item:AccordionItemInterface;
  // {
  //   id: number;
  //   image?: React.ReactNode;
  //   bigImg?: React.ReactNode;
  //   title?: string[];
  //   fullText?: string;
  //   isItemOpen?: boolean;
  // };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  nextItemOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  index,
  nextItemOpen,
  onToggle,
}) => {

  const isArrowOpen = isOpen;

  const handleToggle = () => {
    onToggle();
  };

  const handleItemClick = () => {
    if (!isOpen) {
      handleToggle();
    }
  };

  return (
    <li
      className={`accordion__item ${
        isOpen ? "accordion__item--open" : "accordion__item--closed"
      } ${nextItemOpen && !isOpen ? "no-border" : ""}`}
      onClick={isOpen ? undefined : handleItemClick}
    >
      {!isOpen ? (
                <ClosedAccordionItem item={item} index={index} isOpen={isArrowOpen} onToggle={handleToggle}/> 
      ) : (
<OpenAccordionItem item={item} index={index} isOpen={isArrowOpen} onToggle={handleToggle}/>
      )}
    </li>
  );
};

export default AccordionItem;

