const { users } = require("../sampleData");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLList,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    image: { type: GraphQLString },
    description: { type: GraphQLString },
    is_verified: { type: GraphQLBoolean },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users;
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return users.find((user) => user.id == args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
