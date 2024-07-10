import { useFormik } from "formik";
import DatePickerComponent from "../DatePickerComponent/1DatePickerComponent";

interface IValues {
  checkIn: string;
  checkOut: string;
  checkInDate: Date | null;
  checkOutDate: Date | null;
}

const initialValues: IValues = {
  checkIn: "",
  checkOut: "",
  checkInDate: null,
  checkOutDate: null,
};

interface IBookingRoomFormProps {
  className?: string;
}

const BookingRoomFormDatePicker: React.FC<IBookingRoomFormProps> = ({
  className = "",
}) => {
  const onSubmit = (values: IValues) => {
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

  const handleDateChange = (field: keyof IValues) => (date: Date | null) => {
    formik.setFieldValue(field, date);
  };

  return (
    <div className={`booking-form ${className}`}>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form__select-container first-select">
          <DatePickerComponent
            selectedDate={formik.values.checkInDate}
            onChange={handleDateChange("checkInDate")}
            placeholderText="Check In"
          />
        </div>
        <div className="form__select-container">
          <DatePickerComponent
            selectedDate={formik.values.checkOutDate}
            onChange={handleDateChange("checkOutDate")}
            placeholderText="Check Out"
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
