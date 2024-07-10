import "../../scss/layout/_getInTouch.scss";
import mgTouch_1920 from "../../assets/images/getInTouchImages/touch-desktop-1920.webp";
import Icon from "../Icon/Icon";
import BookingRoomForm from "../BookingRoomForm/BookingRoomForm";
import { NavProps } from "../../entities/navprops";

const GetInTouch: React.FC<NavProps> = ({ id }) => {
  return (
    <section className="section" id={id}>
      <div className="container touch__container">
        <a className="touch__container--phone" href="tel:+380322975020">
          +38 032 297 50 20
        </a>

        <Icon className="touch__container--icon-wave" iconId="line" />

        <div className="touch__wrapper">
          <h2 className="touch__wrapper--title">
            Get in <span>touch</span>
          </h2>

          <div className="info--wrapper">
            <Icon
              className="icon--star"
              width={150}
              height={150}
              iconId="star-16"
            />
            <div>
              <p className="address--info">8 Lystopadovoho Chynu, Lviv</p>
              <div className="wrapper__star--img">
                <div className="touch__img--wrapper">
                  <img className="touch__img" src={mgTouch_1920} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="touch__form--wrapper">
          <h3 className="touch__form--title">Find a room</h3>
          <BookingRoomForm className="touch" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
