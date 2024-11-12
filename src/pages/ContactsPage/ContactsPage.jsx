import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ContactList from "../../components/ContactList/ContactList";
import styles from "./ContactsPage.module.css";

function ContactsPage() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
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
      {contacts && contacts.length > 0 ? (
        <ContactList />
      ) : (
        <div className={styles.contacts}>You don`t have any contacts yet</div>
      )}
    </div>
  );
}

export default ContactsPage;
