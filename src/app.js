const express = require("express")

const mainRouter=require("./Routes/mainRouter");

const app = express();




app.use(morgan("dev"));

app.use(mainRouter);

module.exports = app;