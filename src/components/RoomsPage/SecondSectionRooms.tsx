import Icon from "../Icon/Icon";
import ResponsiveImage from "../ResponsiveImg/ResponsiveImg";

const SecondSectionRooms = () => {
  return (
    <section className="second-rooms">
      <div className="second-rooms__wave-wrapper">
        <Icon iconId="wave-room-page-1" className="icon-wave" />
      </div>
      <div className="second-rooms__room">
        <p className="title">Premier Standard</p>
        <div className="image-wrapper">
          <ResponsiveImage alt="" srcImg="rooms-superiortwin" path="rooms" />
        </div>
      </div>
    </section>
  );
};

export default SecondSectionRooms;
