import { AppBar, Toolbar, Typography, Box, Switch } from "@mui/material";
import { DarkMode } from "@mui/icons-material";
import { LightMode } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { toggleMode } from "../redux/mode";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <AppBar color="primary" sx={{ minHeight: "unset" }} position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          color="cardBackground"
          sx={{ display: "flex", alignItems: "center", fontWeight: "400" }}
          variant="body2"
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5625 0V0.605966H10.3731L19.4005 24.0676L28.6008 0.605966H24.6723V0H33V0.605966H29.2536L16.9639 32H15.6992L3.66277 0.605969H0V0H14.5625Z"
              fill="#121212"
            />
          </svg>
          iral Nation
        </Typography>

        <Box display="flex" alignItems="center">
          <LightMode sx={{ color: "#212121" }} />
          <Switch onClick={() => dispatch(toggleMode())} />
          <DarkMode sx={{ color: "#fdffdf" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
