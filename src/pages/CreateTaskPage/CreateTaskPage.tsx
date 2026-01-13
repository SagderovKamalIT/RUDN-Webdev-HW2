import { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  CircularProgress,
  Stack,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useCreateTask } from "../../hooks/useTasks";

const CreateTaskPage = () => {
  const navigate = useNavigate();
  const createTask = useCreateTask();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);

  const handleSubmit = () => {
    if (!title.trim()) {
      setTitleError(true);
      return;
    }

    createTask.mutate(
      {
        title: title.trim(),
        description: description.trim() || null,
      },
      {
        onSuccess: () => {
          navigate("/board");
        },
      }
    );
  };

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 2,
          maxWidth: 640,
          width: "100%",
          borderTop: "4px solid",
          borderColor: "primary.main",
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
              Создание задачи
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Заполните название и при необходимости добавьте описание.
            </Typography>
          </Box>

          <Divider />

          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Название"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleError(false);
              }}
              error={titleError}
              helperText={titleError ? "Название обязательно" : "Например: Исправить баг в форме"}
              required
            />

            <TextField
              fullWidth
              label="Описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={4}
              helperText="Кратко опишите задачу (необязательно)"
            />
          </Stack>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={createTask.isPending}
              sx={{ flex: 1 }}
            >
              {createTask.isPending ? <CircularProgress size={24} /> : "Создать"}
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/board")}
              disabled={createTask.isPending}
            >
              Отмена
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CreateTaskPage;
