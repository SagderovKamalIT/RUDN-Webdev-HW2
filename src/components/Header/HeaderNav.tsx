import { Box } from "@mui/material";
import HeaderButton from "./HeaderButton";

const HeaderNav = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <HeaderButton label="Задачи" path="/board" />
      <HeaderButton label="Создать" path="/create" />
    </Box>
  );
};

export default HeaderNav;
