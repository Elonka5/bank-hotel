import React, { createContext, useState, ReactNode, useRef } from "react";

type ActiveSectionContextType = {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  // sectionRef: React.RefObject<HTMLDivElement>;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  facilitiesRef: React.RefObject<HTMLDivElement>;
  getintouchRef: React.RefObject<HTMLDivElement>;

  linkRef: React.RefObject<HTMLAnchorElement>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // const observer = useRef<IntersectionObserver | null>(null);

  const linkRef = useRef<HTMLAnchorElement>(null);
  // const sectionRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const getintouchRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log("sectionRef", sectionRef.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log("entry", entry);

  //     //       entries.forEach((entry) => {
  //     //         if (entry.isIntersecting) {
  //     //           linkRef.current?.classList.add("active");
  //     //         } else {
  //     //           linkRef.current?.classList.remove("active");
  //     // }

  //     //   if (entry.isIntersecting) {
  //     //     setActiveSection(entry.target.id);
  //     //   }
  //   });

  //   //     },
  //   //     { threshold: 0.5 }
  //   //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   //   if (sectionRef.current) {
  //   //     observer.observe(sectionRef.current);
  //   //   }
  //   // =
  //   // return () => {
  //   //   if (sectionRef.current) {
  //   //     observer.unobserve(sectionRef.current);
  //   //   }
  //   // };
  // }, []);

  // ====================================================
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sectionElements = document.querySelectorAll("section");
  //     sectionElements.forEach((section) => {
  //       const firstSection = document.getElementById("about");
  //       if (firstSection) {
  //         const firstSectionTop = firstSection.offsetTop;
  //         if (window.scrollY < firstSectionTop) {
  //           setActiveSection("home");
  //         }
  //       }
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.offsetHeight;
  //       const sectionId = section.getAttribute("id");
  //       if (
  //         window.scrollY >= sectionTop - 44 &&
  //         window.scrollY < sectionTop + sectionHeight - 44
  //       ) {
  //         setActiveSection(sectionId);
  //         const url = `/BankHotel/#${sectionId}`;

  //         if (sectionId !== null) {
  //           window.history.pushState(null, "", url);
  //         } else {
  //           window.history.pushState(null, "", window.location.pathname);
  //         }
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // ============================================
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const visibleSection = entries.find((entry) => entry.isIntersecting);
  //       // ?.target as HTMLElement;

  //       if (visibleSection) {
  //         setActiveSection(visibleSection.target.id);
  //       }
  //     },
  //     { rootMargin: "0px 0px 0px 0px", threshold: 0.1 }
  //   );

  //   const sections = document.querySelectorAll("section");

  //   if (sections.length > 0) {
  //     sections.forEach((section) => {
  //       if (observer) {
  //         observer.observe(section);
  //       }
  //     });
  //   } else {
  //     console.warn("No sections found to observe.");
  //   }

  //   return () => {
  //     if (observer) {
  //       sections.forEach((section) => {
  //         observer.unobserve(section);
  //       });
  //     }
  //   };
  // }, []);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        // sectionRef,
        homeRef,
        aboutRef,
        facilitiesRef,
        getintouchRef,
        linkRef,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
