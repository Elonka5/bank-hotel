import { useContext } from "react";
import { ActiveSectionContext } from "./ActiveSectionContext";

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};

// export const useActiveSection = () => {
// const [activeSection, setActiveSection] = useState<string | null>(null);
// const observer = useRef<IntersectionObserver | null>(null);

//   const sectionRef = useRef<HTMLDivElement>(null);
//   const linkRef = useRef<HTMLAnchorElement>(null);

// useEffect(() => {
//   observer.current = new IntersectionObserver((entries) => {
//     const visibleSection = entries.find((entry) => entry.isIntersecting)
//       ?.target as HTMLElement;

//     if (visibleSection) {
//       setActiveSection(visibleSection.id);
//     }
//   });

//   const sections = document.querySelectorAll("[data-section]");

//   sections.forEach((section) => {
//     if (observer.current) {
//       observer.current.observe(section);
//     }
//   });

//   return () => {
//     if (observer.current) {
//       sections.forEach((section) => {
//         observer.current?.unobserve(section);
//       });
//     }
//   };
// }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             linkRef.current?.classList.add("active");
//           } else {
//             linkRef.current?.classList.remove("active");
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

// return { activeSection, setActiveSection };
// };
