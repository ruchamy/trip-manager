import useDistanceAlert from "../hooks/useDistanceAlert";
import { GoAlertFill } from "react-icons/go"
import styles from "./distanceAlert.module.css";
export default function DistanceAlert() {
  const farStudents = useDistanceAlert();

  if (farStudents.length === 0) return null;
  return (
    <div className={styles.alert}>
      <GoAlertFill />
      תלמיד התרחק מעל 3 ק"מ
    </div>
  );
}