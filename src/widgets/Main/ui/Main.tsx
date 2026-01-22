import { CreateAccountForm } from "../../../features/create-accounte/index";
import Cosmo from "../../../assets/image/hero-image.png";
import styles from "./Main.module.scss";

const Main = () => {
    return (
        <main className={styles.Hero}>
            <div className={styles.Hero_image}>
                <img src={Cosmo} alt="Futuristic space" />
            </div>
            <div className={styles.Form}>
                <div className={styles.Form_info}>
                    <h2 className={styles.Form_title}>Create account</h2>
                    <p className={styles.Form_text}>
                        Welcome! enter your details and start creating,
                        collecting and selling NFTs.
                    </p>
                </div>
                <CreateAccountForm />
            </div>
        </main>
    );
};

export default Main;
