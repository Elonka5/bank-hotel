import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Gallery from "../components/MainPage/Gallery/Gallery";
import Facilities from "../components/MainPage/Facilities/Facilities";
import Hero from "../components/MainPage/Hero/Hero";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Gallery />
    </div>
    <main>
      <div>
        <Hero />
        <AboutUs />
      </div>
      <div className="whitesection">
        <Facilities />
      </div>
    </main>
  );
};

export default MainPage;
