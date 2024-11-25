import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const PORT = process.env?.PORT || 3500;

try {
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });
  console.log(`🚀 Server is listening at ${url}`);
} catch (error) {
  console.error("Failed to start the server:", error);
}
