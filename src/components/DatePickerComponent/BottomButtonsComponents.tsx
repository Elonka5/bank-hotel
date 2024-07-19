import { ReactNode } from "react";

interface ICustomButtonProps {
  classNameComponent?: "mobile" | "desktop";
  classNameBtn?: "cancel" | "back";
  text?: string;
  children?: ReactNode;
  onClick?: (evt?: string) => void;
  onClickEvent?: "reset" | "close" | undefined;
}

const BottomButtonsComponents: React.FC<ICustomButtonProps> = ({
  classNameComponent = "desktop",
  classNameBtn = "cancel",
  text,
  children,
  onClick,
  onClickEvent,
}) => {
  return (
    <div className={`buttons-wrapper ${classNameComponent}`}>
      <span></span>
      <div className="buttons">
        <button
          type="button"
          className={`buttons__btn-${classNameBtn} ${classNameComponent}`}
          onClick={() => onClick && onClick("reset")}
        >
          {children}
          <p>{text}</p>
        </button>
        <button
          type="submit"
          className={`buttons__btn-submit bottom ${classNameComponent}`}
          onClick={() => onClick && onClick(onClickEvent)}
        >
          Book Room
        </button>
      </div>
    </div>
  );
};

export default BottomButtonsComponents;
