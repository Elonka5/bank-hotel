import "../../scss/layout/_getInTouch.scss";
import mgTouch_1920 from "../../assets/images/getInTouchImages/touch-desktop-1920.webp";
import Icon from "../Icon/Icon";
import BookingRoomForm from "../BookingRoomForm/BookingRoomForm";
import { NavProps } from "../../entities/navprops";
import { useMediaQuery } from "react-responsive";

const GetInTouch: React.FC<NavProps> = ({ id }) => {
  const isLg = useMediaQuery({ minWidth: 1920 });

  return (
    <section className="section" id={id}>
      <div className="container touch__container">
        <a className="touch__container--phone" href="tel:+380322975020">
          +38 032 297 50 20
        </a>

        <div className="touch__container--icon-wave--wrapper">
          {/* <Icon className="icon-wave" iconId="line" /> */}
          {isLg ? (
            <Icon className="icon-wave" iconId="wave-Lg" />
          ) : (
            <Icon className="icon-wave" iconId="wave-maxLg" />
          )}
        </div>
        <div className="touch__wrapper">
          <h2 className="touch__wrapper--title">
            Get in
            <Icon className="icon--star" iconId="star-16" />
            <span className="second-title-part">touch</span>
          </h2>

          <div className="info--wrapper">
            {/* <Icon
              className="icon--star"
              width={150}
              height={150}
              iconId="star-16"
            /> */}
            <div>
              <div className="address--info">
                <a
                  // className="address--info"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9B%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE+%D0%A7%D0%B8%D0%BD%D0%B0,+8,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8409133,24.0207693,19.12z/data=!4m6!3m5!1s0x473add71698ec493:0x7100c9b2c7b810d4!8m2!3d49.8409357!4d24.0209772!16s%2Fg%2F11bw4hghr9?authuser=0&entry=ttu"
                >
                  8 Lystopadovoho Chynu, Lviv
                </a>
              </div>
              {/* <div className="wrapper__star--img"> */}
              <div className="touch__img--wrapper">
                <img className="touch__img" src={mgTouch_1920} />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="touch__form--wrapper">
          <h3 className="touch__form--wrapper--title">Find a room</h3>
          <BookingRoomForm className="touch" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
