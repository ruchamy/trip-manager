import React from 'react';
import styles from "./StudentRegisterPage.module.css"
import { Outlet } from 'react-router-dom';
const StudentRegisterPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentRegisterPage;
