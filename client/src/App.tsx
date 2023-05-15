import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { RootState } from "./store";
import { useSelector } from "react-redux";

// Material UI Theme
import { getDesignTokens } from "./theme";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphiql",
  cache: new InMemoryCache(),
});

function App() {
  const mode = useSelector((state) => state?.mode.mode);
  console.log("APP", mode);
  const theme = createTheme(getDesignTokens(mode));

  console.log(`${mode}`, theme);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Navbar />
        <HomePage />
        <Footer />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
