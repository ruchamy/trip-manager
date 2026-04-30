import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import TeacherAuthPage from "../pages/TeacherAuthPage";
import Login from "../faetures/teacher/login/components/login";
import TeacherRegister from "../faetures/teacher/Register/components/teacherRegister";
import StudentRegisterPage from "../pages/StudentRegisterPage";
import ListPage from "../pages/ListPage";
import NotFoundPage from "../pages/NotFoundPage";
import LocationSystemPage from "../pages/LocationSystemPage";
import ProtectedRoute from "./ProtectedRoute";
import StudentRegister from "../faetures/student/components/studentRegister";
import SuccessPage from "../pages/SuccessPage";
import StudentsList from "../faetures/teacher/students-list/components/StudentsList";
import TeachersList from "../faetures/teacher/teachers-list/components/TeachersList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "student",
                element: <StudentRegisterPage />,
                children: [
                    {
                        path: "register",
                        element: <StudentRegister />,
                    },
                ],
            },
            {
                path: "teacher",
                element: <TeacherAuthPage />,
                children: [
                    {
                        path: "register",
                        element: <TeacherRegister />
                    },
                    {
                        path: "login",
                        element: <Login />
                    }],
            },
            {
                path: "list/",
                element: (
                    <ProtectedRoute>
                        <ListPage />
                    </ProtectedRoute>),
                children: [
                    {
                        path: "my-students",
                        element: <StudentsList mode="my" />,
                    },
                    {
                        path: "students",
                        element: <StudentsList mode="all" />,
                    },
                    {
                        path: "teachers",
                        element: <TeachersList />,
                    }]

            },
            {
                path: "location-system",
                element: <LocationSystemPage />
            },
            {
                path: "success",
                element: <SuccessPage />,
            },

            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);