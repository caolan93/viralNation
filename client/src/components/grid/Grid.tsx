import { useState } from "react";

// Material UI Components
import { Hidden, Button, Grid, TextField, Typography } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { ViewWeek } from "@mui/icons-material";
import { List } from "@mui/icons-material";
// import { data } from "../../assets/dataArr";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphQL/schemas";

// Components
import GridCard from "./gridCard/Card";
import Form from "../Form";

// Styling
import "../../styles/components/grid/grid.scss";

const GridPage = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return console.log("loading still");
  } else if (error) {
    return console.log("error still");
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="grid-container">
      <Grid justifyContent="center" container>
        <Grid lg={9} xs={12} item>
          <Grid className="input-container" item xs={12}>
            <Grid item xs={12}>
              <TextField fullWidth />
            </Grid>
            <Grid className="buttons-container" item xs={12} lg={3}>
              <Button
                onClick={handleOpen}
                color="primary"
                variant="outlined"
                startIcon={<PersonAdd sx={{ height: "16px", width: "16px" }} />}
              >
                <Typography
                  sx={{ textTransform: "none", whiteSpace: "pre" }}
                  variant="body2"
                >
                  Create Profile
                </Typography>
              </Button>
              <Hidden smDown={true}>
                <Button
                  className="layout-switch-btn"
                  variant="outlined"
                  startIcon={
                    <ViewWeek sx={{ height: "20px", width: "20px" }} />
                  }
                  endIcon={<List sx={{ height: "25px", width: "25px" }} />}
                />
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container>
        <Grid lg={9} xs={12} item>
          <Grid spacing={{ xs: 0, sm: 3 }} rowSpacing={{ xs: 3 }} container>
            {data?.users?.map((value: DataType, index: number) => (
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                key={index + 1}
                xs={12}
                md={6}
                lg={3}
                item
              >
                <GridCard content={value} isFormOpen={handleOpen} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Form isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default GridPage;
