import { useFormik } from "formik";
import Select from "react-select";
// import "../../scss/components/_bookingRoomForm.scss";

interface Values {
  checkIn: string;
  checkOut: string;
}

const initialValues = {
  checkIn: "",
  checkOut: "",
};

const BookingRoomForm = () => {
  const options = [
    { value: "standart", label: "Standart" },
    { value: "business", label: "Business" },
    { value: "superior", label: "Superior" },
  ];

  const onSubmit = (values: Values) => {
    console.log(
      `checkIn - ${values.checkIn} checkOut - ${values.checkOut} submit`
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <div className="booking-form">
      <form onSubmit={formik.handleSubmit}>
        <Select
          options={options}
          name="checkIn"
          placeholder="Check In"
          value={options.find(
            (option) => option.value === formik.values.checkIn
          )}
          onChange={(option) => formik.setFieldValue("checkIn", option?.value)}
          classNamePrefix="react-select"
        />
        <Select
          options={options}
          name="checkOut"
          placeholder="Check Out"
          value={options.find(
            (option) => option.value === formik.values.checkOut
          )}
          onChange={(option) => formik.setFieldValue("checkOut", option?.value)}
          classNamePrefix="react-select"
        />
        <button type="submit">Book Room</button>
      </form>
    </div>
  );
};

export default BookingRoomForm;
