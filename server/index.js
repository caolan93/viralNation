const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");

dotenv.config();

const PORT = process.env.PORT || 3333;
const app = express();
app.use(cors());

app.use(
  "/graphiql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));