import { AppBar, Toolbar } from "@mui/material";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      }}
    >
      <Toolbar sx={{ py: 2, px: { xs: 3, md: 4 } }}>
        <HeaderLogo />
        <HeaderNav />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
