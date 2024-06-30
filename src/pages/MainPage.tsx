import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Facilities from "../components/MainPage/Facilities/Facilities";
import Hero from "../components/MainPage/Hero/Hero";
import RoomsApartments from "../components/MainPage/RoomsApartments/RoomsApartments";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <RoomsApartments />
      <Facilities />
    </div>
  );
};

export default MainPage;
