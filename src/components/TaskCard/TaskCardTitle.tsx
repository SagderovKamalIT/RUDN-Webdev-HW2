import { Typography } from "@mui/material";

type TaskCardTitleProps = {
  title: string;
};

const TaskCardTitle = ({ title }: TaskCardTitleProps) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontWeight: 500,
        color: "text.primary",
        lineHeight: 1.6,
        fontSize: "0.95rem",
      }}
    >
      {title}
    </Typography>
  );
};

export default TaskCardTitle;
