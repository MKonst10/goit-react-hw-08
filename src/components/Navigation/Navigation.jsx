import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const buildCssClasses = ({ isActive }) => {
  clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div>
      <NavLink className={buildCssClasses} to="/">
        Homepage
      </NavLink>
      <NavLink className={buildCssClasses} to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
