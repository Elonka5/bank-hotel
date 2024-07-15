import { useFormik } from "formik";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import { IBookingState } from "../../redux/interface/interface";
import { useAppDispatch } from "../../redux/hooks/hooks";
import {
  setCheckInDate,
  setCheckOutDate,
} from "../../redux/booking/bookingSlice";

// interface IValues {
//   // checkIn: string;
//   // checkOut: string;
//   checkInDate: Date | null;
//   checkOutDate: Date | null;
// }

const initialValues: IBookingState = {
  // checkIn: "",
  // checkOut: "",
  checkInDate: null,
  checkOutDate: null,
};

interface IBookingRoomFormProps {
  className?: string;
}

const BookingRoomFormDatePicker: React.FC<IBookingRoomFormProps> = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: IBookingState) => {
    console.log(
      `checkIn - ${values.checkInDate} checkOut - ${values.checkOutDate} submit`
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  // const handleChange = (field: keyof IValues) => () => {
  //   formik.setFieldValue(field, "");
  // };

  const handleDateChange =
    (field: keyof IBookingState) => (date: Date | null) => {
      const dateString = date ? date.toISOString() : null;
      formik.setFieldValue(field, date);
      if (field === "checkInDate") {
        dispatch(setCheckInDate(dateString));
        console.log("setCheckInDate", date?.toISOString());
      } else if (field === "checkOutDate") {
        dispatch(setCheckOutDate(dateString));
        console.log("setCheckOutDate", date?.toISOString());
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
            iconId="cancel-in-circle"
            iconClassName="cancel-in-circle"
            iconWidth={26}
            iconHeight={26}
            iconText="Cancel"
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
            iconId="cancel-in-circle"
            iconClassName="cancel-in-circle"
            iconWidth={26}
            iconHeight={26}
            iconText="Cancel"
          />
        </div>
        <button type="submit" className={`form__btn-submit ${className}`}>
          Book Room
        </button>
      </form>
    </div>
  );
};

export default BookingRoomFormDatePicker;
