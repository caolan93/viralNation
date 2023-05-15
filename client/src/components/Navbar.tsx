import { AppBar, Toolbar, Typography, Box, Switch } from "@mui/material";
import { DarkMode } from "@mui/icons-material";
import { LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/mode";
import { RootState } from "../store";

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state?.mode?.mode);
  return (
    <AppBar color="primary" sx={{ minHeight: "unset" }} position="sticky">
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
              fill={mode === "light" ? "#212121" : "#FFF"}
            />
          </svg>
          iral Nation
        </Typography>

        <Box display="flex" alignItems="center">
          <LightMode sx={{ color: mode === "light" ? "#212121" : "#9E9E9E" }} />
          <Switch onClick={() => dispatch(toggleMode())} />
          <DarkMode sx={{ color: mode === "light" ? "#9E9E9E" : "#FAFAFA" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
