import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../scss/layout/_header.scss";
import Icon from "../Icon/Icon.tsx";
import MobileMenu from "./MobileMenu.tsx";
import { useActiveSection } from "../../helpers/useActiveSection.ts";
import { navLinks } from "../../helpers/navLinks.ts";
import { NavLinkType } from "../../entities/navLinkTypes.ts";

const Header: React.FC = () => {
  const isNotDesktop = useMediaQuery({ maxWidth: 1439.98 });
  const [menuOpen, setMenuOpen] = useState(false);
  // const [activeSection, setActiveSection] = useState<string | null>(null);
  const { activeSection } = useActiveSection();
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    }
    if (!menuOpen) {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path: string) => {
    const sectionPath = path.split(" ")[1];
    return sectionPath
      ? activeSection === sectionPath
      : location.pathname + location.hash === path;
  };

  // window.addEventListener("scroll", changeColor);
  // ------------------------------------------------------

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
                      className={`nav--list__link
                      ${isActive(to) ? "active" : ""}
                      `}
                      to={to}
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
          isActive={isActive}
        />
      )}
    </header>
  );
};

export default Header;
