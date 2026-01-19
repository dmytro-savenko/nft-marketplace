import clsx from "clsx";
import styles from "./Input.module.scss";
import React, { useState, type InputHTMLAttributes } from "react";

type InputVariant = "Primary" | "Secondary";
type InputType = "text" | "email" | "password";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: InputType;
    variant: InputVariant;
    placeholder?: string;
    leftIcon?: React.ReactNode;
    passwordIcon?: React.ReactNode;
    passwordToggle?: boolean;
    className?: string;
}

const Input = ({
    value,
    onChange,
    type,
    variant,
    placeholder,
    leftIcon,
    passwordIcon,
    passwordToggle,
    className,
    ...props
}: InputProps) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = passwordToggle
        ? passwordVisibility
            ? "text"
            : "password"
        : type;
    return (
        <div className={styles.Wrapper}>
            {leftIcon && <span className={styles.LeftIcon}>{leftIcon}</span>}
            <input
                type={togglePasswordVisibility}
                className={clsx(styles.Input, styles[variant], className)}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
            {passwordToggle && (
                <span
                    className={styles.PasswordIcon}
                    onClick={() => setPasswordVisibility((p) => !p)}
                >
                    {passwordIcon}
                </span>
            )}
        </div>
    );
};

export default Input;
