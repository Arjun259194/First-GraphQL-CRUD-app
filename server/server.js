import express from "express";
import env from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from './schema/schema.js'
import colors from 'colors'
import connectDB from './config/db.js'

env.config();

const PORT = process.env.PORT || 5000;

const app = express();

// connect to database
connectDB()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => console.log(`server running on port ${PORT}`.yellow.underline.bold));
