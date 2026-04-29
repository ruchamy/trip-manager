import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from "./ListPage.module.css";
import { useLocation } from "react-router-dom";

const ListPage: React.FC = () => {
  const location = useLocation(); // ✅ בפנים

  const getIndex = () => {
    if (location.pathname.includes("my-students")) return 0;
    if (location.pathname.includes("students")) return 1;
    if (location.pathname.includes("teachers")) return 2;
    return 0;
  };

  const index = getIndex();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.tabs}>
          <div
            className={styles.indicator}
            style={{ transform: `translateX(-${index * 100}%)` }}
          />

          <NavLink to="my-students" className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.active : ""}`
          }>
            הכיתה שלי
          </NavLink>

          <NavLink to="students" className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.active : ""}`
          }>
            כלל התלמידים
          </NavLink>

          <NavLink to="teachers" className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.active : ""}`
          }>
            כלל המורים
          </NavLink>
        </div>

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
