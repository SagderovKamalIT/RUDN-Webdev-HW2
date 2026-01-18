import {
  Typography,
  Box,
  Paper,
  Stack,
  CircularProgress,
  Divider,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useTask, useUpdateTaskStatus, useDeleteTask } from "../../hooks/useTasks";
import type { TaskStatus } from "../../types/task";
import TaskHeader from "./TaskHeader";
import TaskDetails from "./TaskDetails";
import TaskStatusButtons from "./TaskStatusButtons";
import TaskActions from "./TaskActions";

interface StatusOption {
  value: TaskStatus;
  label: string;
  color: "warning" | "success" | "error" | "info" | "primary" | "secondary";
}

const TaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskId = Number(id);

  const { data: task, isLoading, isError } = useTask(taskId);
  const updateStatus = useUpdateTaskStatus();
  const deleteTask = useDeleteTask();

  const statuses: StatusOption[] = [
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
          {statusInfo && (
            <TaskHeader
              taskId={task.id}
              statusLabel={statusInfo.label}
              statusColor={statusInfo.color}
            />
          )}

          <Divider />

          <TaskDetails
            title={task.title}
            description={task.description}
            createdAtText={createdAtText}
          />

          <Divider />

          <TaskStatusButtons
            currentStatus={task.status}
            statuses={statuses}
            onStatusChange={handleStatusChange}
          />

          <TaskActions
            onGoBack={() => navigate(-1)}
            onDelete={handleDelete}
            isDeleting={deleteTask.isPending}
          />
        </Stack>
      </Paper>
    </Box>
  );
};

export default TaskPage;
