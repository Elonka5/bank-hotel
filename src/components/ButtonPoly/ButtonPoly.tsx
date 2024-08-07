import Icon from "../Icon/Icon";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  iconWidth: number;
  iconHeight: number;
  iconArrow?: string;
  iconArrowId?: string;
  iconPolygonId?: string;
  onClick?: () => void;
}

const ButtonPoly = ({
  children,
  type = "button",
  className = "button",
  disabled = false,
  iconWidth,
  iconHeight,
  iconArrow,
  iconArrowId,
  iconPolygonId,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      <Icon
        className="polygon"
        width={iconWidth}
        height={iconHeight}
        iconId={iconPolygonId}
      />
      {iconArrowId ? <Icon className={iconArrow} iconId={iconArrowId} /> : ""}
    </button>
  );
};

export default ButtonPoly;
