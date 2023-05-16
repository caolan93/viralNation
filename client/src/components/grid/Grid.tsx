import { useEffect, useState } from "react";
import { gql } from "@apollo/client";

// Material UI Components
import {
  Hidden,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { ViewWeek } from "@mui/icons-material";
import { List } from "@mui/icons-material";
import { useQuery } from "@apollo/client";
// import { FILTER_USERS } from "../../graphQL/mutations";

// Components
import GridCard from "./gridCard/Card";
import Form from "../Form";

// Styling
import "../../styles/components/grid/grid.scss";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const GridPage = () => {
  const mode = useSelector((state: RootState) => state?.mode?.mode);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [first, setFirst] = useState(8);
  const [offset, setOffset] = useState(0);

  const [dropdown, setDropdown] = useState<number | null>(null);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    // Document height (height of the entire page)
    const documentHeight = document.documentElement.scrollHeight;

    // Current scroll position
    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;

    // Check if scroll is at the bottom
    if (scrollPosition + windowHeight >= documentHeight) {
      setFirst(first + 8);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNextResults = (offset, first) => {
    let newOffset = offset + 10;
    let newFirst = first + 10;

    setFirst(newFirst);
    setOffset(newOffset);
  };

  const handleDropdown = (cardIndex: number) => {
    if (dropdown === cardIndex) {
      setDropdown(null);
    } else {
      setDropdown(cardIndex);
    }
  };

  const handleSearch = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setSearch(value);

    setTimeout(() => {
      setFilter(value);
    }, 500);
  };

  const GET_USERS = gql`
    query {
      users(filter: "${filter}", first: ${first}) {
        id
        first_name
        last_name
        email
        is_verified
        image
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USERS);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  if (loading) {
    return (
      <>
        <div className="grid-container">
          <Grid justifyContent="center" container>
            <Grid lg={9} xs={12} item>
              <Grid className="input-container" item xs={12}>
                <Grid item xs={12}>
                  <TextField value={search} onChange={handleSearch} fullWidth />
                </Grid>
                <Grid className="buttons-container" item xs={12} lg={3}>
                  <Button
                    variant="outlined"
                    onClick={handleOpen}
                    startIcon={
                      <PersonAdd
                        sx={{
                          color: mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                          height: "16px",
                          width: "16px",
                        }}
                      />
                    }
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
                        <ViewWeek
                          sx={{
                            color: mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                            height: "20px",
                            px: 2,
                            width: "20px",
                          }}
                        />
                      }
                      endIcon={
                        <List
                          sx={{
                            color: mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                            height: "20px",
                            px: 2,
                            width: "20px",
                          }}
                        />
                      }
                    />
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader
            color="#3DACFF"
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <p>Something Went Wrong</p>
      </>
    );
  }

  return (
    <>
      {!loading && !error && (
        <div className="grid-container">
          <Grid justifyContent="center" container>
            <Grid lg={9} xs={12} item>
              <Grid className="input-container" item xs={12}>
                <Grid item xs={12}>
                  <TextField value={search} onChange={handleSearch} fullWidth />
                </Grid>
                <Grid className="buttons-container" item xs={12} lg={3}>
                  <Button
                    onClick={handleOpen}
                    variant="outlined"
                    sx={{
                      borderColor: mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                      "&:hover": {
                        borderColor: mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                      },
                    }}
                    startIcon={
                      <PersonAdd
                        sx={{
                          color: mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                          height: "16px",
                          width: "16px",
                        }}
                      />
                    }
                  >
                    <Typography
                      sx={{
                        textTransform: "none",
                        whiteSpace: "pre",
                        color: mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                      }}
                      variant="body2"
                    >
                      Create Profile
                    </Typography>
                  </Button>
                  <Hidden smDown={true}>
                    <Box sx={{ display: "flex" }}>
                      <Button
                        className="layout-switch-btn"
                        variant="outlined"
                        sx={{
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                          borderColor:
                            mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                          "&:hover": {
                            borderColor:
                              mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                          },
                        }}
                        startIcon={
                          <ViewWeek
                            sx={{
                              color: mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                              height: "20px",
                              px: 2,
                              width: "20px",
                            }}
                          />
                        }
                      />
                      <Button
                        className="layout-switch-btn"
                        variant="outlined"
                        sx={{
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          borderColor:
                            mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                          "&:hover": {
                            borderColor:
                              mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                          },
                        }}
                        startIcon={
                          <List
                            sx={{
                              color: mode === "light" ? "#3DACFF" : "#FFFFFFB3",
                              height: "20px",
                              px: 2,
                              width: "20px",
                            }}
                          />
                        }
                      />
                    </Box>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid justifyContent="center" container>
            <Grid lg={9} xs={12} item>
              <Grid spacing={{ xs: 0, sm: 3 }} rowSpacing={{ xs: 3 }} container>
                {data?.users?.map((value: Profile, index: number) => (
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
                    <GridCard
                      content={value}
                      cardIndex={index}
                      dropdown={dropdown === index}
                      handleDropdown={handleDropdown}
                      isFormOpen={handleOpen}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Form isOpen={isOpen} handleClose={handleClose} />
        </div>
      )}
    </>
  );
};

export default GridPage;
