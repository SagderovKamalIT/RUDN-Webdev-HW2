import { Typography, Box } from "@mui/material";
import { useParams } from "react-router";

const TaskPage = () => {
  const { id } = useParams();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Задача #{id}</Typography>
    </Box>
  );
}

export default TaskPage;
