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

  const linkRef = useRef<HTMLAnchorElement>(null);
  // const sectionRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const getintouchRef = useRef<HTMLDivElement>(null);

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
