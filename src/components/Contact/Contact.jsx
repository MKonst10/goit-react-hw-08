import styles from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <p className={styles.infoItem}>
          <FaUser />
          {data.name}
        </p>
        <p className={styles.infoItem}>
          <FaPhone />
          {data.number}
        </p>
      </div>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(data.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
