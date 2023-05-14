import "./App.scss";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// const httpLink = new HttpLink({
//   uri: "http://localhost:5000/graphiql",
// });

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//     },
//   };
// });

const client = new ApolloClient({
  uri: "http://localhost:5000/graphiql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
