import img1 from "../assets/images/mainImages/desktop1920/main-facilities3-desktop-1920.webp"
import img2 from "../assets/images/mainImages/desktop1920/main-facilities4-desktop-1920.webp"
import img3 from "../assets/images/mainImages/desktop1920/main-facilities5-desktop-1920.webp"
import bigimg2 from "../assets/images/mainImages/desktop1920/main-facilities4-big-desktop-1920.webp"
import bigimg3 from "../assets/images/mainImages/desktop1920/main-facilities5-big-desktop-1920.webp"
import { AccordionItemProps } from "../components/MainPage/Accordion/AccordionItem/AccordionItem"


export const items: AccordionItemProps['item'][] = [
  {
    id: 1,
    image: img1,
    bigImg:img1,
    title:["Ice","Restaurant"],
    fullText: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
    isItemOpen: true,
  },
  {
    id: 2,
    image: img2,
    bigImg:bigimg2,
    title:["Conference","Hall"],
    fullText: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
    isItemOpen: false,
  },
  {
    id: 3,
    image: img3,
    bigImg:bigimg3,
    title:["Wine bar","“Reserve”"],
    fullText: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
    isItemOpen: false,
  }
];