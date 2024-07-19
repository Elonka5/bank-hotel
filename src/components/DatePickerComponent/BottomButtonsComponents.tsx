import { ReactNode, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";

interface ICustomButtonProps {
  classNameComponent?: "mobile" | "desktop";
  classNameBtn?: "cancel" | "back";
  text?: string;
  children?: ReactNode;
  onClick?: (evt?: string) => void;
  onClickEvent?: "reset" | "close" | "submit";
}

const BottomButtonsComponents: React.FC<ICustomButtonProps> = ({
  classNameComponent = "desktop",
  classNameBtn = "cancel",
  text,
  children,
  onClick,
  onClickEvent,
}) => {
  const selectCheckInDate = useAppSelector(
    (state) => state.booking.checkInDate
  );
  const selectCheckOutDate = useAppSelector(
    (state) => state.booking.checkOutDate
  );

  const [buttonText, setButtonText] = useState("Close");
  const [buttonEvent, setButtonEvent] = useState("close");

  useEffect(() => {
    if (selectCheckInDate || selectCheckOutDate) {
      setButtonText("Save & Close");
    }
    if (selectCheckInDate && selectCheckOutDate) {
      setButtonEvent("submit");
      setButtonText("Book Room");
    }
  }, [selectCheckInDate, selectCheckOutDate]);

  return (
    <div className={`buttons-wrapper ${classNameComponent}`}>
      <span></span>
      <div className="buttons">
        <button
          type="button"
          className={`buttons__btn-${classNameBtn} ${classNameComponent}`}
          onClick={() => onClick && onClick(onClickEvent)}
        >
          {children}
          <p>{text}</p>
        </button>
        <button
          type="button"
          className={`buttons__btn-submit bottom ${classNameComponent}`}
          onClick={() => {
            onClick && onClick(buttonEvent);
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BottomButtonsComponents;
