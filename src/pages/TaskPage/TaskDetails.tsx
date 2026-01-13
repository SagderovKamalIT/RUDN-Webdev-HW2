import { Box, Typography } from "@mui/material";

interface TaskDetailsProps {
  title: string;
  description: string | null;
  createdAtText: string;
}

const TaskDetails = ({ title, description, createdAtText }: TaskDetailsProps) => (
  <>
    <Box>
      <Typography variant="subtitle2" color="text.secondary">
        Название
      </Typography>
      <Typography variant="h6">{title}</Typography>
    </Box>

    <Box>
      <Typography variant="subtitle2" color="text.secondary">
        Описание
      </Typography>
      <Typography variant="body1">
        {description || "Описание отсутствует"}
      </Typography>
    </Box>

    <Box>
      <Typography variant="subtitle2" color="text.secondary">
        Дата создания
      </Typography>
      <Typography variant="body2">{createdAtText}</Typography>
    </Box>
  </>
);

export default TaskDetails;
