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
import { useClearCurrentState } from "../../helpers/redux";

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
  clearFormikField,
}) => {
  const datePickerRef = useRef<DatePicker | null>(null);

  const dispatch = useAppDispatch();
  const clearCurrentState = useClearCurrentState();

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

  const handleDispatch = (
    evt: string,
    placeholderText: string,
    selectedDate: Date | null
  ) => {
    const dateString = selectedDate ? selectedDate.toISOString() : null;
    if (evt === "close" || evt === "save") {
      dispatch(
        placeholderText === "Check In"
          ? setCheckInDate(dateString)
          : setCheckOutDate(dateString)
      );
    } else if (evt === "reset") {
      dispatch(
        placeholderText === "Check In"
          ? setCheckInDate(null)
          : setCheckOutDate(null)
      );
    } else if (evt === "submit") {
      dispatch(
        setSubmitDates({
          checkIn: selectCheckInDate,
          checkOut: selectCheckOutDate,
        })
      );
      clearCurrentState();
    }
  };

  const HandleCloseOrReset = (evt?: string) => {
    if (datePickerRef.current) {
      if (evt === "close") {
        datePickerRef.current.setOpen(false);
        handleDispatch(evt, placeholderText, selectedDate);
      } else if (evt === "save") {
        handleDispatch(evt, placeholderText, selectedDate);
      } else if (evt === "reset") {
        datePickerRef.current.setOpen(false);
        datePickerRef.current.clear();

        handleDispatch(evt, placeholderText, selectedDate);
      } else if (evt === "submit") {
        datePickerRef.current.setOpen(false);
        handleDispatch(evt, placeholderText, selectedDate);

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
        wrapperClassName={`${styles.wrapper} ${touchClassName || ""}`}
        popperClassName={
          placeholderText === "Check In" ? styles.popperStart : styles.popperEnd
        }
        showPopperArrow={false}
        calendarContainer={CustomCalendarComponent}
        timeCaption="CHOOSE TIME"
        shouldCloseOnSelect={false}
        clearButtonClassName={styles.clear}
        renderCustomHeader={(props) => <CustomHeaderComponent {...props} />}
      >
        <BottomButtonsComponents
          text={iconText}
          onClick={HandleCloseOrReset}
          onClickEvent="reset"
          classNameComponent={touchClassName ? touchClassName : undefined}
        >
          <Icon
            iconId={iconId}
            className={iconClassName}
            width={iconWidth}
            height={iconHeight}
            ariaLabel="cancel"
          />
        </BottomButtonsComponents>
      </DatePicker>
    </div>
  );
};

export default DatePickerComponent;
