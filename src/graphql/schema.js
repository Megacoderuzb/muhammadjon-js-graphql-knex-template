import { makeExecutableSchema } from "@graphql-tools/schema";
import usersModule from "../modules/users/_index.js";

export const schema = makeExecutableSchema({
  typeDefs: [usersModule.typeDefs],
  resolvers: [usersModule.resolvers],
});
