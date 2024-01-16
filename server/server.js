const express = require("express");

const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());


//connect to database

mongoose.connect(process.env.MONGO_URI)
    .then(() =>
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        }
        )
    )
.catch ((err) => console.log(err));


