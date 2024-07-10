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
  // const { fullText, bigImg, title } = item;

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
        {/* <img src={bigImg} alt="Big thumbnail" /> */}
        {/* <picture>
          <source srcSet={bigImg['img-1920']} media="(min-width: 1920px)" />
          <source srcSet={bigImg['img-1440']} media='(min-width: 1439.99px) and (max-width: 1919.98px)' />
          <source srcSet={bigImg['img-1024']} media="(min-width: 1024px)" />
          <img src={bigImg['img-1920']} alt="Accordion thumbnail" width="100%" />
        </picture> */}
        {/* <ResponsiveFetchImg nameImg={bigImg} alt="Accordion thumbnail" /> */}
        {bigImageResolutions && <ResponsiveFetchImg nameImg={bigImageResolutions} alt="Accordion thumbnail" />}
      </div>
    </>
  );
};

export default OpenAccordionItem;