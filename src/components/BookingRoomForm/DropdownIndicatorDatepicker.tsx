import DatePicker from "react-datepicker";
import Icon from "../Icon/Icon";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  setCheckInDate,
  setCheckOutDate,
} from "../../redux/booking/bookingSlice";

interface IDropdownType {
  datePickerRef?: React.MutableRefObject<DatePicker | null>;
}

const DropdownIndicatorDatepicker: React.FC<IDropdownType> = ({
  datePickerRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosedIcon, setIsClosedIcon] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dispatch = useAppDispatch();

  const selectCheckInDate = useAppSelector(
    (state) => state.booking.checkInDate
  );
  const selectCheckOutDate = useAppSelector(
    (state) => state.booking.checkOutDate
  );

  const handleClickOpenCalendar = () => {
    if (buttonRef.current?.classList.contains("__close-icon")) {
      datePickerRef?.current?.clear();
      if (selectCheckInDate) {
        dispatch(setCheckInDate(null));
      } else if (selectCheckOutDate) {
        dispatch(setCheckOutDate(null));
      }
    } else {
      setIsOpen(!isOpen);
      datePickerRef?.current?.setOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      const inputValues = datePickerRef?.current?.input?.attributes[3].value;
      if (inputValues) {
        buttonRef.current?.classList.add("__close-icon");
        setIsClosedIcon(true);
      } else {
        buttonRef.current?.classList.remove("__close-icon");
        setIsClosedIcon(false);
      }
      if (datePickerRef?.current?.state.open) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, datePickerRef]);

  const classNameIcon = (isClosedIcon: boolean, isOpen: boolean) => {
    const classIcon = isClosedIcon ? "cancel" : "select";
    if (isClosedIcon) {
      if (isOpen) {
        return `${classIcon}-dropdown--open`;
      } else {
        return `${classIcon}-dropdown`;
      }
    } else {
      if (isOpen) {
        return `${classIcon}-dropdown--open`;
      } else {
        return `${classIcon}-dropdown`;
      }
    }
  };
  return (
    <button
      ref={buttonRef}
      className="dropdown-indicator"
      type="button"
      onClick={handleClickOpenCalendar}
    >
      <Icon
        className={classNameIcon(isClosedIcon, isOpen)}
        width={24}
        height={24}
        iconId={isClosedIcon ? "icons8-cancel" : "arrow-up-and-down"}
      />
    </button>
  );
};

export default DropdownIndicatorDatepicker;
