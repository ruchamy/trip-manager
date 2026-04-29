import { NavLink, Outlet } from "react-router-dom";
import styles from "./TeacherAuthPage.module.css";

const TeacherAuthPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        
        <div className={styles.tabs}>
          <NavLink
            to="/teacher/login"
            className={({ isActive }) =>
              `${styles.tab} ${isActive ? styles.active : ""}`
            }
          >
            התחברות
          </NavLink>

          <NavLink
            to="/teacher/register"
            className={({ isActive }) =>
              `${styles.tab} ${isActive ? styles.active : ""}`
            }
          >
            הרשמה
          </NavLink>
        </div>

        <div className={styles.content}>
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default TeacherAuthPage;