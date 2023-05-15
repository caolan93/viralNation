import { useSelector } from "react-redux";
import GridPage from "../components/grid/Grid";
import { RootState } from "../store";

const HomePage = () => {
  const mode = useSelector((state: RootState) => state?.mode?.mode);

  return (
    <div
      style={
        mode === "light" ? { background: "#FFF" } : { background: "#212121" }
      }
    >
      <GridPage />
    </div>
  );
};

export default HomePage;
