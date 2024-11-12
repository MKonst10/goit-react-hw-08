import clsx from "clsx";
import styles from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className={styles.navigation}>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
        to="/register"
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
