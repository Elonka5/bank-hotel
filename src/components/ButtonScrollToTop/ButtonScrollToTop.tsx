import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";

const ButtonScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 330) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`scrollToTop ${isVisible ? "visible" : ""}`}
        type="button"
        title="Scroll to top"
        onClick={scrollToTop}
      >
        <Icon iconId="scroll-to-top" />
      </button>
    </>
  );
};

export default ButtonScrollToTop;
