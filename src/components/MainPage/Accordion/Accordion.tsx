import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

import img1 from "../../../assets/images/mainImages/desktop1920/main-facilities1-desktop-1920.webp"
import img2 from "../../../assets/images/mainImages/desktop1920/main-facilities2-desktop-1920.webp"
import img3 from "../../../assets/images/mainImages/desktop1920/main-facilities3-desktop-1920.webp"

const items = [
  {
    id: 1,
    image: img1,
    text: 'Ice restaurant',
    fullText: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
    isOpen: true,
  },
  {
    id: 2,
    image: img2,
    text: 'Conference hall',
    fullText: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
    isOpen: false,
  },
  {
    id: 3,
    image: img3,
    text: 'Wine bar “reserve”',
    fullText: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
    isOpen: false,
  }
];

const Accordion: React.FC = () => {
    const [openItemId, setOpenItemId] = useState<number | null>(1);

    const handleToggle = (id: number) => {
        setOpenItemId(openItemId === id ? null : id);
      };


  return (
    <ul>
      {items.map(item => (
        <AccordionItem key={item.id} item={item} issOpen={openItemId === item.id} 
        onToggle={() => handleToggle(item.id)}  />
      ))}
    </ul>
  );
};

export default Accordion;