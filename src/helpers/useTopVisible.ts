import { useEffect, useState } from "react";

const useTopVisible = () => {
  const [isTopVisible, setIsTopVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsTopVisible(scrollTop === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isTopVisible;
};

export default useTopVisible;
