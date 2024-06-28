import { components, DropdownIndicatorProps } from "react-select";
import Icon from "../Icon/Icon";

interface IOptionType {
  value: string;
  label: string;
}

const DropdownIndicator = (props: DropdownIndicatorProps<IOptionType>) => {
  const { selectProps } = props;
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Icon
          className={
            selectProps.menuIsOpen ? "select-dropdown--open" : "select-dropdown"
          }
          width={24}
          height={12}
          iconId="arrow-up-and-down"
        />
      </components.DropdownIndicator>
    )
  );
};

export default DropdownIndicator;
