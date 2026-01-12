import BoardPage from "./pages/BoardPage/BoardPage";
import CreateTaskPage from "./pages/CreateTaskPage/CreateTaskPage";
import TaskPage from "./pages/TaskPage/TaskPage";

export const routes = [
  {
    path: "/board",
    element: <BoardPage />,
  },
  {
    path: "/create",
    element: <CreateTaskPage />,
  },
  {
    path: "/task/:id",
    element: <TaskPage />,
  },
];