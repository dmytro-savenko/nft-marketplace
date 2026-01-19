import styles from "./Button.module.scss";
import clsx from "clsx";
import type React from "react";

type ButtonVariant = "Primary" | "Secondary";
type ButtonSize = "s" | "m" | "l" | "xl";
type ButtonType = "submit" | "button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    size: ButtonSize;
    leftIcon?: React.ReactNode;
    type: ButtonType;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
    variant = "Primary",
    size,
    leftIcon,
    type,
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={clsx(styles.Button, styles[variant], size, className)}
            {...props}
        >
            {leftIcon && <span className={styles.LeftIcon}>{leftIcon}</span>}
            <span>{children}</span>
        </button>
    );
};

export default Button;
