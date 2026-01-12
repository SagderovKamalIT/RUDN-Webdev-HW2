import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <DashboardIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Доска задач</Typography>
        </Box>

        <Button color="inherit" onClick={() => navigate("/board")}>
          Задачи
        </Button>
        <Button color="inherit" onClick={() => navigate("/create")}>
          Создать
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
