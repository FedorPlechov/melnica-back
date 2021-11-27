const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: 'http://192.168.1.104',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors());

const dispatchRoutes = require("./routes/dispatch");

// app.use(express.json());
app.use(bodyParser.json());

app.use(dispatchRoutes);

app.listen(3000);