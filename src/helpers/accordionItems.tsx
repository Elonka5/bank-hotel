import { AccordionItemProps } from "../components/MainPage/Accordion/AccordionItem/AccordionItem"
import ResponsiveImage from "../components/ResponsiveImg/ResponsiveImg"

export const items: AccordionItemProps['item'][] = [
  {
    id: 1,
    image:(<ResponsiveImage alt="about-us-image" srcImg="main-facilities3" className="preview" />) ,
    bigImg:(<ResponsiveImage alt="about-us-image" srcImg="main-facilities3"/>),
    title:["Ice","Restaurant"],
    fullText: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
    isItemOpen: true,
  },
  {
    id: 2,
    image: (<ResponsiveImage alt="about-us-image" srcImg="main-facilities4" />) ,
    bigImg:(<ResponsiveImage alt="about-us-image" srcImg="main-facilities4-big"/>),
    title:["Conference","Hall"],
    fullText: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
    isItemOpen: false,
  },
  {
    id: 3,
    image: (<ResponsiveImage alt="about-us-image" srcImg="main-facilities5" />),
    bigImg:(<ResponsiveImage alt="about-us-image" srcImg="main-facilities5-big"/>),
    title:["Wine bar","“Reserve”"],
    fullText: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
    isItemOpen: false,
  }
];