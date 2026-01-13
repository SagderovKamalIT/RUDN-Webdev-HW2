import { Typography, Box, Paper, CircularProgress, Chip } from "@mui/material";
import { useTasks } from "../../hooks/useTasks";
import TaskCard from "../../components/TaskCard/TaskCard";
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

  const tasksToDo = tasks?.filter((task: Task) => task.status === 0) || [];
  const tasksInProgress = tasks?.filter((task: Task) => task.status === 1) || [];
  const tasksDone = tasks?.filter((task: Task) => task.status === 2) || [];

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
        <Box sx={{ flex: 1 }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              borderTop: "4px solid",
              borderColor: "error.main",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mr: 1 }}>
                К выполнению
              </Typography>
              <Chip
                label={tasksToDo.length}
                size="small"
                color="error"
                sx={{ fontWeight: 600 }}
              />
            </Box>
            {tasksToDo.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Нет задач
              </Typography>
            ) : (
              tasksToDo.map((task: Task) => (
                <TaskCard key={task.id} task={task} />
              ))
            )}
          </Paper>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              borderTop: "4px solid",
              borderColor: "warning.main",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mr: 1 }}>
                В работе
              </Typography>
              <Chip
                label={tasksInProgress.length}
                size="small"
                color="warning"
                sx={{ fontWeight: 600 }}
              />
            </Box>
            {tasksInProgress.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Нет задач
              </Typography>
            ) : (
              tasksInProgress.map((task: Task) => (
                <TaskCard key={task.id} task={task} />
              ))
            )}
          </Paper>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              borderTop: "4px solid",
              borderColor: "success.main",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mr: 1 }}>
                Выполнено
              </Typography>
              <Chip
                label={tasksDone.length}
                size="small"
                color="success"
                sx={{ fontWeight: 600 }}
              />
            </Box>
            {tasksDone.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Нет задач
              </Typography>
            ) : (
              tasksDone.map((task: Task) => (
                <TaskCard key={task.id} task={task} />
              ))
            )}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default BoardPage;
