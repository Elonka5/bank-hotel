import Icon from "../Icon/Icon";

interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  iconWidth: number;
  iconHeight: number;
  iconArrow: string;
  iconId: string;
}

const ButtonPoly = ({
  text,
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
      {text}
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
