import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.stars}>
        {[...Array(40)].map((_, i) => (
          <span key={i} className={styles.star}></span>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.errorCode}>
          <span className={styles.digit}>4</span>
          <span className={`${styles.digit} ${styles.spinning}`}>0</span>
          <span className={styles.digit}>4</span>
        </div>

        <h1 className={styles.title}>Page Not Found</h1>

        <p className={styles.description}>
          Sorry, the page you are looking for does not exist.
        </p>

        <button
          className={styles.backButton}
          onClick={() => navigate("/")}
        >
          Back Home
        </button>
      </div>

      <div className={styles.floatingObjects}>
        <div className={`${styles.object} ${styles.obj1}`}></div>
        <div className={`${styles.object} ${styles.obj2}`}></div>
        <div className={`${styles.object} ${styles.obj3}`}></div>
      </div>
    </div>
  );
};

export default NotFoundPage;