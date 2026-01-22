import { type ReactNode } from "react";
import Header from "../../widgets/Header/ui/Header";
import Footer from "../../widgets/Footer/ui/Footer";
import styles from "./Layout.module.scss";

interface Layout {
    children: ReactNode;
}

const Layout = ({ children }: Layout) => {
    return (
        <div className={styles.Layout}>
            <Header />
            <main className={styles.Main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
