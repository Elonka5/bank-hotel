import { useFormik } from "formik";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import { IBookingState } from "../../redux/interface/interface";
import { useAppDispatch } from "../../redux/hooks/hooks";
import {
  setCheckInDate,
  setCheckOutDate,
  setSubmitDates,
} from "../../redux/booking/bookingSlice";
// import DatePicker from "react-datepicker";

const initialValues: IBookingState = {
  checkInDate: null,
  checkOutDate: null,
};

interface IBookingRoomFormProps {
  className?: string;
  touchClassName?: string;
}

const BookingRoomFormDatePicker: React.FC<IBookingRoomFormProps> = ({
  className = "",
  touchClassName,
}) => {
  const dispatch = useAppDispatch();

  // const closeWithRef = (ref: React.RefObject<DatePicker | null>) => {
  //   ref.current?.setOpen(false);
  // };

  const onSubmit = (values: IBookingState) => {
    const dates = {
      checkIn: values.checkInDate,
      checkOut: values.checkOutDate,
    };
    dispatch(setSubmitDates(dates));
    dispatch(setCheckInDate(null));
    dispatch(setCheckOutDate(null));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const handleDateChange =
    (field: keyof IBookingState) => (date: Date | null) => {
      const dateString = date ? date.toISOString() : null;
      formik.setFieldValue(field, dateString);
      // formik.setFieldValue(field, date);
      if (field === "checkInDate") {
        dispatch(setCheckInDate(dateString));
      } else if (field === "checkOutDate") {
        dispatch(setCheckOutDate(dateString));
      }
    };

  return (
    <div className={`booking-form ${className}`}>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form__select-container first-select">
          <DatePickerComponent
            selectedDate={
              formik.values.checkInDate
                ? new Date(formik.values.checkInDate)
                : null
            }
            onChange={handleDateChange("checkInDate")}
            placeholderText="Check In"
            touchClassName={touchClassName}
            iconId="cancel-in-circle"
            iconClassName="cancel-in-circle"
            iconWidth={26}
            iconHeight={26}
            iconText="Cancel"
            // closeWithRef={closeWithRef}
            clearFormikField={() => formik.resetForm()}
          />
        </div>
        <div className="form__select-container">
          <DatePickerComponent
            selectedDate={
              formik.values.checkOutDate
                ? new Date(formik.values.checkOutDate)
                : null
            }
            onChange={handleDateChange("checkOutDate")}
            placeholderText="Check Out"
            touchClassName={touchClassName}
            iconId="cancel-in-circle"
            iconClassName="cancel-in-circle"
            iconWidth={26}
            iconHeight={26}
            iconText="Cancel"
            // closeWithRef={closeWithRef}
            clearFormikField={() => formik.resetForm()}
          />
        </div>
        <button
          type="submit"
          disabled={
            formik.values.checkOutDate && formik.values.checkInDate
              ? false
              : true
          }
          className={`form__btn-submit ${className}`}
        >
          Book Room
        </button>
      </form>
    </div>
  );
};

export default BookingRoomFormDatePicker;
