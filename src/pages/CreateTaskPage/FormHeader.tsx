import { Box, Typography } from "@mui/material";

const FormHeader = () => (
  <Box>
    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
      Создание задачи
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Заполните название и при необходимости добавьте описание.
    </Typography>
  </Box>
);

export default FormHeader;
