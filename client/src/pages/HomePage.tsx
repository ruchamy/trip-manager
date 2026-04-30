import { useNavigate } from "react-router-dom";
import styles from "./homePage.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function HomePage() {
  const navigate = useNavigate();
  const isMap = location.pathname === "/location-system";
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
        {
          !isMap && (<div className={styles.marker}>
            <button
              className={styles.icon}
              title='הצג על המפה את מיקומי התלמידים בזמן אמת במהלך הטיול'
            >
              <FaMapMarkerAlt
                size={100}
                onClick={() => navigate("/location-system")}
              />

            </button>
            <p
              className={styles.text}
              onClick={() => navigate("/location-system")}
            >
              הצג על המפה את מיקומי התלמידים בזמן אמת במהלך הטיול
            </p>
          </div>
          )
        }
      </div>

    </div>
  );
}