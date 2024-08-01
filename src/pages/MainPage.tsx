import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useInView } from "react-intersection-observer";
import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Gallery from "../components/MainPage/Gallery/Gallery";
import Facilities from "../components/MainPage/Facilities/Facilities";
import Hero from "../components/MainPage/Hero/Hero";
import RoomsApartments from "../components/MainPage/RoomsApartments/RoomsApartments";
import { useActiveSection } from "../helpers/useActiveSection";
import GetInTouch from "../components/GetInTouch/GetInTouch";

// interface ActiveSec {
//   activeSectionAc: string;
// }

// type ActiveSec = {
//   homeRef: React.RefObject<HTMLDivElement>;
//   aboutRef: React.RefObject<HTMLDivElement>;
//   facilitiesRef: React.RefObject<HTMLDivElement>;
//   getintouchRef: React.RefObject<HTMLDivElement>;
// };

const MainPage = () => {
  // const location = useLocation();
  const {
    activeSection,
    setActiveSection,
    // sectionRef,
    // linkRef,
    homeRef,
    aboutRef,
    facilitiesRef,
    getintouchRef,
  } = useActiveSection();
  // console.log("mySection", sectionRef);
  // const { ref: sectionRef, inView: activeSection } = useInView();

  // console.log("mySection", sectionRef);
  // console.log("liiiiink", linkRef);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           linkRef.current?.classList.add("active");
  //         } else {
  //           linkRef.current?.classList.remove("active");
  //         }
  //         console.log("liiiiink", linkRef);
  //         console.log("EEentry", entry);
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   // return () => {
  //   //   if (sectionRef.current) {
  //   //     observer.unobserve(sectionRef.current);
  //   //   }
  //   // };
  // }, [linkRef]);

  console.log("aaaaaactive", activeSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting === true) {
            setActiveSection(entry.target.id);
          } else if (entry.isIntersecting === false) {
            setActiveSection(null);
          }
          console.log("EEEentry", entry);
        });
      },
      { threshold: 0.5 }
    );

    const sectionRefs = [homeRef, aboutRef, facilitiesRef, getintouchRef];
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
      console.log(ref.current);
    });
    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // ==++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // ===========

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       let activeId: string | null = null;

  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // setActiveSection(entry.target.id);
  //           activeId = entry.target.id;
  //         }
  //         console.log("entry", entry);
  //       });

  //       if (activeId) {
  //         setActiveSection(activeId);
  //       } else {
  //         setActiveSection(null);
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   const sectionRefs = [homeRef, aboutRef, facilitiesRef, getintouchRef];

  //   sectionRefs.forEach((ref) => {
  //     if (ref.current) {
  //       observer.observe(ref.current);
  //     }
  //   });

  //   return () => {
  //     sectionRefs.forEach((ref) => {
  //       if (ref.current) {
  //         observer.unobserve(ref.current);
  //       }
  //     });
  //   };
  // }, [aboutRef, facilitiesRef, homeRef, getintouchRef, setActiveSection]);

  // =============================================================
  // =============================================================

  // useEffect(() => {
  //   // console.log("sectionRef", sectionRef.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     // const entry = entries[0];
  //     // setActiveSection(entry.isIntersecting);

  //     entries.map((entry) => {
  //       if (entry.isIntersecting) {
  //         setActiveSection(entry.isIntersecting === true);
  //       }
  //       // else {
  //       //   setActiveSection(null);
  //       // }
  //       console.log("entry", entry);
  //     });

  //     // ----------------------
  //     //       entries.forEach((entry) => {
  //     //         if (entry.isIntersecting) {
  //     //           linkRef.current?.classList.add("active");
  //     //         } else {
  //     //           linkRef.current?.classList.remove("active");
  //     // }

  //     //   if (entry.isIntersecting) {
  //     //     setActiveSection(entry.target.id);
  //     //   }
  //     // ---
  //   });
  //   // ----

  //   //     },
  //   //     { threshold: 0.5 }
  //   //   );
  //   // -------
  //   const sectionRefs = [homeRef, aboutRef, facilitiesRef, getintouchRef];

  //   sectionRefs.forEach((ref) => {
  //     if (ref.current) {
  //       observer.observe(ref.current);
  //     }
  //   });

  //   // ============
  //   // if (sectionRef.current) {
  //   //   observer.observe(sectionRef.current);
  //   // }
  //   // ===
  //   // return () => {
  //   //   if (sectionRef.current) {
  //   //     observer.unobserve(sectionRef.current);
  //   //   }
  //   // };
  //   // ===========

  //   // return () => {
  //   //   sectionRefs.forEach((ref) => {
  //   //     if (ref.current) {
  //   //       observer.unobserve(ref.current);
  //   //     }
  //   //   });
  //   // };
  // }, [aboutRef, facilitiesRef, homeRef, getintouchRef, setActiveSection]);

  // ============================================================================
  // =============================================================

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sectionId = location.hash.substring(1);
  //     if (sectionId) {
  //       const element = document.getElementById(sectionId);
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }
  //     } else {
  //       document.body.scrollTop = 0;
  //       document.documentElement.scrollTop = 0;
  //     }
  //   };
  //   handleScroll();
  // }, [location]);

  return (
    // <main style={{ marginTop: 160 }}>
    //   <Hero ref={sectionRef} id="home" />
    //   <AboutUs ref={sectionRef} id="about" />

    //   <section ref={sectionRef} className="whitesection" id="facilities">
    //     <RoomsApartments />
    //     <Facilities />
    //   </section>
    //   <Gallery />
    //   <GetInTouch ref={sectionRef} id="contacts" />
    // </main>
    <main>
      <Hero ref={homeRef} id="home" />
      <AboutUs ref={aboutRef} id="about" />

      <section ref={facilitiesRef} className="whitesection" id="facilities">
        <RoomsApartments />
        <Facilities />
      </section>
      <Gallery />
      <GetInTouch ref={getintouchRef} id="contacts" />
    </main>
  );
};

