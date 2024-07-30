import { Dispatch, SetStateAction, AnimationEvent } from "react";

export const handleClick = (
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  setIsClosing: Dispatch<SetStateAction<boolean>>,
  setIsOpenForm: Dispatch<SetStateAction<boolean>>
) => {
  if (isOpen) {
    setIsOpen(false);
    setIsClosing(true);
    setTimeout(() => {
      setIsOpenForm(false);
    }, 900);
  } else {
    setIsOpenForm(true);
    setIsOpen(true);
  }
};

export const handleAnimationEnd = (
  event: AnimationEvent<HTMLDivElement>,
  isClosing: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  setIsClosing: Dispatch<SetStateAction<boolean>>
) => {
  if (isClosing && event.animationName === "animation-form-close") {
    setIsOpen(false);
    setIsClosing(false);
  }
};


export const classNameForm = (isMobile: boolean, isOpen: boolean) => {
    const classForm = isMobile ? "mobile_rooms" : "hero_rooms";
    if (isMobile) {
      if (isOpen) {
        return `mobile ${classForm} open`;
      } else {
        return `mobile ${classForm} close`;
      }
    } else {
      if (isOpen) {
        return `${classForm} open`;
      } else {
        return `${classForm} close`;
      }
    }
  };