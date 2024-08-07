import React from "react";
import ButtonPoly from "../../../ButtonPoly/ButtonPoly";
import { AccordionItemProps } from "./AccordionItem";
import ResponsiveFetchImg from "../../../ResponsiveImg/ResponsiveFetchImg";
import { useMediaQuery } from "react-responsive";

const OpenAccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index,
  isOpen,
  onToggle,
}) => {
  const isTablet = useMediaQuery({ minWidth: 767.99, maxWidth: 1439.98 });
  const isMobile = useMediaQuery({ maxWidth: 767.98 });
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
        {!isMobile ? (
          <>
            <h3 className="accordion__text--title">
              <span>{title?.[0]}</span> <br /> {title?.[1]}
            </h3>
            <p className="accordion__full--description">{fullText}</p>
          </>
        ) : (
          <div>
            {" "}
            <h3 className="accordion__text--title">
              <span>{title?.[0]}</span> <br /> {title?.[1]}
            </h3>
            <p className="accordion__full--description">{fullText}</p>
          </div>
        )}
      </div>
      <div className="accordion__openwrapper--right">
        {bigImageResolutions && (
          <ResponsiveFetchImg
            nameImg={bigImageResolutions}
            alt="Accordion thumbnail"
          />
        )}
        {isTablet && (
          <p className="text">
            Art & Congress <span className="text--hall">hall</span>
          </p>
        )}
      </div>
    </>
  );
};

export default OpenAccordionItem;
