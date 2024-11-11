import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/selectors.js";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps.js";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <p style={{ color: "white" }}>An error {error} occured</p>}
      <ContactList />
    </div>
  );
}

export default App;
