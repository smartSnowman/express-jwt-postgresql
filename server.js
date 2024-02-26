require("dotenv").config();
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hi, Sergei. Welcome to test task." });
});

// routes
app.use('/api/v1/rna/test/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});