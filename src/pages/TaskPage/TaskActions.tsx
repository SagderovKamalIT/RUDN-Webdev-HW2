import { Box, Button } from "@mui/material";

interface TaskActionsProps {
  onGoBack: () => void;
  onDelete: () => void;
  isDeleting: boolean;
}

const TaskActions = ({ onGoBack, onDelete, isDeleting }: TaskActionsProps) => (
  <Box>
    <Button
      variant="outlined"
      color="inherit"
      sx={{ mr: 1 }}
      onClick={onGoBack}
    >
      Назад
    </Button>
    <Button
      variant="contained"
      color="error"
      onClick={onDelete}
      disabled={isDeleting}
    >
      Удалить
    </Button>
  </Box>
);

export default TaskActions;
