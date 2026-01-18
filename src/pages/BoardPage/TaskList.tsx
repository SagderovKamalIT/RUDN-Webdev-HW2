import { Typography } from "@mui/material";
import TaskCard from "../../components/TaskCard/TaskCard";
import type { Task } from "../../types/task";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  if (tasks.length === 0) {
    return <Typography variant="body2" color="text.secondary">Нет задач</Typography>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
