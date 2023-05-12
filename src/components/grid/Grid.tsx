import { Hidden, Button, Grid, TextField, Typography } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { ViewWeek } from "@mui/icons-material";
import { List } from "@mui/icons-material";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROFILES } from "../../graphQL/schemas";

// import GridCard from "./Card";

import "../../styles/grid/gridPage.scss";

const GridPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_PROFILES);

  if (loading) {
    return console.log("loading still");
  } else if (error) {
    return console.log("error still");
  } else {
    return console.log("Data", data);
  }

  return (
    <div className="grid-container">
      <Grid xs={12} lg={9} container>
        <Grid className="input-container" item xs={12}>
          <Grid item xs={12}>
            <TextField fullWidth />
          </Grid>
          <Grid className="buttons-container" item xs={12} lg={3}>
            <Button
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
                startIcon={<ViewWeek sx={{ height: "20px", width: "20px" }} />}
                endIcon={<List sx={{ height: "25px", width: "25px" }} />}
              />
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        spacing={{ xs: 0, sm: 3 }}
        rowSpacing={{ xs: 3 }}
        xs={12}
        lg={9}
        container
      >
        {/* {data?.map((value, index: number) => (
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
            <GridCard content={value} />
          </Grid>
        ))} */}
      </Grid>
    </div>
  );
};

export default GridPage;
