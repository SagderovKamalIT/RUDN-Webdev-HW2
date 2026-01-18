import { Stack, Button } from "@mui/material";
import type { TaskStatus } from "../../types/task";

interface StatusOption {
  value: TaskStatus;
  label: string;
  color: "warning" | "success" | "error" | "info" | "primary" | "secondary";
}

interface TaskStatusButtonsProps {
  currentStatus: TaskStatus;
  statuses: StatusOption[];
  onStatusChange: (status: TaskStatus) => void;
}

const TaskStatusButtons = ({ currentStatus, statuses, onStatusChange }: TaskStatusButtonsProps) => (
  <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
    {statuses.map((item) => (
      <Button
        key={item.value}
        variant={currentStatus === item.value ? "contained" : "outlined"}
        color={item.color}
        onClick={() => onStatusChange(item.value)}
      >
        {item.label}
      </Button>
    ))}
  </Stack>
);

export default TaskStatusButtons;
