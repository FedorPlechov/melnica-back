const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const DB = require("./util/db");
const path = require('path');

const app = express();

// app.use(cors());

const dispatchRoutes = require("./routes/dispatch");

app.use(express.static(path.join(__dirname + '/dist')));
app.use(bodyParser.json());
app.use(dispatchRoutes);

DB.run()
    .then(r => app.listen(3000))
    .catch(console.dir);



