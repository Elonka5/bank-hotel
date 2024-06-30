import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Facilities from "../components/MainPage/Facilities/Facilities";
import Hero from "../components/MainPage/Hero/Hero";
import RoomsApartments from "../components/MainPage/RoomsApartments/RoomsApartments";

const MainPage = () => {
  return (
    <main>
      <div>
        <Hero />
        <AboutUs />
      </div>
      <div className="whitesection">
        <RoomsApartments />
        <Facilities />
      </div>
    </main>
  );
};

export default MainPage;
