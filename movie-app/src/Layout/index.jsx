import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import style from "./index.module.css";

function Layout({ children }) {
    return (
        <>
        <Navbar />
        <div className={style.container}>{children}</div>
        <Footer />
        </>
    );
}

export default Layout;