import React, { useState } from 'react';
import AccordionItem from './AccordionItem/AccordionItem';
import { items } from '../../../helpers/accordionItems';

const Accordion: React.FC = () => {
    const [openItemId, setOpenItemId] = useState<number | null>(1);
    const [isArrowOpen, setIsArrowOpen] = useState<boolean>(false);

    const handleToggle = (id: number) => {
        setOpenItemId(openItemId === id ? null : id);
        setIsArrowOpen(!isArrowOpen);
      };

  return (
    <ul className='accordion__list'>
      {items.map((item,index) => (
        <AccordionItem key={item.id} item={item} index={index} isOpen={openItemId === item.id} 
        onToggle={() => handleToggle(item.id)}
        nextItemOpen={openItemId === items[index + 1]?.id}
          />
      ))}
    </ul>
  );
};

export default Accordion;