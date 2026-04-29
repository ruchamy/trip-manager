import { useNavigate } from "react-router-dom";
import styles from "./homePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <h1 className={styles.title}>הרשמה לטיול השנתי</h1>
        <p className={styles.subtitle}>בחרו את סוג ההרשמה</p>

        <div className={styles.buttons}>
          <button
            className={`${styles.btn} ${styles.students}`}
            onClick={() => navigate("/student/register")}
          >
            תלמידים
          </button>

          <button
            className={`${styles.btn} ${styles.teachers}`}
            onClick={() => navigate("/teacher/register")}
          >
            מורים
          </button>
        </div>
      </div>
    </div>
  );
}