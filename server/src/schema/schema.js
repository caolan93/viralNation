// Mongoose Model
const User = require("../models/User");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  graphql,
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
    filter: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // users: {
    //   type: new GraphQLList(UserType),
    //   resolve(parent, args) {
    //     return User.find({});
    //   },
    // },
    users: {
      type: new GraphQLList(UserType),
      args: {
        first: { type: GraphQLInt },
        filter: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const query = {
          $or: [
            { first_name: { $regex: args.filter, $options: "i" } },
            { last_name: { $regex: args.filter, $options: "i" } },
            { email: { $regex: args.filter, $options: "i" } },
            { description: { $regex: args.filter, $options: "i" } },
          ],
        };

        return await User.find(query)
          .limit(args.first || 8)
          .sort({ createdAt: -1 });
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
  },
});

// Mutations

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Adding a user to MongoDB
    addUser: {
      type: UserType,
      args: {
        first_name: { type: GraphQLNonNull(GraphQLString) },
        last_name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        is_verified: { type: GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: async (parent, args) => {
        let user = await User.findOne({ email: args.email });

        if (user) {
          throw `A user with the email ${args.email} already exists. Please use another email.`;
        }

        user = new User({
          first_name: args.first_name,
          last_name: args.last_name,
          email: args.email,
          description: args.description,
          is_verified: args.is_verified,
          image: args.image,
        });

        return user.save();
      },
    },
    // Updating a user from MongoDB
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        first_name: { type: GraphQLNonNull(GraphQLString) },
        last_name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        is_verified: { type: GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            $set: {
              first_name: args.first_name,
              last_name: args.last_name,
              email: args.email,
              description: args.description,
              is_verified: args.is_verified,
              image: args.image,
            },
          },
          { new: true }
        );
      },
    },
    // Deleting a user from MongoDB
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return User.findByIdAndDelete(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
