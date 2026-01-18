import { Typography } from "@mui/material";

type TaskCardIdProps = {
  id: number;
};

const TaskCardId = ({ id }: TaskCardIdProps) => {
  return (
    <Typography
      variant="body2"
      sx={{
        fontWeight: 600,
        backgroundColor: "#e3f2fd",
        color: "#1976d2",
        px: 1.5,
        py: 0.5,
        borderRadius: 1,
        fontSize: "0.8rem",
        display: "inline-block",
      }}
    >
      #{id}
    </Typography>
  );
};

export default TaskCardId;
