import { useState, type ChangeEvent, type FormEvent } from "react";
import { Input, Button } from "../../../shared/lib";
import styles from "./EmailSubscribeForm.module.scss";

const EmailSubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (value: string) =>
        value.includes("@") ? "" : "Invalid email";

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setError(validateEmail(value));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (error || !email.trim()) return;

        console.log(email);
        setEmail("");
        setError("");
    };

    const isSubmitDisabled = !!error || email.trim() === "";

    return (
        <form className={styles.Form} onSubmit={handleSubmit}>
            <Input
                type="email"
                variant="Secondary"
                placeholder="Enter your email here"
                value={email}
                onChange={handleEmailChange}
            />
            {error && <p className={styles.Error}>{error}</p>}
            <Button
                variant="Primary"
                size="l"
                type="submit"
                disabled={isSubmitDisabled}
                className={styles.Button}
            >
                Subscribe
            </Button>
        </form>
    );
};

export default EmailSubscribeForm;
