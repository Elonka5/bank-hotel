import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";
import { enUS } from "date-fns/locale";
import CustomCalendarComponent from "./CustomCalendarComponent";
import CustomHeaderComponent from "./CustomHeaderComponent";
import BottomButtonsComponents from "./BottomButtonsComponents";
import Icon from "../Icon/Icon";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  setCheckInDate,
  setCheckOutDate,
  setSubmitDates,
} from "../../redux/booking/bookingSlice";
import DropdownIndicatorDatepicker from "../BookingRoomForm/DropdownIndicatorDatepicker";

interface IDatePickerProps {
  selectedDate: Date | null;
  onChange: (dates: Date | null) => void;
  placeholderText: string;
  touchClassName?: string;
  iconId?: string;
  iconClassName?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconText?: string;
  touch?: string;
  // closeWithRef?: (ref: React.RefObject<DatePicker | null>) => void;
  clearFormikField?: () => void;
}

const DatePickerComponent: React.FC<IDatePickerProps> = ({
  placeholderText,
  touchClassName,
  selectedDate,
  onChange,
  iconId,
  iconClassName,
  iconWidth,
  iconHeight,
  iconText,
  // closeWithRef,
  clearFormikField,
}) => {
  const datePickerRef = useRef<DatePicker | null>(null);

  const dispatch = useAppDispatch();

  const selectCheckInDate = useAppSelector(
    (state) => state.booking.checkInDate
  );
  const selectCheckOutDate = useAppSelector(
    (state) => state.booking.checkOutDate
  );
  const minTime = new Date();
  minTime.setHours(8, 0, 0, 0);

  const maxTime = new Date();
  maxTime.setHours(22, 0, 0, 0);

  const handleMinDate = () => {
    let minDate = new Date();
    if (selectCheckInDate) {
      minDate = new Date(selectCheckInDate);
    }
    return minDate;
  };

  const filterPassedTime = (time: Date) => {
    let currentDate = new Date();
    const selectedDate = new Date(time);

    if (selectCheckInDate) {
      currentDate = new Date(selectCheckInDate);
    }
    return currentDate.getTime() < selectedDate.getTime();
  };

  const HandleCloseOrReset = (evt?: string) => {
    if (datePickerRef.current) {
      if (evt === "close") {
        datePickerRef.current.setOpen(false);
      } else if (evt === "reset") {
        datePickerRef.current.setOpen(false);
        datePickerRef.current.clear();
      } else if (evt === "submit") {
        datePickerRef.current.setOpen(false);
        // closeWithRef?.(datePickerRef);

        dispatch(
          setSubmitDates({
            checkIn: selectCheckInDate,
            checkOut: selectCheckOutDate,
          })
        );
        dispatch(setCheckInDate(null));
        dispatch(setCheckOutDate(null));
        clearFormikField?.();
      }
    }
  };

  return (
    <div className={`${styles.datepicker} ${touchClassName || ""}`}>
      <DropdownIndicatorDatepicker datePickerRef={datePickerRef} />
      <DatePicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={onChange}
        locale={enUS}
        showTimeSelect
        filterTime={filterPassedTime}
        timeFormat="p"
        timeIntervals={60}
        minTime={minTime}
        maxTime={maxTime}
        minDate={handleMinDate()}
        dateFormat="Pp"
        useWeekdaysShort={true}
        placeholderText={placeholderText}
        // wrapperClassName={styles.wrapper}
        wrapperClassName={`${styles.wrapper} ${touchClassName || ""}`}
        // wrapperClassName={
        //   nameSection === "touch"
        //     ? styles.wrapper && styles.touch
        //     : styles.wrapper
        // }
        popperClassName={
          placeholderText === "Check In" ? styles.popperStart : styles.popperEnd
        }
        showPopperArrow={false}
        calendarContainer={CustomCalendarComponent}
        timeCaption="CHOOSE TIME"
        shouldCloseOnSelect={false}
        isClearable={true}
        clearButtonClassName={styles.clear}
        renderCustomHeader={(props) => <CustomHeaderComponent {...props} />}
      >
        <BottomButtonsComponents
          text={iconText}
          onClick={HandleCloseOrReset}
          onClickEvent="reset"
        >
          <Icon
            iconId={iconId}
            className={iconClassName}
            width={iconWidth}
            height={iconHeight}
          />
        </BottomButtonsComponents>
      </DatePicker>
    </div>
  );
};

export default DatePickerComponent;
