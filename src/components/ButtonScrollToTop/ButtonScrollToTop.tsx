import { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import { useMediaQuery } from "react-responsive";

const ButtonScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const refBtn = useRef<HTMLButtonElement>(null);
  const isNotDesktop = useMediaQuery({ maxWidth: 1439.98 });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 330);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (refBtn.current && !refBtn.current.contains(e.target as Node)) {
      setIsOpened(false);
      setClickCount(0);
      refBtn.current.classList.remove("opened");
    }
  };

  const handleClickBtnToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isNotDesktop) {
      return window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    e.stopPropagation(); // Запобігає виклику handleClickOutside

    if (clickCount === 0) {
      setClickCount(1);
      setIsOpened(true);
      refBtn.current?.classList.add("opened");
    } else {
      setClickCount(0);
      setIsOpened(false);
      refBtn.current?.classList.remove("opened");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <button
        className={`scrollToTop ${isVisible ? "visible" : ""}`}
        type="button"
        title="Scroll to top"
        onClick={handleClickBtnToTop}
        ref={refBtn}
      >
        {!isOpened && (
          <Icon iconId="scroll-to-top" ariaLabel="scroll-to-top" />
        )}
        {isOpened && "Click To Top"}
      </button>
    </>
  );
};

export default ButtonScrollToTop;
