import { useState, type FormEvent } from "react";
import { Input, Button } from "../../../shared/lib";
import styles from "./CreateAccountForm.module.scss";
import { ReactComponent as UserInputIcon } from "../assets/User.svg";
import { ReactComponent as EmailInputIcon } from "../assets/Email.svg";
import { ReactComponent as PasswordInputIcon } from "../assets/Password.svg";
import { ReactComponent as LockPasswordInputIcon } from "../assets/LockPassword.svg";

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const newErrors = {
            username:
                username.length < 3
                    ? "Username must be at least 3 characters"
                    : username.length > 12
                      ? "Username must be at most 12 characters"
                      : "",
            email: email.includes("@") ? "" : "Invalid email",
            password:
                password.length < 8
                    ? "Password must be at least 8 characters"
                    : password.length > 12
                      ? "Password must be at most 12 characters"
                      : "",
            confirmPassword:
                password !== confirmPassword ? "Passwords must match" : "",
        };
        setErrors(newErrors);
        if (Object.values(newErrors).every((e) => e === "")) {
            console.log(username, email, password);

            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    };

    return (
        <form className={styles.Form} onSubmit={handleSubmit}>
            <Input
                type="text"
                variant="Primary"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
                LeftIcon={EmailInputIcon}
            />
            {errors.email && <p className={styles.Error}>{errors.email}</p>}

            <Input
                type="password"
                variant="Primary"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setConfirmPassword(e.target.value)}
                LeftIcon={PasswordInputIcon}
                PasswordIcon={LockPasswordInputIcon}
                passwordToggle
            />
            {errors.confirmPassword && (
                <p className={styles.Error}>{errors.confirmPassword}</p>
            )}

            <Button variant="Primary" size="xl" leftIcon type="submit">
                Create account
            </Button>
        </form>
    );
};

export default CreateAccountForm;
