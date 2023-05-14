import { useState } from "react";

// Material UI Components
import {
  Card,
  Typography,
  CardContent,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

// Components
import Modal from "./Modal";

// Redux
import { setFormValues } from "../../../redux/form";
import { useDispatch } from "react-redux";

// Assets
import verified from "../../../assets/verified.png";

// Styling
import "../../../styles/components/grid/gridCard/gridCard.scss";

type Props = {
  content: Profile;
  cardIndex: number;
  dropdown: boolean;
  handleDropdown: Function;
  isFormOpen: () => void;
};

const GridCard = ({
  content,
  handleDropdown,
  isFormOpen,
  dropdown,
  cardIndex,
}: Props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleDropdownOpen = () => {
    handleDropdown(cardIndex);
    dispatch(setFormValues(content));
  };

  const handleForm = () => {
    isFormOpen();
  };

  const buttonStyle = {
    textTransform: "none",
    color: "#2B2B2B",
    p: 2,
    "&:hover": {
      backgroundColor: "#f3f3f3",
    },
  };

  return (
    <Card
      className="grid-card-container"
      sx={{
        borderRadius: "8px",
        padding: "0",
        width: "100%",
        height: "100%",
      }}
    >
      <CardContent sx={{ padding: "24px" }}>
        <div className="grid-card-header">
          <Avatar
            sx={{ height: "64px", width: "64px" }}
            alt={`Image of ${content?.first_name} ${content?.last_name}`}
            src={content?.image}
          />
          <div className="grid-card-information">
            <div className="grid-user-info">
              <Typography variant="body1" fontWeight={500} color="#212121">
                {content?.first_name} {content?.last_name}
              </Typography>
              {content?.is_verified && (
                <img
                  height="16px"
                  width="16px"
                  src={verified}
                  alt="An icon for verified image"
                />
              )}
            </div>
            <Typography variant="body2" fontWeight={400} color="#2B2B2B">
              {content?.email}
            </Typography>
          </div>
          <Box
            onClick={handleDropdownOpen}
            sx={{
              display: "flex",
              position: "absolute",
              width: "20px",
              top: "24px",
              right: "14px",
              color: "#9E9E9E",
            }}
          >
            {dropdown && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  background: "#FFF",
                  top: "0",
                  right: "0",
                  color: "#9E9E9E",
                  boxShadow: 2,
                }}
              >
                <Button onClick={handleForm} sx={buttonStyle}>
                  <Typography sx={{ whiteSpace: "pre" }}>
                    Edit profile
                  </Typography>
                </Button>
                <Button onClick={handleOpen} sx={buttonStyle}>
                  <Typography sx={{ whiteSpace: "pre" }}>
                    Remove Profile
                  </Typography>
                </Button>
              </Box>
            )}
            <MoreVert />
          </Box>
        </div>
        <div>
          <Typography variant="caption" fontWeight={400} color="#616161">
            {content?.description}
          </Typography>
        </div>
      </CardContent>
      <Modal id={content?.id} isOpen={isOpen} handleClose={handleClose} />
    </Card>
  );
};

export default GridCard;
