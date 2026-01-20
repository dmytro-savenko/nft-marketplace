import clsx from "clsx";
import styles from "./Input.module.scss";
import React, {
    useState,
    type FC,
    type InputHTMLAttributes,
    type SVGProps,
} from "react";

type InputVariant = "Primary" | "Secondary";
type InputType = "text" | "email" | "password";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: InputType;
    variant: InputVariant;
    placeholder?: string;
    LeftIcon?: FC<React.SVGProps<SVGSVGElement>>;
    PasswordIcon?: FC<SVGProps<SVGSVGElement>>;
    passwordToggle?: boolean;
    className?: string;
}

const Input = ({
    value,
    onChange,
    type,
    variant,
    placeholder,
    LeftIcon,
    PasswordIcon,
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
            <span className={styles.LeftIcon}>{LeftIcon && <LeftIcon />}</span>
            <input
                type={togglePasswordVisibility}
                className={clsx(styles.Input, styles[variant], className)}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
            {
                <span
                    className={styles.PasswordIcon}
                    onClick={() => setPasswordVisibility((p) => !p)}
                >
                    {PasswordIcon && <PasswordIcon />}
                </span>
            }
        </div>
    );
};

export default Input;
