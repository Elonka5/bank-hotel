import DatePicker from "react-datepicker";
import Icon from "../Icon/Icon";
import { useEffect, useRef, useState } from "react";

interface IDropdownType {
  datePickerRef?: React.MutableRefObject<DatePicker | null>;
}

const DropdownIndicatorDatepicker: React.FC<IDropdownType> = ({
  datePickerRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClickOpenCalendar = () => {
    setIsOpen(!isOpen);
    datePickerRef?.current?.setOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      const inputValues = datePickerRef?.current?.input?.attributes[3].value;
      if (inputValues) {
        buttonRef.current?.classList.add("visually-hidden");
      } else {
        buttonRef.current?.classList.remove("visually-hidden");
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

  return (
    <button
      ref={buttonRef}
      className="dropdown-indicator"
      type="button"
      onClick={handleClickOpenCalendar}
    >
      <Icon
        className={isOpen ? "select-dropdown--open" : "select-dropdown"}
        width={24}
        height={12}
        iconId="arrow-up-and-down"
      />
    </button>
  );
};

export default DropdownIndicatorDatepicker;
