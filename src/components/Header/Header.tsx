import { Link, NavLink, useLocation, Location } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../scss/layout/_header.scss";
import Icon from "../Icon/Icon.tsx";
import MobileMenu from "./MobileMenu.tsx";
import { navLinks } from "../../helpers/navLinks.ts";
import { NavLinkType } from "../../entities/navLinkTypes.ts";
import { useAfterLoad } from "../../helpers/useAfterLoad.ts";
import useHandleActiveLinks from "../../helpers/useHandleActiveLinks.ts";
import useTopVisible from "../../helpers/useTopVisible.ts";

const Header: React.FC = () => {
  const isNotDesktop = useMediaQuery({ maxWidth: 1439.98 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const isPageLoaded = useAfterLoad();
  const isTopVisible = useTopVisible();

  const location: Location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      if (!isNotDesktop) {
        setMenuOpen(false);
      }
      document.body.classList.add("no-scroll");
    }
    if (!menuOpen) {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen, isNotDesktop]);

  const handleToggleMenu = () => {
    menuOpen ? setIsManualScroll(true) : setIsManualScroll(false);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (!isPageLoaded) return;
    const btnScroll = document.querySelector<HTMLButtonElement>(".scrollToTop");
    if (!btnScroll) return;

    const handleToTopClick = () => {
      setIsManualScroll(true);
    };

    if (btnScroll) {
      btnScroll.addEventListener("click", handleToTopClick);
    }

    if (isTopVisible) {
      setIsManualScroll(false);
    }
    return () => {
      btnScroll.removeEventListener("click", handleToTopClick);
    };
  }, [isTopVisible, isPageLoaded]);

  useEffect(() => {
    if (!isPageLoaded) return;
    const sections = document.querySelectorAll<HTMLElement>(".section-observe");
    const links = document.querySelectorAll<HTMLAnchorElement>(
      ".nav--list__link, .nav--list--mobile__link"
    );

    const cb: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const intersectionRatio = isNotDesktop ? 0.5 : 0.5;
        if (
          entry.isIntersecting &&
          entry.intersectionRatio > intersectionRatio
        ) {
          setActiveId(entry.target.id);

          links.forEach((link) =>
            link.text.toLowerCase() !== activeId
              ? link.classList.remove("active")
              : null
          );
        }
      });
    };

    const options = {
      // rootMargin: "0px 0px 0px -50px",
      threshold: isNotDesktop ? 0.8 : [0, 0.2, 0.5, 1],
    };

    const sectionObserver = new IntersectionObserver(cb, options);

    if (sections.length > 1) {
      sections.forEach((section) => sectionObserver.observe(section));
    }

    return () => {
      sectionObserver.disconnect();
    };
  }, [isManualScroll, isPageLoaded, isNotDesktop, activeId]);

  useHandleActiveLinks(activeId, location, isManualScroll);

  const handleLinkClick = () => {
    setIsManualScroll(true);
    setTimeout(() => setIsManualScroll(false), 1000);
  };

  return (
    <header className="header">
      <div
        className="container header--container"
        style={
          menuOpen
            ? { backgroundColor: "var(--primary-color-100)" }
            : { backgroundColor: "transparent" }
        }
      >
        <NavLink
          className="header--container__logo"
          to="/#home"
          onClick={() => setMenuOpen(false)}
        >
          BankHotel
        </NavLink>
        {!isNotDesktop ? (
          <>
            <nav>
              <ul className="nav--list">
                {navLinks.map(({ id, value, to }: NavLinkType) => (
                  <li key={id}>
                    <Link
                      className="nav--list__link"
                      to={to}
                      onClick={handleLinkClick}
                    >
                      {value}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <address>
              <a className="header--phone" href="tel:+380322975020">
                +38 032 297 50 20
              </a>
            </address>
          </>
        ) : (
          <div>
            <button
              className="menu__toggle--button"
              type="button"
              onClick={handleToggleMenu}
            >
              {!menuOpen ? (
                <Icon width={40} height={30} iconId="menu-burger" />
              ) : (
                <Icon width={30} height={30} iconId="menu-close" />
              )}
            </button>
          </div>
        )}
      </div>

      {isNotDesktop && (
        <MobileMenu menuOpen={menuOpen} onClick={handleToggleMenu} />
      )}
    </header>
  );
};

export default Header;
