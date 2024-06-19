const express = require('express');
const cors = require('cors');
const app = express();

// Configuração do CORS
app.use(cors());

app.use(express.json());


module.exports = app;

