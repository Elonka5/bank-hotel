import { NavLink } from "react-router-dom";
import "../../scss/layout/_header.scss";
import { navLinks } from "../../data/navLinks.ts";
import { useMediaQuery } from "react-responsive";
import Icon from "../Icon/Icon.tsx";

type NavLinkType = {
  id: number;
  value: string;
  to: string;
};

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <header>
      <div className="container header__container">
        <NavLink to="/" className="logo">
          BankHotel
        </NavLink>
        {isMobile ? (
          <Icon width={40} height={10} iconId="menu" />
        ) : (
          <>
            <nav>
              <ul className="nav--links">
                {navLinks.map(({ id, value, to }: NavLinkType) => (
                  <li key={id}>
                    <NavLink className="item" to={to}>
                      {value}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <address>
              <a className="phone" href="tel:+380322975020">
                +38 032 297 50 20
              </a>
            </address>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
