const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require ('body-parser')
const filesRoute = require('./routes/files');
const uploadRoute = require('./routes/upload');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(uploadRoute);
app.use(filesRoute);
app.listen(3080); 