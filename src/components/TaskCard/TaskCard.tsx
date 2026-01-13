import { Card, CardContent, Box } from "@mui/material";
import { useNavigate } from "react-router";
import type { Task } from "../../types/task";
import TaskCardId from "./TaskCardId";
import TaskCardTitle from "./TaskCardTitle";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      elevation={1}
      onClick={() => navigate(`/task/${task.id}`)}
      sx={{
        mb: 2,
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid #e0e0e0",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          borderColor: "#1976d2",
        },
      }}
    >
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        <Box sx={{ mb: 1.5 }}>
          <TaskCardId id={task.id} />
        </Box>
        <TaskCardTitle title={task.title} />
      </CardContent>
    </Card>
  );
};

export default TaskCard;
