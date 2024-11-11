import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const buildCssClasses = ({ isActive }) => {
  clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink className={buildCssClasses} to="/login">
        Login
      </NavLink>
      <NavLink className={buildCssClasses} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
