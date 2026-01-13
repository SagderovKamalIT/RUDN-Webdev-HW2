import { Card, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router";
import type { Task } from "../../types/task";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/task/${task.id}`);
  };

  return (
    <Card
      elevation={1}
      sx={{
        mb: 2,
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid #e0e0e0",
        "&:hover": {
          elevation: 4,
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          borderColor: "#1976d2",
        },
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        <Box sx={{ mb: 1.5 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              backgroundColor: "#e3f2fd",
              color: "#1976d2",
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontSize: "0.8rem",
              display: "inline-block",
            }}
          >
            #{task.id}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: "text.primary",
            lineHeight: 1.6,
            fontSize: "0.95rem",
          }}
        >
          {task.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
