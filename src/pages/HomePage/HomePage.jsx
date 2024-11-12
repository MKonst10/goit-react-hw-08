import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Welcome to Web Phonebook</h2>
      <p className={styles.info}>
        This is where you can store your contacts completely confidentially
      </p>
    </div>
  );
};

export default HomePage;
