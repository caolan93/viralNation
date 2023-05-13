import { useState } from "react";

// Material UI Components
import { Card, Typography, CardContent, Avatar, Button } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

// Components
import Modal from "./Modal";

// Assets
import verified from "../../../assets/verified.png";

// Styling
import "../../../styles/grid/gridCard.scss";

const GridCard = ({ content }: { content: DataType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Card
      className="grid-card-container"
      sx={{
        backgroundColor: "#EEEEEE",
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
          <Button
            onClick={handleOpen}
            sx={{
              display: "flex",
              position: "absolute",
              width: "20px",
              top: "24px",
              right: "14px",
              color: "#9E9E9E",
            }}
          >
            <MoreVert />
          </Button>
        </div>
        <div>
          <Typography variant="caption" fontWeight={400} color="#616161">
            {content?.description}
          </Typography>
        </div>
      </CardContent>
      <Modal isOpen={isOpen} handleClose={handleClose} />
    </Card>
  );
};

export default GridCard;
