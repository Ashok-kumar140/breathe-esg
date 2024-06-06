const express = require("express");
const app = express();

const userRoutes = require("./routes/User");


const dbConnect = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

dbConnect();


app.use(express.json());
app.use(cookieParser());
app.use(
    cors()
);

//routes

app.use("/api/v1/auth", userRoutes);


app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running..."
    })
});


app.listen(PORT, () => {
    console.log(`App is running at port : ${PORT}`)
})

