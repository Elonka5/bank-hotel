import Icon from "../Icon/Icon";
import { ReactNode } from "react";

interface ButtonProps {
  // text?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  iconWidth: number;
  iconHeight: number;
  iconArrow: string;
  iconId: string;
}

const ButtonPoly = ({
  // text,
  children,
  type = "button",
  className = "button",
  disabled = false,
  iconWidth,
  iconHeight,
  iconArrow,
  iconId,
}: ButtonProps) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {/* {text} */}
      {children}
      <Icon
        className="polygon"
        width={iconWidth}
        height={iconHeight}
        iconId="polygon"
      />
      <Icon className={iconArrow} iconId={iconId} />
    </button>
  );
};

export default ButtonPoly;
