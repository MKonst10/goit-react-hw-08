import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

const registerUserSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Must be at least 3 characters long")
    .max(20, "Maximum 20 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 7 characters")
    .max(15, "Password must be less than 15 characters")
    .required("Password is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span className={styles.inputName}>Name</span>
            <Field className={styles.field} type="text" name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Email</span>
            <Field className={styles.field} type="text" name="email" />
            <ErrorMessage
              className={styles.error}
              name="email"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <Field className={styles.field} type="password" name="password" />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="span"
            />
          </label>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
