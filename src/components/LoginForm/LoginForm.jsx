import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";

const loginUserSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 7 characters")
    .max(15, "Password must be less than 15 characters")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
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
          <button type="submit" className={styles.loginButton}>
            Sign In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
