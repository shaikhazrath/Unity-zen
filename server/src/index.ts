import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';

const app = express();

const server = new ApolloServer({
  typeDefs:'',
  resolvers:{},
});


app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server));
