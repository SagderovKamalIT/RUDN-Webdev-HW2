import { Box, Button, CircularProgress } from "@mui/material";
import type { UseMutationResult } from "@tanstack/react-query";
import type { Task } from "../../types/task";

interface FormActionsProps {
  createTask: UseMutationResult<
    Task,
    unknown,
    { title: string; description: string | null },
    unknown
  >;
  onSubmit: () => void;
  onCancel: () => void;
}

const FormActions = ({ createTask, onSubmit, onCancel }: FormActionsProps) => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <Button
      variant="contained"
      onClick={onSubmit}
      disabled={createTask.isPending}
      sx={{ flex: 1 }}
    >
      {createTask.isPending ? <CircularProgress size={24} /> : "Создать"}
    </Button>
    <Button variant="outlined" onClick={onCancel} disabled={createTask.isPending}>
      Отмена
    </Button>
  </Box>
);

export default FormActions;
