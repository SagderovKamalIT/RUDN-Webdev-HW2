import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { useNavigate, useLocation } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      }}
    >
      <Toolbar sx={{ py: 2, px: { xs: 3, md: 4 } }}>
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

        <Box sx={{ display: "flex", gap: 0 }}>
          <Button
            onClick={() => navigate("/board")}
            sx={{
              color: location.pathname === "/board" ? "#1976d2" : "#757575",
              textTransform: "none",
              px: 3,
              py: 1,
              fontSize: "1rem",
              fontWeight: location.pathname === "/board" ? 600 : 500,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            Задачи
          </Button>
          <Button
            onClick={() => navigate("/create")}
            sx={{
              color: location.pathname === "/create" ? "#1976d2" : "#757575",
              textTransform: "none",
              px: 3,
              py: 1,
              fontSize: "1rem",
              fontWeight: location.pathname === "/create" ? 600 : 500,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            Создать
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
