import "../../scss/layout/_getInTouch.scss";
import Icon from "../Icon/Icon";
import { NavProps } from "../../entities/navprops";
import { useMediaQuery } from "react-responsive";
import ButtonPoly from "../ButtonPoly/ButtonPoly";
import BookingRoomFormDatePicker from "../BookingRoomForm/BookingRoomFormDatePicker";
import styles from "../DatePickerComponent/DatePicker.module.scss";
import ResponsiveImage from "../ResponsiveImg/ResponsiveImg";
import React, { useState } from "react";
import {
  handleAnimationEnd,
  handleClick,
} from "../../helpers/animationHandleForm";

const GetInTouch: React.FC<NavProps> = ({ id }) => {
  const isDesktopLg = useMediaQuery({ minWidth: 1919.98 });
  const isMobileSm = useMediaQuery({ maxWidth: 767.98 });

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <section className="section section-observe" id={id}>
      <div className="container touch__container">
        <a className="touch__container--phone" href="tel:+380322975020">
          +38 032 297 50 20
        </a>

        {!isMobileSm && (
          <div className="touch__container--icon-wave--wrapper">
            {isDesktopLg ? (
              <Icon className="icon-wave" iconId="wave-Lg" />
            ) : (
              <Icon className="icon-wave" iconId="wave-maxLg" />
            )}
          </div>
        )}

        <div className="touch__wrapper">
          <h2 className="touch__wrapper--title">
            Get in
            <Icon className="icon--star" iconId="star-16" />
            <span className="second-title-part">touch</span>
          </h2>
          {isMobileSm && (
            <>
              <ButtonPoly
                className="btnPoly booking intouch"
                iconWidth={120}
                iconHeight={120}
                iconPolygonId="polygon-fill"
                onClick={() =>
                  handleClick(isOpen, setIsOpen, setIsClosing, setIsOpenForm)
                }
              >
                <span>Book room</span>
              </ButtonPoly>
              {isOpenForm && (
                <BookingRoomFormDatePicker
                  className={`mobile ${
                    isOpen ? "open" : isClosing ? "close" : null
                  } touchDPForm`}
                  onAnimationEnd={(event) =>
                    handleAnimationEnd(
                      event,
                      isClosing,
                      setIsOpen,
                      setIsClosing
                    )
                  }
                  touchClassName={styles.mobile}
                />
              )}
            </>
          )}
          <div className="touch__address--img--wrapper">
            <div className="address--wrapper">
              <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9B%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE+%D0%A7%D0%B8%D0%BD%D0%B0,+8,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8409133,24.0207693,19.12z/data=!4m6!3m5!1s0x473add71698ec493:0x7100c9b2c7b810d4!8m2!3d49.8409357!4d24.0209772!16s%2Fg%2F11bw4hghr9?authuser=0&entry=ttu"
              >
                8 Lystopadovoho Chynu, Lviv
              </a>
            </div>
            <div className="touch__img--wrapper">
              <ResponsiveImage
                alt="Room interior"
                srcImg="touch"
                path="touch"
              />
            </div>
          </div>
        </div>
        {!isMobileSm && (
          <div className="touch__form--wrapper">
            <h3 className="touch__form--wrapper--title">Find a room</h3>
            <BookingRoomFormDatePicker
              className="touch"
              touchClassName={styles.touch}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GetInTouch;
