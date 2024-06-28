import facilitiesleft from "../../../assets/images/mainImages/desktop1920/main-facilities2-desktop-1920.webp";
import facilitiesright from "../../../assets/images/mainImages/desktop1920/main-facilities1-desktop-1920.webp";
import Icon from "../../Icon/Icon";
import Accordion from "../Accordion/Accordion";

const Facilities = () => {
  return (
    <section className="facilities container">
        <div className="facilities__wrapper">
         <div className="facilities__wrapper--left">
            <p className="text">Art & Congress hall</p>
            <div>
            <img src={facilitiesleft} alt="restaurant-image" />
            </div>
         </div>
         <div className="facilities__wrapper--middle">
            <h2 className="facilities__title">Our<br/>faci<br/><span><Icon className="star" width={70} height={70} iconId="star-8" />lities</span></h2>
            <p className="facilities__description">Bank Hotel offers you a wide range of additional services and facilities. Visit our restaurant to try exclusive meals, book a conference hall to organize a business meeting, or relax in the art-bar. </p>
         </div>
         <div className="facilities__wrapper--right">
          <Icon className="label" iconId="label-second" width={190} height={190}/>
         <div>
            <img src={facilitiesright} alt="restaurant-image" />
            </div>
         </div>
        </div>
        <Accordion/>
    </section>
  )
}

export default Facilities