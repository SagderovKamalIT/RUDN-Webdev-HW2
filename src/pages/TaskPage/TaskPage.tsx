import {
  Typography,
  Box,
  Paper,
  Stack,
  Button,
  Chip,
  CircularProgress,
  Divider,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useTask, useUpdateTaskStatus, useDeleteTask } from "../../hooks/useTasks";
import type { TaskStatus } from "../../types/task";

const TaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskId = Number(id);

  const { data: task, isLoading, isError } = useTask(taskId);
  const updateStatus = useUpdateTaskStatus();
  const deleteTask = useDeleteTask();

  const statuses: { value: TaskStatus; label: string; color: "default" | "warning" | "success" | "error" | "info" }[] = [
    { value: 0, label: "К выполнению", color: "error" },
    { value: 1, label: "В работе", color: "warning" },
    { value: 2, label: "Выполнено", color: "success" },
  ];

  const handleStatusChange = (status: TaskStatus) => {
    if (!taskId) return;
    updateStatus.mutate({ id: taskId, status });
  };

  const handleDelete = () => {
    if (!taskId) return;
    deleteTask.mutate(taskId, {
      onSuccess: () => navigate("/board"),
    });
  };

  if (!taskId) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="error">
          Неверный номер задачи
        </Typography>
      </Box>
    );
  }

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
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !task) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="error">
          Задача не найдена
        </Typography>
      </Box>
    );
  }

  const statusInfo = statuses.find((item) => item.value === task.status);
  const createdAtText =
    task.createdAt instanceof Date
      ? task.createdAt.toLocaleString()
      : new Date(task.createdAt).toLocaleString();

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        backgroundColor: "#f5f5f5",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 3, maxWidth: 800, mx: "auto", borderRadius: 2 }}
      >
        <Stack spacing={2}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Задача #{task.id}
            </Typography>
            {statusInfo && (
              <Chip
                label={statusInfo.label}
                color={statusInfo.color}
                size="small"
              />
            )}
          </Box>

          <Divider />

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Название
            </Typography>
            <Typography variant="h6">{task.title}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Описание
            </Typography>
            <Typography variant="body1">
              {task.description || "Описание отсутствует"}
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Дата создания
            </Typography>
            <Typography variant="body2">{createdAtText}</Typography>
          </Box>

          <Divider />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            {statuses.map((item) => (
              <Button
                key={item.value}
                variant={task.status === item.value ? "contained" : "outlined"}
                color={item.color}
                onClick={() => handleStatusChange(item.value)}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Box>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ mr: 1 }}
              onClick={() => navigate(-1)}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
              disabled={deleteTask.isPending}
            >
              Удалить
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default TaskPage;
