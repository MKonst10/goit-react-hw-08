import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const addContactSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Maximum 50 characters long"),
  number: Yup.string()
    .required("Number is required")
    .matches(/^\d+$/, "Only digits are allowed")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Maximum 50 characters long"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (values.name && values.number) {
      const newContact = {
        name: values.name,
        number: values.number,
      };
      actions.resetForm();
      dispatch(addContact(newContact));
    }
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={addContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.inputName}>Name</span>
          <Field className={styles.field} type="text" name="name" />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </label>
        <label className={styles.label}>
          <span className={styles.inputName}>Number</span>
          <Field className={styles.field} type="text" name="number" />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
