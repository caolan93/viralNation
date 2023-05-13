import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: "https://api.poc.graphql.dev.vnplatform.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6IkNvYWxhbiBGYW5uaW5nIiwiaXNfY2FuZGlkYXRlIjp0cnVlLCJpYXQiOjE2ODM1NjcxMjksImV4cCI6MTY4NDI1ODMyOX0.eLFZIXlKDKjZKZ8Qry6eGVSTHUmuySXCMCFDu3-RJZs`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
