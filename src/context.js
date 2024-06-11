const app = require('./app');
const cors = require('cors');
const port = process.env.PORT || 5000;
const express = require('express');

require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

app.use(cors());

const knex = require('knex');

function createKnex() {
  return knex({
    client: 'mysql2',
    connection: process.env.DATABASECONECT,
    pool: {
      min: 2,
      max: 10,
    },
  });
}

module.exports = createKnex;

app.use((req, res, next) => {
  if (req.method !== 'DELETE') {
    express.json()(req, res, next);
  } else {
    next();
  }
});

app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index.routes');
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});

module.exports = knex;
