import { useMediaQuery } from "react-responsive";
import { NavProps } from "../../../entities/navprops";
import ButtonPoly from "../../ButtonPoly/ButtonPoly";
import Icon from "../../Icon/Icon";
import ResponsiveImage from "../../ResponsiveImg/ResponsiveImg";

const AboutUs: React.FC<NavProps> = ({ id }) => {
  const isTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1439.99 });
  const isMobile = useMediaQuery({ maxWidth: 1023.99 });
  return (
    <section className="aboutus container" id={id}>
      <div className="line-container"></div>
      {!isMobile ? (
        <>
              <div className="aboutus__leftwrapper">
              <div className="aboutus__leftwrapper--imgwrapper">
                <ResponsiveImage alt="about-us-image" srcImg="main-about1" path="main" />
              </div>
              <div className="aboutus__leftwrapper--descr">
                <h2 className="aboutus__heading">
                  <span className="aboutus__heading--left">About</span>
                  <span className="aboutus__heading--right">Us</span>
                </h2>
                <p className="aboutus__leftwrapper--text">High quality</p>
                {!isTablet ? (
                  <p className="aboutus__leftwrapper--textdescr">
                    The five-star Bank Hotel was reopened to visitors in 2016. The
                    building was renovated and modernized to meet the expectations of
                    the most demanding guests. We offer luxurious rooms, numerous
                    facilities, and exceptional service.
                  </p>
                ) : (
                  <p className="aboutus__leftwrapper--textdescr">
                    The hotel was reopened to visitors in 2016. The building was renovated and modernized to meet the expectations of <br/> the most demanding guests. We offer luxurious rooms, numerous facilities, and exceptional service.
                  </p>
                )}
              </div>
            </div>
            <div className="aboutus__rightwrapper">
              <Icon className="label" 
              width={144} height={147} 
              iconId="label" />
              <div className="aboutus__rightwrapper--imgwrapper">
                <ResponsiveImage alt="about-us-image" srcImg="main-about2" path="main" />
              </div>
              <div className="aboutus__rightwrapper--btnwrapper">
                <ButtonPoly
                  className="btnPoly"
                  iconWidth={200}
                  iconHeight={200}
                  iconArrow="arrow75"
                  iconArrowId="arrow-up-and-down"
                  iconPolygonId="polygon"
                >
                  <p className="aboutus__btnText">
                    <span className="aboutus__btnText--secondary">Rooms</span>and{" "}
                    <br /> apartments
                  </p>
                </ButtonPoly>
              </div>
            </div>
            </>
      ):(
        <div className="aboutus__mobilecontainer">
        <div style={{display:"flex",flexDirection:"row"}}>
        <div className="aboutus__leftwrapper">
        <h2 className="aboutus__heading">
                  <span className="aboutus__heading--left">About</span>
                  <span className="aboutus__heading--right">Us</span>
                </h2>
        </div>
        <div className="aboutus__rightwrapper"></div>
        </div>
        <div className="aboutus__leftwrapper--imgwrapper">
                <ResponsiveImage alt="about-us-image" srcImg="main-about1" path="main" />
              </div>
              <div className="aboutus__mobilewrapper">
              <Icon className="label" 
              width={85} height={147} 
              iconId="label" />
              <p className="aboutus__leftwrapper--text">High quality</p>
              <p className="aboutus__leftwrapper--textdescr">
              The hotel was reopened to visitors in 2016. The building was renovated and modernized to meet the expectations of the most demanding guests. We offer luxurious rooms, numerous facilities, and exceptional service. The hotel is located near the city center, which makes it the best option for those who travel for business and travel purposes.
                  </p>
                  </div>
        </div>)}

    </section>
  );
};

export default AboutUs;
