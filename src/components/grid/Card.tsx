import { Card, Typography, CardContent, Avatar } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

// Assets
import verified from "../../assets/verified.png";

// Styling
import "../../styles/grid/gridCard.scss";

const GridCard = ({ content }: { content: DataType }) => {
  console.log("CONTENT", content);
  return (
    <Card
      className="grid-card-container"
      sx={{
        backgroundColor: "#EEEEEE",
        borderRadius: "8px",
        padding: "0",
        width: "100%",
        height: "100%",
        maxWidth: "342px",
      }}
    >
      <CardContent sx={{ padding: "24px" }}>
        <div className="grid-card-header">
          <Avatar
            sx={{ height: "64px", width: "64px" }}
            alt={`Image of ${content?.name}`}
            src={content?.image}
          />
          <div className="grid-card-information">
            <div className="grid-user-info">
              <Typography variant="body1" fontWeight={500} color="#212121">
                {content?.name}
              </Typography>
              <img
                height="16px"
                width="16px"
                src={verified}
                alt="An icon for verified image"
              />
            </div>
            <Typography variant="body2" fontWeight={400} color="#2B2B2B">
              {content?.email}
            </Typography>
          </div>
          <MoreVert />
        </div>
        <div>
          <Typography variant="caption" fontWeight={400} color="#616161">
            {content?.description}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default GridCard;
