import { Stack, TextField } from "@mui/material";

interface TaskFormProps {
  title: string;
  setTitle: (value: string) => void;
  titleError: boolean;
  setTitleError: (value: boolean) => void;
  description: string;
  setDescription: (value: string) => void;
}

const TaskForm = ({
  title,
  setTitle,
  titleError,
  setTitleError,
  description,
  setDescription,
}: TaskFormProps) => (
  <Stack spacing={2}>
    <TextField
      fullWidth
      label="Название"
      value={title}
      onChange={(event) => {
        setTitle(event.target.value);
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
      onChange={(event) => setDescription(event.target.value)}
      multiline
      rows={4}
      helperText="Кратко опишите задачу (необязательно)"
    />
  </Stack>
);

export default TaskForm;
