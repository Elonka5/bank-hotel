import { useMediaQuery } from "react-responsive";
import Icon from "../Icon/Icon";
import ResponsiveImage from "../ResponsiveImg/ResponsiveImg";

const RoomEquipment = () => {
  const isMobileSm = useMediaQuery({ maxWidth: 767.98 });

  return (
    <section className="section">
      <div className="container roomEqpt-wrapper">
        <div className="roomEqpt-wrapper__lef-part">
          {!isMobileSm && (
            <Icon className="roomEqpt-label" iconId="label-roomEqpt" ariaLabel="label" />
          )}
          <div className="roomEqpt__img--wrapper1">
            <ResponsiveImage
              alt="Bathroom"
              srcImg="rooms-superiortwin1"
              path="rooms"
            />
          </div>
          <h2 className="roomEqpt-title">Superior twin</h2>
          <p className="roomEqpt__allRooms-descr">
            All rooms in Bank Hotel have a special charm achieved through a
            combination of modern functional design and original 20th century
            layout.
          </p>
          {!isMobileSm && (
            <button className="roomEqpt__bookBtn" type="button">
              /Book room
            </button>
          )}
        </div>

        <div className="roomEqpt-wrapper__right-part">
          <div className="roomEqpt__img--wrapper2">
            <ResponsiveImage
              alt="Shower room"
              srcImg="rooms-superiortwin2"
              path="rooms"
            />
          </div>
          {isMobileSm && (
            <Icon className="roomEqpt-label" iconId="label-roomEqpt" ariaLabel="label" />
          )}
          <p className="roomEqpt__room-descr">
            The Superior twin includes two functional zones: a living room with
            the best Italian furniture, and an isolated cozy bedroom with a
            large bed. Here, you will find space both for work and comfortable
            rest. Hotel offers supreme comfort and outstanding 24-hour room
            service to make sure that the time you spend here is enjoyable and
            pleasant.
          </p>

          {isMobileSm && (
            <button className="roomEqpt__bookBtn" type="button">
              /Book room
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default RoomEquipment;
