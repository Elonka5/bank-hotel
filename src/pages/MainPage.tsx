import { useEffect } from "react";
import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Gallery from "../components/MainPage/Gallery/Gallery";
import Facilities from "../components/MainPage/Facilities/Facilities";
import Hero from "../components/MainPage/Hero/Hero";
import RoomsApartments from "../components/MainPage/RoomsApartments/RoomsApartments";
// import { useActiveSection } from "../helpers/useActiveSection";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
  // const { homeRef, aboutRef, facilitiesRef, getintouchRef } =
  //   useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const sectionId = location.hash.substring(1);
      if (sectionId) {
        const element = document.getElementById(sectionId);
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

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.map((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         } else if (!entry.isIntersecting) {
  //           setActiveSection(null);
  //         }
  //         console.log("EEEentry", entry);
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );
  //   const sectionRefs = [homeRef, aboutRef, facilitiesRef, getintouchRef];
  //   sectionRefs.forEach((ref) => {
  //     if (ref.current) {
  //       observer.observe(ref.current);
  //     }
  //     console.log(ref.current);
  //   });
  //   return () => {
  //     sectionRefs.forEach((ref) => {
  //       if (ref.current) {
  //         observer.unobserve(ref.current);
  //       }
  //     });
  //   };
  // }, []);

  return (
    <main>
      <Hero id="home" />
      <AboutUs id="about" />

      <section className="whitesection" id="facilities">
        <RoomsApartments />
        <Facilities />
      </section>
      <Gallery />
      {/* <GetInTouch id="contacts" /> */}
    </main>
    // <main>
    //   <Hero ref={homeRef} id="home" />
    //   <AboutUs ref={aboutRef} id="about" />

    //   <section ref={facilitiesRef} className="whitesection" id="facilities">
    //     <RoomsApartments />
    //     <Facilities />
    //   </section>
    //   <Gallery />
    //   <GetInTouch ref={getintouchRef} id="contacts" />
    // </main>
  );
};

export default MainPage;
