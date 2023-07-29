import { NavLink, Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <NavLink to='/'><Logo /></NavLink>
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}