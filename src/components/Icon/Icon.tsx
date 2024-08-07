import sprite from "../../assets/icons/sprite.svg";

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  iconId?: string;
  ariaLabel: string;
}

const Icon = ({ className, width, height, iconId,ariaLabel }: IconProps) => {
  return (
    <svg className={`${className}`} width={width} height={height} aria-label={ariaLabel}>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};

export default Icon;
