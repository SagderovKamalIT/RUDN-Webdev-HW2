import { Box, CircularProgress, Typography } from "@mui/material";
import { useTasks } from "../../hooks/useTasks";
import BoardColumn from "./BoardColumn";
import type { Task } from "../../types/task";

const BoardPage = () => {
  const { data: tasks, isLoading, isError } = useTasks();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Ошибка загрузки задач
        </Typography>
      </Box>
    );
  }

  const tasksToDo = tasks?.filter((t: Task) => t.status === 0) || [];
  const tasksInProgress = tasks?.filter((t: Task) => t.status === 1) || [];
  const tasksDone = tasks?.filter((t: Task) => t.status === 2) || [];

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        backgroundColor: "#f5f5f5",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        <BoardColumn title="К выполнению" color="error" tasks={tasksToDo} />
        <BoardColumn title="В работе" color="warning" tasks={tasksInProgress} />
        <BoardColumn title="Выполнено" color="success" tasks={tasksDone} />
      </Box>
    </Box>
  );
};

export default BoardPage;
