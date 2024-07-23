import React from "react";
import ButtonPoly from "../../../ButtonPoly/ButtonPoly";
import { AccordionItemProps } from "./AccordionItem";
import ResponsiveFetchImg from "../../../ResponsiveImg/ResponsiveFetchImg";

const OpenAccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index,
  isOpen,
  onToggle,
}) => {

  const { fullText, bigImageResolutions, title } = item;

  return (
    <>
      <div className="accordion__openwrapper--left">
        <ButtonPoly
          className={`btnPoly ${isOpen ? "open" : "closed"}`}
          onClick={onToggle}
          iconWidth={170}
          iconHeight={170}
          iconArrow={`arrow-size ${isOpen ? "open" : "closed"}`}
          iconArrowId="arrow"
          iconPolygonId="polygon-green-stroke"
        />
      </div>
      <div className="accordion__openwrapper--middle">
        <p className="accordion__text">0{index + 1}</p>
        <p className="accordion__text">
          <span>{title?.[0]}</span> <br /> {title?.[1]}
        </p>
        <p className="accordion__full-description">{fullText}</p>
      </div>
      <div className="accordion__openwrapper--right">
        {bigImageResolutions && <ResponsiveFetchImg nameImg={bigImageResolutions} alt="Accordion thumbnail" />}
      </div>
    </>
  );
};

export default OpenAccordionItem;