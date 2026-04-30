import ListView from "../../../../shared/components/list-view";
import type { Teacher } from "../../types/teacher.type";
import { useTeachers } from "../hooks/useTeachersList";
type DataProps = {
  type: "teacher" | "student";
  className?: string;
  items: Teacher[];
}

export default function TeachersList() {
  const Teachers = useTeachers();

  const TeachersData = Teachers.data;

  const list: DataProps = {
    type: "teacher",
    className: TeachersData?.[0]?.class?.name || "",
    items: TeachersData ?? [],
  };
  return (
    <div>
      <ListView {...list} />
    </div>
  )
}

