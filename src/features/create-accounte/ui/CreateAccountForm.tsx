import { useState, type ChangeEvent, type FormEvent } from "react";
import { Input, Button } from "../../../shared/lib";
import styles from "./CreateAccountForm.module.scss";
import UserInputIcon from "../../../shared/assets/User.svg?react";
import EmailInputIcon from "../assets/Email.svg?react";
import PasswordInputIcon from "../assets/Password.svg?react";
import LockPasswordInputIcon from "../assets/LockPassword.svg?react";
import CreateAccountButtonIcon from "../assets/CreateAccount.svg?react";

const CreateAccountForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const validateUsername = (value: string) => {
        if (value.length < 3) return "Username must be at least 3 characters";
        if (value.length > 12) return "Username must be at most 12 characters";
        return "";
    };

    const validateEmail = (value: string) =>
        value.includes("@") ? "" : "Invalid email";

    const validatePassword = (value: string) => {
        if (value.length < 8) return "Password must be at least 8 characters";
        if (value.length > 12) return "Password must be at most 12 characters";
        return "";
    };

    const validateConfirmPassword = (value: string, password: string) =>
        value !== password ? "Passwords must match" : "";

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUsername(value);
        setErrors((prev) => ({
            ...prev,
            username: validateUsername(value),
        }));
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setErrors((prev) => ({
            ...prev,
            email: validateEmail(value),
        }));
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        setErrors((prev) => ({
            ...prev,
            password: validatePassword(value),
            confirmPassword: validateConfirmPassword(confirmPassword, value),
        }));
    };

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setErrors((prev) => ({
            ...prev,
            confirmPassword: validateConfirmPassword(value, password),
        }));
    };

    const isSubmitDisabled =
        !!errors.username ||
        !!errors.email ||
        !!errors.password ||
        !!errors.confirmPassword ||
        !username.trim() ||
        !email.trim() ||
        !password.trim() ||
        !confirmPassword.trim();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isSubmitDisabled) return;

        console.log({
            username,
            email,
            password,
        });

        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.Inputs}>
                <Input
                    type="text"
                    variant="Primary"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    LeftIcon={UserInputIcon}
                />

                {errors.username && (
                    <p className={styles.Error}>{errors.username}</p>
                )}

                <Input
                    type="email"
                    variant="Primary"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    LeftIcon={EmailInputIcon}
                />
                {errors.email && <p className={styles.Error}>{errors.email}</p>}

                <Input
                    type="password"
                    variant="Primary"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    LeftIcon={PasswordInputIcon}
                    PasswordIcon={LockPasswordInputIcon}
                    passwordToggle
                />
                {errors.password && (
                    <p className={styles.Error}>{errors.password}</p>
                )}

                <Input
                    type="password"
                    variant="Primary"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    LeftIcon={PasswordInputIcon}
                    PasswordIcon={LockPasswordInputIcon}
                    passwordToggle
                />
                {errors.confirmPassword && (
                    <p className={styles.Error}>{errors.confirmPassword}</p>
                )}
            </div>

            <div className={styles.Button_wrapper}>
                <Button
                    variant="Primary"
                    size="xl"
                    LeftIcon={CreateAccountButtonIcon}
                    type="submit"
                    disabled={isSubmitDisabled}
                >
                    Create account
                </Button>
            </div>
        </form>
    );
};

export default CreateAccountForm;
