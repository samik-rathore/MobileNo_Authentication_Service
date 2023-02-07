const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

dotenv.config();

require('./db/conn');
const FormData = require('./model/formDataSchema');

app.use(express.json());
app.use(cors({origin: '*'}));
app.use(require('./router/routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running at port 5000`);
})