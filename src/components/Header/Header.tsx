import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../scss/layout/_header.scss";
import Icon from "../Icon/Icon.tsx";
import MobileMenu from "./MobileMenu.tsx";
import { useActiveSection } from "../../helpers/useActiveSection.ts";
import { HashLink } from "react-router-hash-link";

const Header: React.FC = () => {
  const isNotDesktop = useMediaQuery({ maxWidth: 1439.98 });
  const [menuOpen, setMenuOpen] = useState(false);
  // const [activeSection, setActiveSection] = useState("home");
  // const [activeSection, setActiveSection] = useState<string | null>(null);
  // const [activeSection, setActiveSection] = useState(null);
  const { activeSection } = useActiveSection();
  // const { sectionRef, linkRef } = useContext(ActiveSectionContext);
  console.log("myAAAActiveSection", activeSection);
  // console.log(linkRef);

  const location = useLocation();

  // === change header color when scrolling ====
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 104) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  // ============================================

  const isActive = (path: string) => {
    const sectionPath = path.split(" ")[1];
    return sectionPath
      ? activeSection === sectionPath
      : location.pathname + location.hash === path;
  };

  // console.log(activeSection);

  // ==================================================
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
  // ------------------------------------------------------

  return (
    <header className={color ? "header header-bg" : "header"}>
      <div className="container header--container">
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
                <li>
                  <HashLink
                    // className="nav--list__link"
                    // className={`nav--list__link
                    // ${activeSection === to.split(" ")[1] ? "active" : ""}
                    // `}
                    className={`nav--list__link
                        ${isActive("/#home") || activeSection ? "active" : ""}
                        `}
                    // className={`nav--list__link
                    //     ${
                    //       activeSection === "/#home".split(" ")[1]
                    //         ? "active"
                    //         : ""
                    //     }
                    //     `}
                    scroll={(el: HTMLElement) =>
                      el.scrollIntoView({ behavior: "smooth", block: "end" })
                    }
                    // ref={linkRef}
                    smooth={true}
                    offset={-460}
                    duration={300}
                    // activeClass="active"
                    to="/#home"
                  >
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className={`nav--list__link
                        ${isActive("/#about") || activeSection ? "active" : ""}
                        `}
                    scroll={(el: HTMLElement) =>
                      el.scrollIntoView({ behavior: "auto", block: "end" })
                    }
                    // ref={linkRef}
                    smooth={true}
                    offset={-480}
                    duration={300}
                    to="/#about"
                  >
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className={`nav--list__link
                        ${isActive("/rooms") ? "active" : ""}
                        `}
                    to="/rooms"
                  >
                    Rooms
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className={`nav--list__link
                        ${isActive("/restaurant") ? "active" : ""}
                        `}
                    to="/restaurant"
                  >
                    Restaurant
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className={`nav--list__link
                        ${
                          isActive("/#facilities") || activeSection
                            ? "active"
                            : ""
                        }
                        `}
                    scroll={(el: HTMLElement) =>
                      el.scrollIntoView({ behavior: "auto", block: "start" })
                    }
                    // ref={linkRef}
                    smooth={true}
                    offset={-80}
                    duration={300}
                    // activeClass="active"
                    to="/#facilities"
                  >
                    Facilities
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className={`nav--list__link
                        ${
                          isActive("/#contacts") || activeSection
                            ? "active"
                            : ""
                        }
                        `}
                    scroll={(el: HTMLElement) =>
                      el.scrollIntoView({ behavior: "auto", block: "start" })
                    }
                    // ref={linkRef}
                    smooth={true}
                    offset={6}
                    duration={300}
                    // activeClass="active"
                    to="/#contacts"
                  >
                    Contacts
                  </HashLink>
                </li>
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

// {
//   navSections.map(({ id, value, to }: NavLinkType) => (
//     <li key={id}>
//       {/* className={activeSection === to ? "active" : ""} */}
//       <Link
//         className={`nav--list__link
//                       ${isActive(to) ? "active" : ""}
//                       `}
//         // className={`nav--list__link
//         // ${activeSection === to.split(" ")[1] ? "active" : ""}
//         // `}
//         spy={true}
//         smooth={true}
//         offset={50}
//         duration={500}
//         to={to}
//       >
//         {value}
//       </Link>
//     </li>
//   ));
// }
// {
//   navLinks.map(({ id, value, to }: NavLinkType) => (
//     <li key={id}>
//       {/* className={activeSection === to ? "active" : ""} */}
//       <NavLink
//         className="nav--list__link"
//         // className={`nav--list__link
//         // ${isActive(to) ? "active" : ""}
//         // `}
//         // className={`nav--list__link
//         // ${activeSection === to.split(" ")[1] ? "active" : ""}
//         // `}
//         to={to}
//       >
//         {value}
//       </NavLink>
//     </li>
//   ));
// }

// =========================================================
// =========================================================
// =========================================================

// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import "../../scss/layout/_header.scss";
// import { navLinks } from "../../helpers/navLinks.ts";
// import Icon from "../Icon/Icon.tsx";
// import { NavLinkType } from "../../entities/navLinkTypes.ts";
// import MobileMenu from "./MobileMenu.tsx";
// import { useActiveSection } from "../../helpers/useActiveSection.ts";

// const Header: React.FC = () => {
//   const isNotDesktop = useMediaQuery({ maxWidth: 1439.98 });
//   const [menuOpen, setMenuOpen] = useState(false);
//   // const [activeSection, setActiveSection] = useState("home");
//   // const [activeSection, setActiveSection] = useState<string | null>(null);
//   // const [activeSection, setActiveSection] = useState(null);
//   const { activeSection, setActiveSection } = useActiveSection();

//   // === change haeder color when scrolling ====
//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 90) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };
//   window.addEventListener("scroll", changeColor);
//   // ============================================

//   const location = useLocation();
//   // const observer = useRef<IntersectionObserver | null>(null);

//   const isActive = (path: string) => {
//     const sectionPath = path.split(" ")[1];
//     return sectionPath
//       ? activeSection === sectionPath
//       : location.pathname + location.hash === path;
//   };

//   // useEffect(() => {
//   //   observer.current = new IntersectionObserver((entries) => {
//   //     const visibleSection = entries.find((entry) => entry.isIntersecting)
//   //       ?.target as HTMLElement;

//   //     if (visibleSection) {
//   //       setActiveSection(visibleSection.id);
//   //     }
//   //   });

//   //   const sections = document.querySelectorAll("[data-section]");

//   //   sections.forEach((section) => {
//   //     if (observer.current) {
//   //       observer.current.observe(section);
//   //     }
//   //   });
//   //   return () => {
//   //     if (observer.current) {
//   //       sections.forEach((section) => {
//   //         observer.current?.unobserve(section);
//   //       });
//   //     }
//   //   };
//   // }, []);

//   // ========================

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.classList.add("no-scroll");
//     }
//     if (!menuOpen) {
//       document.body.classList.remove("no-scroll");
//     }
//   }, [menuOpen]);

//   const handleToggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className={color ? "header header-bg" : "header"}>
//       <div className="container header--container">
//         <Link
//           className="header--container__logo"
//           to="/#home"
//           onClick={() => setMenuOpen(false)}
//         >
//           BankHotel
//         </Link>
//         {!isNotDesktop ? (
//           <>
//             <nav>
//               <ul className="nav--list">
//                 {navLinks.map(({ id, value, to }: NavLinkType) => (
//                   <li key={id}>
//                     {/* className={activeSection === to ? "active" : ""} */}
//                     <Link
//                       className={`nav--list__link
//                       ${isActive(to) ? "active" : ""}
//                       `}
//                       // className={`nav--list__link
//                       // ${activeSection === to.split(" ")[1] ? "active" : ""}
//                       // `}

//                       to={to}
//                       // onClick={() => setActiveSection(to.split("#")[1])}
//                       // onClick={() => setActiveSection(to)}
//                       // onClick={() => setActiveSection(linkSectionId)}
//                     >
//                       {value}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//             <address>
//               <a className="header--phone" href="tel:+380322975020">
//                 +38 032 297 50 20
//               </a>
//             </address>
//           </>
//         ) : (
//           <div>
//             <button
//               className="menu__toggle--button"
//               type="button"
//               onClick={handleToggleMenu}
//             >
//               {!menuOpen ? (
//                 <Icon width={40} height={30} iconId="menu-burger" />
//               ) : (
//                 <Icon width={30} height={30} iconId="menu-close" />
//               )}
//             </button>
//           </div>
//         )}
//       </div>

//       {isNotDesktop && (
//         <MobileMenu
//           menuOpen={menuOpen}
//           onClick={handleToggleMenu}
//           isActive={isActive}
//         />
//       )}
//     </header>
//   );
// };

// export default Header;
