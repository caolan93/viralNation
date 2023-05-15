const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const schema = require("./src/schema/schema");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./src/config/db");

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

// Connect to MongoAtlas
connectDB();

// Listen on PORT
app.listen(PORT, console.log(`Server running on port ${PORT}`));
