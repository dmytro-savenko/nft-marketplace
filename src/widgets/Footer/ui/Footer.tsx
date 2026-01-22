import { EmailSubscribeForm } from "../../../features/email-subscribe/index";
import Storefront from "../../../shared/assets/Storefront.svg?react";
import DiscordLogo from "../assets/DiscordLogo.svg?react";
import YoutubeLogo from "../assets/YoutubeLogo.svg?react";
import TwitterLogo from "../assets/TwitterLogo.svg?react";
import InstagramLogo from "../assets/InstagramLogo.svg?react";
import Divider from "../assets/Divider.svg?react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <div className={styles.Marketplace}>
                    <div className={styles.Marketplace_logo}>
                        <Storefront />
                        <h3 className={styles.Footer_title}>NFT Marketplace</h3>
                    </div>
                    <div className={styles.Footer_info}>
                        <p className={styles.Footer_text}>
                            NFT marketplace UI created with Anima for Figma.
                        </p>
                        <div className={styles.Market_community}>
                            <p className={styles.Footer_text}>
                                Join our community
                            </p>
                            <div className={styles.Footer_icons}>
                                <DiscordLogo />
                                <YoutubeLogo />
                                <TwitterLogo />
                                <InstagramLogo />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Explore}>
                    <h3 className={styles.Footer_title}>Explore</h3>
                    <div className={styles.Footer_info}>
                        <p className={styles.Footer_text}>Marketplace</p>
                        <p className={styles.Footer_text}>Rankings</p>
                        <p className={styles.Footer_text}>Connect a wallet</p>
                    </div>
                </div>
                <div className={styles.Join}>
                    <h3 className={styles.Footer_title}>
                        Join our weekly digest
                    </h3>
                    <div className={styles.Subscribe_form}>
                        <p className={styles.Footer_text}>
                            Get exclusive promotions & updates <br /> straight
                            to your inbox.
                        </p>
                        <EmailSubscribeForm />
                    </div>
                </div>
            </div>
            <div className={styles.Company}>
                <Divider />
                <p className={styles.Company_sign}>
                    Ⓒ NFT Market. Use this template freely.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
