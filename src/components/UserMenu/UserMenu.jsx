import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <span>Hello, {user.name}!</span>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
