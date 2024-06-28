import { useFormik } from "formik";
import Select, { SingleValue } from "react-select";
import style from "./Select.module.scss";
import DropdownIndicator from "./DropdownIndicator";

interface IValues {
  checkIn: string;
  checkOut: string;
}

interface IOptionType {
  value: string;
  label: string;
}

const initialValues: IValues = {
  checkIn: "",
  checkOut: "",
};

interface IBookingRoomFormProps {
  className?: string;
}

const BookingRoomForm: React.FC<IBookingRoomFormProps> = ({
  className = "",
}) => {
  const options: IOptionType[] = [
    { value: "standart", label: "Standart" },
    { value: "business", label: "Business" },
    { value: "superior", label: "Superior" },
  ];

  const onSubmit = (values: IValues) => {
    console.log(
      `checkIn - ${values.checkIn} checkOut - ${values.checkOut} submit`
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const handleChange =
    (field: keyof IValues) => (selectedOption: SingleValue<IOptionType>) => {
      formik.setFieldValue(field, selectedOption?.value || "");
    };

  return (
    <div className={`booking-form ${className}`}>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form__select-container first-select">
          <Select
            isMulti={false}
            options={options}
            name="checkIn"
            placeholder="Check In"
            components={{ DropdownIndicator }}
            value={options.find(
              (option) => option.value === formik.values.checkIn
            )}
            onChange={handleChange("checkIn")}
            className={style.select}
          />
        </div>
        <div className="form__select-container">
          <Select
            isMulti={false}
            options={options}
            name="checkOut"
            placeholder="Check Out"
            components={{ DropdownIndicator }}
            value={options.find(
              (option) => option.value === formik.values.checkOut
            )}
            onChange={handleChange("checkOut")}
            className={style.select}
          />
        </div>
        <button type="submit" className={`form__btn-submit ${className}`}>
          Book Room
        </button>
      </form>
    </div>
  );
};

export default BookingRoomForm;