export default MainPage;

// ===========================================================
// ==============================================================
// =============================================================

// import AboutUs from "../components/MainPage/AboutUs/AboutUs";
// import Gallery from "../components/MainPage/Gallery/Gallery";
// import Facilities from "../components/MainPage/Facilities/Facilities";
// import Hero from "../components/MainPage/Hero/Hero";
// import { useLocation } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import RoomsApartments from "../components/MainPage/RoomsApartments/RoomsApartments";

// // interface ActiveSec {
// //   activeSectionAc: string;
// // }

// const MainPage: React.FC = () => {
//   // const [activeSection, setActiveSection] = useState(null);

//   const location = useLocation();
//   // const observer = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sectionId = location.hash.substring(1);
//       if (sectionId) {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       } else {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//       }
//     };
//     handleScroll();
//   }, [location]);

//   // ---------------------------------
//   // useEffect(() => {
//   //   observer.current = new IntersectionObserver((entries) => {
//   //     const visibleSection = entries.find((entry) => entry.isIntersecting)
//   //       ?.target as HTMLElement;

//   //     if (visibleSection) {
//   //       setActiveSection(visibleSection.id);
//   //     }
//   //   });

//   //   const sections = document.querySelectorAll("[data-section]");

//   //   sections.forEach((section) => {
//   //     if (observer.current) {
//   //       observer.current.observe(section);
//   //     }
//   //   });
//   //   return () => {
//   //     if (observer.current) {
//   //       sections.forEach((section) => {
//   //         observer.current?.unobserve(section);
//   //       });
//   //     }
//   //   };
//   // }, []);

//   // =============================================

//   // useEffect(() => {
//   //   window.addEventListener("scroll", function () {
//   //     const observable = {
//   //       home: document.querySelector("#home"),
//   //       about: document.querySelector("#about"),
//   //       facilities: document.querySelector("#facilities"),
//   //       contacts: document.querySelector("#contacts"),
//   //     };
//   //     const pos = {
//   //       home: observable.home ? observable.home.getBoundingClientRect() : null,
//   //       about: observable.about
//   //         ? observable.about.getBoundingClientRect()
//   //         : null,
//   //       facilities: observable.facilities
//   //         ? observable.facilities.getBoundingClientRect()
//   //         : null,
//   //       contacts: observable.contacts
//   //         ? observable.contacts.getBoundingClientRect()
//   //         : null,
//   //     };

//   //     if (
//   //       pos.home &&
//   //       pos.home.top < window.innerHeight &&
//   //       pos.home.bottom >= 0
//   //     ) {
//   //       setActiveSection("home");
//   //     } else if (
//   //       pos.about &&
//   //       pos.about.top < window.innerHeight &&
//   //       pos.about.bottom >= 0
//   //     ) {
//   //       setActiveSection("about");
//   //     } else if (
//   //       pos.facilities &&
//   //       pos.facilities.top < window.innerHeight &&
//   //       pos.facilities.bottom >= 0
//   //     ) {
//   //       setActiveSection("facilities");
//   //     } else if (
//   //       pos.contacts &&
//   //       pos.contacts.top < window.innerHeight &&
//   //       pos.contacts.bottom >= 0
//   //     ) {
//   //       setActiveSection("contacts");
//   //     }
//   //   });

//   //   return () => {};
//   // }, []);

//   return (
//     <main>
//       <Hero id="home" />
//       <AboutUs data-section id="about" />

//       <section className="whitesection" data-section id="facilities">
//         <RoomsApartments />
//         <Facilities />
//       </section>
//       <Gallery />
//     </main>

//     // <main>
//     //   <div id="/">
//     //     <Hero />
//     //     <AboutUs id="about" />
//     //   </div>
//     //   <div className="whitesection" id="facilities">
//     //     <RoomsApartments />
//     //     <Facilities />
//     //   </div>
//     //   <Gallery />
//     // </main>
//   );
// };

// export default MainPage;
