import { Outlet } from "react-router-dom";
import Header from "../shared/components/header";
import styles from "./MainLayout.module.css";
import DistanceAlert from "../faetures/distance-alert/components/distanceAlert";

export default function Layout() {

  return (
    <div className={styles.appLayout}>
      <DistanceAlert />
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}