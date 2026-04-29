import type { Student } from "../../faetures/student/types/student.types";
import type { Teacher } from "../../faetures/teacher/types/teacher.type";
import styles from "./List-view.module.css";
type DataProps = {
  type: "teacher" | "student";
  className?: string;
  items: Teacher[]|Student[];
}

export default function ListView({
  type,
  className,
  items,
}: DataProps) {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {type === "teacher" ? "רשימת המורים" :  (className ? " תלמידים בכיתה " +className : "רשימת התלמידים")}
      </h1>

      <div className={styles.list}>
        
        {items.length === 0 ?
        <div className={styles.empty}>לא נרשמו {type === "teacher" ? "מורים" : "תלמידים"}</div> :
         items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.name}>
              {item.firstName} {item.lastName}
            </div>

            <div className={styles.id}>
              ת"ז: {item.identityNumber}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}