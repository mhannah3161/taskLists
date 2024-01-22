const express = require("express");

const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const { MONGO_URI } = process.env;

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());


//connect to database

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB database connected"))
    .catch((err) => console.log(err));
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());

app.use(express.json());

app.use("/api", authRoute);



