import React, { useEffect, useState } from 'react';
import AccordionItem from './AccordionItem/AccordionItem';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {  getAccordionThunk } from '../../../redux/accordion/accordionThunk';
import { AccordionItemInterface } from '../../../redux/interface/accordion';
// import { items } from '../../../helpers/accordionItems';

const Accordion: React.FC = () => {
    const [openItemId, setOpenItemId] = useState<number | null>(1);
    const [isArrowOpen, setIsArrowOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const accItems = useAppSelector((state: { accordion: { accordionData: AccordionItemInterface[] } }) => state.accordion.accordionData);

      useEffect(() => {
      // dispatch(fetchAccordionData({ imageName: 'main-about2',bigImageName:'main-about1' }));
      dispatch(getAccordionThunk());
    }, [dispatch]);

    const handleToggle = (id: number) => {
        setOpenItemId(openItemId === id ? null : id);
        setIsArrowOpen(!isArrowOpen);
      };

  return (
    <ul className='accordion__list'>
      {accItems.map((item,index) => (
        <AccordionItem key={item.id} item={item} index={index} isOpen={openItemId === item.id} 
        onToggle={() => handleToggle(item.id)}
        nextItemOpen={openItemId === accItems[index + 1]?.id}
          />
      ))}
    </ul>
  );
};

export default Accordion;