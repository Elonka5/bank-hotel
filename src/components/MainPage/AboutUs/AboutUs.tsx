import { NavProps } from "../../../entities/navprops";
import ButtonPoly from "../../ButtonPoly/ButtonPoly";
import Icon from "../../Icon/Icon";
import ResponsiveImage from "../../ResponsiveImg/ResponsiveImg";

const AboutUs: React.FC<NavProps> = ({ id }) => {
  return (
    <section className="aboutus container" id={id}>
      <div className="line-container"></div>
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
          <p className="aboutus__leftwrapper--textdescr">
            The five-star Bank Hotel was reopened to visitors in 2016. The
            building was renovated and modernized to meet the expectations of
            the most demanding guests. We offer luxurious rooms, numerous
            facilities, and exceptional service.{" "}
          </p>
        </div>
      </div>
      <div className="aboutus__rightwrapper">
        <Icon className="polygon" width={144} height={147} iconId="label" />
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
    </section>
  );
};

export default AboutUs;
