import ListView from "../../../../shared/components/list-view";
import type { Student } from "../../../student/types/student.types";
import type { Teacher } from "../../types/teacher.type";
import { useStudents, useStudentsByCurrentTeacher } from "../hooks/useStudentsList";
type DataProps = {
  type: "teacher" | "student";
  className?: string;
  items: Teacher[] | Student[];
}

export default function StudentsList({ mode: mode }: { mode: "my" | "all" }) {
  const myStudents = useStudentsByCurrentTeacher();
  const allStudents = useStudents();

  const studentsData = mode === "my"
    ? myStudents.data
    : mode === "all"
      ? allStudents.data
      : [];

  const list: DataProps = {
    type: "student",
    className: mode === "my" ? studentsData?.[0]?.class?.name || "" : "",
    items: studentsData ?? [],
  };


  return (
    <div>
      <ListView {...list} />
    </div>
  )
}

