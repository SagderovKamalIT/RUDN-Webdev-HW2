import { Box, Typography, Chip } from "@mui/material";

interface TaskHeaderProps {
  taskId: number;
  statusLabel: string;
  statusColor: "warning" | "success" | "error" | "info" | "primary" | "secondary";
}

const TaskHeader = ({ taskId, statusLabel, statusColor }: TaskHeaderProps) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Typography variant="h5" sx={{ fontWeight: 600 }}>
      Задача #{taskId}
    </Typography>
    <Chip label={statusLabel} color={statusColor} size="small" />
  </Box>
);

export default TaskHeader;
