import styles from "./Button.module.scss";
import clsx from "clsx";
import type { FC, SVGProps } from "react";
import type React from "react";

type ButtonVariant = "Primary" | "Secondary";
type ButtonSize = "s" | "m" | "l" | "xl";
type ButtonType = "submit" | "button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    size: ButtonSize;
    LeftIcon?: FC<SVGProps<SVGSVGElement>>;
    type: ButtonType;
}

const Button = ({
    variant = "Primary",
    size,
    LeftIcon,
    type,
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={clsx(
                styles.Button,
                styles[variant],
                styles[size],
                className,
            )}
            {...props}
        >
            {LeftIcon && <LeftIcon />}
            <span className={styles.Children}>{children}</span>
        </button>
    );
};

export default Button;
