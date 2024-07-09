import ButtonPoly from "../../../ButtonPoly/ButtonPoly";
import ResponsiveFetchImg from "../../../ResponsiveImg/ResponsiveFetchImg";
import { AccordionItemProps } from "./AccordionItem";

const ClosedAccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index,
  isOpen,
  onToggle,
}) => {
  const { imageResolutions, title } = item;

  return (
    <>
      <div className="accordion__thumb">
        {imageResolutions && <ResponsiveFetchImg nameImg={imageResolutions} alt="Accordion thumbnail" />}
        
      </div>
      <div className="accordion__wrapper--open">
        <p className="accordion__text">0{index + 1}</p>
        <p className="accordion__text title">{title?.join(" ")}</p>
      </div>
      <div>
        <ButtonPoly
          className={`btnPoly ${isOpen ? "open" : "closed"}`}
          onClick={onToggle}
          iconWidth={44}
          iconHeight={20}
          iconArrow={`arrow-size ${isOpen ? "open" : "closed"}`}
          iconArrowId="arrow-right"
        />
      </div>
    </>
  );
};

export default ClosedAccordionItem;
