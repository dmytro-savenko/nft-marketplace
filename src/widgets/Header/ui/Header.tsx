import { Button } from "../../../shared/lib";
import Storefront from "../../../shared/assets/Storefront.svg?react";
import UserIcon from "../../../shared/assets/User.svg?react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Storefront}>
                <Storefront />
                <h1 className={styles.Storefront_title}>NFT Marketplace</h1>
            </div>
            <nav className={styles.Navbar}>
                <Button variant="Secondary" size="s" type="button">
                    Marketplace
                </Button>
                <Button variant="Secondary" size="s" type="button">
                    Rankings
                </Button>
                <Button variant="Secondary" size="s" type="button">
                    Connect a wallet
                </Button>
                <Button variant="Primary" size="m" type="button">
                    <UserIcon />
                    Sign Up
                </Button>
            </nav>
        </header>
    );
};

export default Header;
