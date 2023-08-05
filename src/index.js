import http from "http";
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { buildGraphQLServer } from "./graphql/index.js";
import config from "./shared/config/index.js";
import { errorMiddlewareFunc } from "./shared/errors/handle.js";

const app = express();
const httpServer = http.createServer(app);

app.use(express.json());
app.use(cors());

app.use(errorMiddlewareFunc);

// GraphQL Serverni sozlash
const server = buildGraphQLServer(httpServer);
await server.start();
app.use("/gql", expressMiddleware(server));

httpServer.listen(config.port, () => {
  console.log(`Server is running on port http://localhost:${config.port}/gql`);
});
