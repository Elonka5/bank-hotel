import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Gallery from "../components/MainPage/Gallery/Gallery";
import Facilities from "../components/MainPage/Facilities/Facilities";
import Hero from "../components/MainPage/Hero/Hero";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import RoomsApartments from "../components/MainPage/RoomsApartments/RoomsApartments";

const MainPage = () => {
  const location = useLocation();

  // useEffect(() => {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;

  //   const hash = location.hash.substring(1);
  //   if (hash) {
  //     const element = document.getElementById(hash);
  //     if (element) element.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const hash = location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    };
    handleScroll();
  }, [location]);

  return (
    <main>
      <div id="/">
        <Hero />
        <AboutUs id="about" />
      </div>
      <div className="whitesection" id="facilities">
        <RoomsApartments />
        <Facilities />
      </div>
      <Gallery />
    </main>
  );
};

export default MainPage;
