import Icon from "../Icon/Icon";

interface ButtonProps {
  onClick?: () => void;
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const ButtonSince = ({
  onClick,
  text,
  type = "button",
  className = "btnSince",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btnSince ${className}`}
      disabled={disabled}
    >
      <Icon className="star" width={35} height={35} iconId="star" />
      {text}
    </button>
  );
};

export default ButtonSince;
