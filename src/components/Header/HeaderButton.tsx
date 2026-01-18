import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router";

type HeaderButtonProps = {
  label: string;
  path: string;
};

const HeaderButton = ({ label, path }: HeaderButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <Button
      onClick={() => navigate(path)}
      sx={{
        color: isActive ? "#1976d2" : "#757575",
        textTransform: "none",
        px: 3,
        py: 1,
        fontSize: "1rem",
        fontWeight: isActive ? 600 : 500,
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.04)",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default HeaderButton;
