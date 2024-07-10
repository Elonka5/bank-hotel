import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";
// import { setHours, setMinutes } from "date-fns";
// import { newDate } from "react-datepicker/dist/date_utils";
// import {
//   setHours,
//   setMinutes,
//   newDate,
// } from "react-datepicker/dist/date_utils";
// import { useState } from "react";

const DatePickerComponent: React.FC<{
  selectedDate: Date | null;
  onChange: (dates: Date | null) => void;
  placeholderText: string;
}> = ({ placeholderText, selectedDate, onChange }) => {
  const minTime = new Date();
  minTime.setHours(8, 0, 0, 0);

  // const minTime = setHours(setMinutes(new Date(), 0), 8);
  // const maxTime = setHours(setMinutes(new Date(), 0), 22);

  const maxTime = new Date();
  maxTime.setHours(22, 0, 0, 0);

  const minDate = new Date();

  const CustomCalendarContainer = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <div>
        <CalendarContainer className={styles.calendar}>
          <div>
            <div className={styles.calendar__title}>
              <span>Choose Day</span>
            </div>
            <div className={styles.calendar__children}>{children}</div>
          </div>
        </CalendarContainer>
      </div>
    );
  };

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className={styles.datepicker}>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        locale="en"
        showTimeSelect
        filterTime={filterPassedTime}
        timeFormat="p"
        timeIntervals={60}
        minTime={minTime}
        maxTime={maxTime}
        // minTime={setHours(setMinutes(new Date(), 0), 17)}
        // maxTime={setHours(setMinutes(new Date(), 30), 20)}
        minDate={minDate}
        dateFormat="Pp"
        dateFormatCalendar="LLLL yyyy, eee dd"
        placeholderText={placeholderText}
        wrapperClassName={styles.wrapper}
        popperClassName={styles.popper}
        showPopperArrow={false}
        calendarContainer={CustomCalendarContainer}
        timeCaption="CHOOSE TIME"
      ></DatePicker>
    </div>
  );
};

export default DatePickerComponent;
