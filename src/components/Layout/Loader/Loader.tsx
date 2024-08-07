import { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    // Очищення таймера при демонтажі компонента
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader__backdrop">
      <div className={`container_loader ${isVisible ? "" : "fade-out"}`}>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
