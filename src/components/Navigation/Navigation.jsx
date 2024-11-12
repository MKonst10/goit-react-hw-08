import clsx from "clsx";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.navigation}>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
        to="/"
      >
        Homepage
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.active)
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
