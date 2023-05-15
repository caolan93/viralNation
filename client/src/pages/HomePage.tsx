import { useSelector } from "react-redux";
import GridPage from "../components/grid/Grid";
import { RootState } from "../store";

const HomePage = () => {
  const mode = useSelector((state: RootState) => state?.mode?.mode);

  return (
    <div
      style={
        mode === "light"
          ? { background: "#F2F2F3", minHeight: "100vh" }
          : { background: "#212121", minHeight: "100vh" }
      }
    >
      <GridPage />
    </div>
  );
};

export default HomePage;
