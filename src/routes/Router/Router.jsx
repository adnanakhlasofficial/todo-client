import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/Home";
import AddTask from "../../pages/AddTask/AddTask";
import TaskBoard from "../../pages/TaskBoard/TaskBoard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/task-board",
        element: (
          <PrivateRoute>
            <TaskBoard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
