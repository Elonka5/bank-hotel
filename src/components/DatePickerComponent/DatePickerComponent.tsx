import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";
import { enUS } from "date-fns/locale";
import CustomCalendarComponent from "./CustomCalendarComponent";
import CustomHeaderComponent from "./CustomHeaderComponent";
import BottomButtonsComponents from "./BottomButtonsComponents";
import Icon from "../Icon/Icon";
import { useRef } from "react";

interface IDatePickerProps {
  selectedDate: Date | null;
  onChange: (dates: Date | null) => void;
  placeholderText: string;
  iconId?: string;
  iconClassName?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconText?: string;
}

const DatePickerComponent: React.FC<IDatePickerProps> = ({
  placeholderText,
  selectedDate,
  onChange,
  iconId,
  iconClassName,
  iconWidth,
  iconHeight,
  iconText,
}) => {
  const datePickerRef = useRef<DatePicker | null>(null);
  const minTime = new Date();
  minTime.setHours(8, 0, 0, 0);

  const maxTime = new Date();
  maxTime.setHours(22, 0, 0, 0);

  const minDate = new Date();

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  // const CloseAndClear = () => {
  //   if (datePickerRef.current) {
  //     datePickerRef.current.setOpen(false);
  //     // console.log(datePickerRef.current.input.value);
  //     datePickerRef.current.clear();
  //   }
  // };

  const HandleCloseOrReset = (evt?: string) => {
    if (datePickerRef.current) {
      if (evt === "close") {
        datePickerRef.current.setOpen(false);
      } else if (evt === "reset") {
        datePickerRef.current.setOpen(false);
        datePickerRef.current.clear();
      } else {
        console.log("submit");
      }
    }
  };

  return (
    <div className={styles.datepicker}>
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
        minDate={minDate}
        dateFormat="Pp"
        useWeekdaysShort={true}
        placeholderText={placeholderText}
        wrapperClassName={styles.wrapper}
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
          onClickEvent="close"
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
