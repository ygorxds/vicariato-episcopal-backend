const express = require('express');
const cors = require('cors');
const app = express();

// Configuração do CORS
app.use(cors());

app.use(express.json());

const routes = require('./router/index.routes.js');
app.use(routes);

module.exports = app;
