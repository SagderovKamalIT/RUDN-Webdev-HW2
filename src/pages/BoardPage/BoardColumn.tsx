import { Box, Paper, Typography, Chip } from "@mui/material";
import TaskList from "./TaskList";
import type { Task } from "../../types/task";

interface BoardColumnProps {
  title: string;
  color: "error" | "warning" | "success";
  tasks: Task[];
}

const colorMap: Record<string, string> = {
  error: "error.main",
  warning: "warning.main",
  success: "success.main",
};

const BoardColumn = ({ title, color, tasks }: BoardColumnProps) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
          borderTop: "4px solid",
          borderColor: colorMap[color],
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mr: 1 }}>
            {title}
          </Typography>
          <Chip label={tasks.length} size="small" color={color} sx={{ fontWeight: 600 }} />
        </Box>

        <TaskList tasks={tasks} />
      </Paper>
    </Box>
  );
};

export default BoardColumn;
