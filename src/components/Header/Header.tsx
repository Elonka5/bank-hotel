import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../scss/layout/_header.scss";
import Icon from "../Icon/Icon.tsx";
import MobileMenu from "./MobileMenu.tsx";
import { navLinks } from "../../helpers/navLinks.ts";
import { NavLinkType } from "../../entities/navLinkTypes.ts";
import { useAfterLoad } from "../../helpers/useAfterLoad.ts";

const Header: React.FC = () => {
  const isNotDesktop = useMediaQuery({ maxWidth: 1439.98 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const isPageLoaded = useAfterLoad();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    }
    if (!menuOpen) {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleToggleMenu = () => {
    handleLinkClick();
    setMenuOpen(!menuOpen);
  };

  const viewportWidth = window.innerWidth;

  useEffect(() => {
    if (!isPageLoaded) return;
    const sections = document.querySelectorAll<HTMLElement>(".section-observe");
    const links = document.querySelectorAll<HTMLAnchorElement>(
      ".nav--list__link, .nav--list--mobile__link"
    );
    const btnScroll = document.querySelector<HTMLButtonElement>(".scrollToTop");

    if (btnScroll) {
      btnScroll.addEventListener("click", handleLinkClick);
    }
    console.log(sections);
    console.log(links);
    console.log(viewportWidth);
    const cb: IntersectionObserverCallback = (entries) => {
      if (isManualScroll) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          links.forEach((link) => link.classList.remove("active"));

          const activeId = entry.target.id;
          // const activeLink = document.querySelector<HTMLAnchorElement>(
          //   `.nav--list__link[href="/#${activeId}"]`
          // );
          console.log(activeId);
          const activeLink = Array.from(
            document.querySelectorAll<HTMLAnchorElement>(
              ".nav--list__link"
              // ".nav--list__link, .nav--list--mobile__link"
            )
          ).find((link) => {
            const href = link.getAttribute("href");
            return href === `/${activeId}` || href === `/#${activeId}`;
          });

          const activeLinkMobile = Array.from(
            document.querySelectorAll<HTMLAnchorElement>(
              ".nav--list--mobile__link"
            )
          ).find((link) => {
            const href = link.getAttribute("href");
            return href === `/${activeId}` || href === `/#${activeId}`;
          });

          if (viewportWidth > 1439.98) {
            if (activeLink) {
              activeLink.classList.add("active");
            }
            console.log(activeLink);
          } else if (activeLinkMobile) {
            activeLinkMobile.classList.add("active");
          }

          if (location.hash.includes("#") && location.hash !== `#${activeId}`) {
            navigate(`#${activeId}`, { replace: true });
          }

          if (location.pathname === "/" && location.hash !== `#${activeId}`) {
            navigate(`#${activeId}`, { replace: true });
          }
        }
      });
    };

    const options = {
      threshold: isNotDesktop ? [0.8, 1] : [0, 0.2, 0.5, 1],
    };

    const sectionObserver = new IntersectionObserver(cb, options);

    if (sections.length > 1) {
      sections.forEach((section) => sectionObserver.observe(section));
    }

    return () => {
      sectionObserver.disconnect();
      btnScroll?.removeEventListener("click", handleLinkClick);
    };
  }, [
    location.hash,
    location.pathname,
    navigate,
    isManualScroll,
    isPageLoaded,
    viewportWidth,
    isNotDesktop,
  ]);

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
        <MobileMenu
          menuOpen={menuOpen}
          onClick={handleToggleMenu}
          // isActive={isActive}
        />
      )}
    </header>
  );
};

export default Header;
