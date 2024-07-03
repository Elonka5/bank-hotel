import Icon from "../../Icon/Icon";
import Accordion from "../Accordion/Accordion";
import ResponsiveImage from "../../ResponsiveImg/ResponsiveImg";

const Facilities = () => {
  return (
    <section className="facilities container">
        <div className="facilities__wrapper">
         <div className="facilities__wrapper--left">
            <p className="text">Art & Congress hall</p>
            <div>
            <ResponsiveImage alt="restaurant-image" srcImg="main-facilities2"/>
            </div>
         </div>
         <div className="facilities__wrapper--middle">
            <h2 className="facilities__title">Our<br/>faci<br/><span><Icon className="star" width={70} height={70} iconId="star-8" />lities</span></h2>
            <p className="facilities__description">Bank Hotel offers you a wide range of additional services and facilities. Visit our restaurant to try exclusive meals, book a conference hall to organize a business meeting, or relax in the art-bar. </p>
         </div>
         <div className="facilities__wrapper--right">
          <Icon className="label" iconId="label-second" width={190} height={190}/>
         <div>
         <ResponsiveImage alt="restaurant-image" srcImg="main-facilities1"/>
            </div>
         </div>
        </div>
        <Accordion/>
    </section>
  )
}

export default Facilities