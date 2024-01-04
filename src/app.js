const express = require("express")

const mainRouter=require("./Routes/mainRouter");


const morgan = require("morgan");
const cors = require("cors");
const app = express();



app.use(morgan("dev"));
//Ya este el pacrhe de body
app.use(express.json());
app.use(mainRouter);
app.use(cors());


module.exports = app;