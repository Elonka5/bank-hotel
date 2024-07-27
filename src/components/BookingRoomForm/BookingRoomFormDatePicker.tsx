import { useFormik } from "formik";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import { IBookingState } from "../../redux/interface/interface";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setSubmitDates } from "../../redux/booking/bookingSlice";
import { AnimationEventHandler } from "react";
import { useClearCurrentState } from "../../helpers/redux";

const initialValues: IBookingState = {
  checkInDate: null,
  checkOutDate: null,
};

interface IBookingRoomFormProps {
  className?: string;
  touchClassName?: string;
  onAnimationEnd?: AnimationEventHandler<HTMLDivElement>;
}

const BookingRoomFormDatePicker: React.FC<IBookingRoomFormProps> = ({
  className = "",
  touchClassName,
  onAnimationEnd,
}) => {
  const dispatch = useAppDispatch();
  const clearCurrentState = useClearCurrentState();

  const onSubmit = (values: IBookingState) => {
    const dates = {
      checkIn: values.checkInDate,
      checkOut: values.checkOutDate,
    };
    dispatch(setSubmitDates(dates));
    clearCurrentState();
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
    };

  return (
    <div
      className={`booking-form ${className}`}
      onAnimationEnd={onAnimationEnd}
    >
      <form onSubmit={formik.handleSubmit} className={`form ${className}`}>
        <div className={`form__select-container first-select ${className}`}>
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
            clearFormikField={() => formik.resetForm()}
          />
        </div>
        <div className={`form__select-container ${className}`}>
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
