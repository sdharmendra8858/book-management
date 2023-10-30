const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require('dotenv').config()

const ErrorClases = require("./error")
const config = require("./config/config");
const bookRoutes = require("./routes/book");
require('./db/connection');

const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(bookRoutes);

app.use((err, req, res, next) => {
    if (err instanceof Error && ErrorClases[err.name]) {
      // Handle registered errors
      const customError = new ErrorClases[err.name]();
    //   return res.status(customError.status).json({ error: customError.message, code: customError.code });
    return res.status(err.status).send({
        error: err.name,
        message: err.message,
        code: err.code
    });
    } else {
      res.status(500).json({
        error: 'Internal_Server_Error',
        message: "Unkown Error Occurred.",
        code: 'INTERNAL_SERVER_ERROR'
      });
    }
})

const server = app.listen(config.PORT, () => {
    console.log('Application is running on ', server.address());
})