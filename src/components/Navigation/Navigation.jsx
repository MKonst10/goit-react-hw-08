import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const buildCssClasses = ({ isActive }) => {
  clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <NavLink className={buildCssClasses} to="/">
        Homepage
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
