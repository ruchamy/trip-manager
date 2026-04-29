import { Outlet } from "react-router-dom";
import Header from "../shared/components/header";
import styles from "./MainLayout.module.css";

export default function Layout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}