import { Box, Grid } from "@mui/material";

import GridCard from "../components/grid/Card";

import "../styles/grid/gridPage.scss";

const HomePage = () => {
  const dataArr = [
    {
      id: 1,
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, lectus sed tincidunt interdum, quam neque hendrerit nunc, eget pharetra eros ante sit amet elit.",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://i.pravatar.cc/150?img=2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec consequat neque, a gravida diam. Ut eget pharetra justo.",
      email: "janesmith@example.com",
    },
    {
      id: 3,
      name: "Tom Jones",
      image: "https://i.pravatar.cc/150?img=3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu est eget est facilisis laoreet vitae eget nisi.",
      email: "tomjones@example.com",
    },
    {
      id: 4,
      name: "Sarah Lee",
      image: "https://i.pravatar.cc/150?img=4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique quam ut est eleifend, vitae vulputate odio fringilla.",
      email: "sarahlee@example.com",
    },
    {
      id: 5,
      name: "Mike Smith",
      image: "https://i.pravatar.cc/150?img=5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis magna vel sapien bibendum, a ullamcorper nibh venenatis.",
      email: "mikesmith@example.com",
    },
    {
      id: 6,
      name: "Karen White",
      image: "https://i.pravatar.cc/150?img=6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor eros sit amet diam dignissim, nec ultricies elit lobortis.",
      email: "karenwhite@example.com",
    },
    {
      id: 7,
      name: "James Brown",
      image: "https://i.pravatar.cc/150?img=7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt ex eu mauris cursus euismod.",
      email: "jamesbrown@example.com",
    },
    {
      id: 8,
      name: "Emily Davis",
      image: "https://i.pravatar.cc/150?img=8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet pharetra mi, nec dictum tortor volutpat quis.",
      email: "emilydavis@example.com",
    },
    {
      id: 9,
      name: "David Johnson",
      image: "https://i.pravatar.cc/150?img=9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat diam eu metus ullamcorper, ac iaculis arcu mattis.",
      email: "davidjohnson@example.com",
    },
  ];

  return (
    <div className="grid-container">
      <Grid
        spacing={{ xs: 0, lg: 3 }}
        columnSpacing={{ sm: 3 }}
        rowGap={{ xs: 3, lg: 0 }}
        xs={12}
        lg={10}
        container
      >
        {dataArr?.map((value, index: number) => (
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
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
