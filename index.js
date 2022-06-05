const express = require("express");
const app = express();
const parser = require("body-parser");
const router = express.Router();
const rout = require('./Routes/Route');

// app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
const port = 6500;
app.use('/',rout.router);
// app.use(router)

app.listen(port ,() => {
    console.log("Connection running on port http://localhost:" + port);
});