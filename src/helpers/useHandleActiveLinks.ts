import { useEffect, useRef } from "react";
import { useNavigate, Location } from "react-router-dom";

const useHandleActiveLinks = (
  activeId: string | null,
  location: Location,
  scrollState: boolean
) => {
  const navigate = useNavigate();
  const viewportWidth = window.innerWidth;
  const isHandlingRef = useRef(false);

  useEffect(() => {
    if (!activeId || scrollState || isHandlingRef.current) return;

    isHandlingRef.current = true;

    const findActiveLink = (className: string) => {
      return Array.from(
        document.querySelectorAll<HTMLAnchorElement>(className)
      ).find((link) => {
        const href = link.getAttribute("href");
        return href === `/${activeId}` || href === `/#${activeId}`;
      });
    };

    const activeLink = findActiveLink(".nav--list__link");
    const activeLinkMobile = findActiveLink(".nav--list--mobile__link");

    if (viewportWidth > 1439.98) {
      if (activeLink) {
        activeLink.classList.add("active");
      }
    } else if (activeLinkMobile) {
      activeLinkMobile.classList.add("active");
    }

    if (location.hash.includes("#") && location.hash !== `#${activeId}`) {
      navigate(`#${activeId}`, { replace: true });
    }

    if (location.pathname === "/" && location.hash !== `#${activeId}`) {
      navigate(`#${activeId}`, { replace: true });
    }

    isHandlingRef.current = false;
  }, [activeId, location, navigate, viewportWidth, scrollState]);
};

export default useHandleActiveLinks;
