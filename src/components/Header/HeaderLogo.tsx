import { Box, Typography } from "@mui/material";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { useNavigate } from "react-router";

const HeaderLogo = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        cursor: "pointer",
      }}
      onClick={() => navigate("/board")}
    >
      <ViewKanbanIcon
        sx={{
          mr: 1.5,
          fontSize: 32,
          color: "#1976d2",
        }}
      />
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: "#212121",
          fontSize: { xs: "1.5rem", md: "1.75rem" },
        }}
      >
        Доска задач
      </Typography>
    </Box>
  );
};

export default HeaderLogo;
