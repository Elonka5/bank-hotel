import { format } from "date-fns";
import Icon from "../Icon/Icon";

interface ICustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}
const CustomHeaderComponent: React.FC<ICustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  return (
    <div className="__header-custom">
      <span className="__header-custom--current-date">
        {format(date, "LLLL yyyy, eee dd")}
      </span>
      <div className="btn-wrapper">
        <button
          className="__header-custom--btn decrease-month"
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <Icon
            className="arrow-datepicker"
            iconId="arrow-datepicker"
            width={16}
            height={16}
          />
        </button>
        <button
          className="__header-custom--btn increase-month"
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <Icon
            className="arrow-datepicker"
            iconId="arrow-datepicker"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomHeaderComponent;
