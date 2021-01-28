const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const app = express();

server.applyMiddleware({ app });
app.use(cors(), express.json());

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.info(`Server started on port ${port}`);
});
