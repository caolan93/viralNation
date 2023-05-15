import { Typography, BottomNavigation } from "@mui/material";

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        position: "static",
        width: "100%",
        bottom: 0,
        background: "#FFF",
        p: 1,
        display: "flex",
        gap: 4,
        boxShadow: "0px 1px 12px 0px #000000",
      }}
    >
      <Typography
        color="#121212"
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
      <Typography
        color="#121212"
        sx={{ display: "flex", alignItems: "center", fontWeight: "400" }}
        variant="body2"
      >
        All Rights Reserved 2023.{" "}
        <span style={{ fontWeight: "bolder" }}>&copy;</span>
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
