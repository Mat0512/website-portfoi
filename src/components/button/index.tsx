import { useState } from "react";
import { motion } from "framer-motion";

type ButtonType = "primary" | "default";
type ButtonSize = "sm" | "md" | "lg" | "xl";

const toggleSize = (size: ButtonSize): string => {
    interface SizeStyle {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    }

    const sizeStyle: SizeStyle = {
        sm: "h-3 text-xs",
        md: "h-7 text-sm",
        lg: "h-9 text-base",
        xl: "h-12 text-2xl",
    };
    return sizeStyle[size as keyof SizeStyle];
};

interface ButtonProps {
    type: ButtonType;
    text: string;
    color: string;
    size?: ButtonSize;
    onClick: () => any;
}

const Button = ({ type, text, color, size, onClick }: ButtonProps) => {
    const sizeStyles = size ? toggleSize(size) : "";
    const hexColor = color === "blue" ? "#05D9E8" : "#C252E1";
    const [width, setWidth] = useState(0);

    return (
        <button
            className={`relative block px-4 ${
                type === "primary" ? "border-l" : "border"
            } border-${color} color-${color} ${sizeStyles} `}
            onClick={onClick}
            onMouseEnter={() => {
                setWidth(100);
            }}
            onMouseLeave={() => {
                setWidth(0);
            }}
        >
            {/* hover effect element*/}
            <motion.div
                initial={{
                    width: 0,
                    height: "100%",
                    background: hexColor,
                }}
                animate={{
                    width: `${width}%`,
                }}
                className={`absolute top-0 left-0 h-full z-0 opacity-[0.6] drop-shadow-${color}`}
            ></motion.div>

            <p
                className={`drop-shadow-${color} transition duration-400`}
                style={{ color: width ? "#ffffff" : hexColor }}
            >
                {text}
            </p>
        </button>
    );
};

interface ButtonProps {
    text: string;
    onClick: () => any;
}

export default Button;
