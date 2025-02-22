import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/Home";
import AddTask from "../../pages/AddTask/AddTask";
import TaskBoard from "../../pages/TaskBoard/TaskBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-task",
        element: <AddTask />,
      },
      {
        path: "/task-board",
        element: <TaskBoard />,
      },
    ],
  },
]);

export default router;
