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
      elevation={2}
      sx={{
        mb: 2,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          elevation: 6,
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography
            variant="body2"
            color="primary"
            sx={{
              fontWeight: 600,
              backgroundColor: "primary.light",
              color: "primary.contrastText",
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontSize: "0.75rem",
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
            lineHeight: 1.5,
          }}
        >
          {task.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
