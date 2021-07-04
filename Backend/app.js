const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const _ = require('lodash');
const cors = require('cors');

const app = express();

//allow cross origin request
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/graphqlpro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log('app is litening on port 5000');
});
