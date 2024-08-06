import { useEffect } from "react";
import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Gallery from "../components/MainPage/Gallery/Gallery";
import Facilities from "../components/MainPage/Facilities/Facilities";
import Hero from "../components/MainPage/Hero/Hero";
import RoomsApartments from "../components/MainPage/RoomsApartments/RoomsApartments";

import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.substring(1);
    if (sectionId !== "home") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero id="home" />
      <AboutUs id="about" />
      <section className="whitesection">
        <RoomsApartments />
        <Facilities id="facilities" />
      </section>
      <Gallery />
    </main>
  );
};

export default MainPage;
