import sprite from "../../assets/icons/sprite.svg"

interface IconProps {
    className?: string;
    width?: number;
    height?: number;
    iconId: string;
}

const Icon = ({ className, width, height, iconId }: IconProps) => {
    return (
        <svg className={`${className}`} width={width} height={height}>
            <use href={`${sprite}#${iconId}`}></use>
        </svg>
    );
};

export default Icon;
