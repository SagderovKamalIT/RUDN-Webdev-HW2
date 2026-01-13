import { Box, Paper, Stack, Divider } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateTask } from "../../hooks/useTasks";
import TaskForm from "./TaskForm";
import FormHeader from "./FormHeader";
import FormActions from "./FormActions";

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
          <FormHeader />
          <Divider />
          <TaskForm
            title={title}
            setTitle={setTitle}
            titleError={titleError}
            setTitleError={setTitleError}
            description={description}
            setDescription={setDescription}
          />
          <FormActions
            createTask={createTask}
            onSubmit={handleSubmit}
            onCancel={() => navigate("/board")}
          />
        </Stack>
      </Paper>
    </Box>
  );
};

export default CreateTaskPage;
