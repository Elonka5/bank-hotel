import { CalendarContainer } from "react-datepicker";
import styles from "./DatePicker.module.scss";

const CustomCalendarComponent = ({
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

export default CustomCalendarComponent;
