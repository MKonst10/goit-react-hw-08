import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";
import { selectFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const onSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onSearch} />
    </div>
  );
};

export default SearchBox;
