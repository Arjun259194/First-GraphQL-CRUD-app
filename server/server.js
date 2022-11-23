import express from "express";
import env from "dotenv";
import cors from 'cors'
import { graphqlHTTP } from "express-graphql";
import schema from './schema/schema.js'
import colors from 'colors' // to color text in terminal
import connectDB from './config/db.js' // database connection function

env.config(); // so we can use .env file

const PORT = process.env.PORT || 5000;

const app = express();

// connect to database
connectDB()

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema, // setting up graphQL schema for request and response
  graphiql: process.env.NODE_ENV === 'development' // checking for development environment 
}))

app.listen(PORT, () => console.log(`server running on port ${PORT}`.yellow.underline.bold));
