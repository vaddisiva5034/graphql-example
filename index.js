import express from 'express';
import {graphqlHTTP} from "express-graphql"

import { resolvers } from "./resolvers"
import { mySchema } from "./Schema"

const app = express();

app.get("/", (req, res) => {
    res.send("up and running the server");
})

const root = resolvers;
app.use('/graphql', graphqlHTTP({
    schema: mySchema,
    graphiql: true,
    rootValue:root
}));
app.listen(8082, () => { console.log("running at 8082")})