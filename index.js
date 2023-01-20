const dot = require('dotenv');
const express = require('express');
dot.config().parsed;
const connectDB = require("./config/db");
const path = require("path");

const app = express();
connectDB();
app.use(express.json({ extended: false }));

// Define the routes.
app.use("/api/responses", require("./responses"));
app.use(express.static("front-end/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
});

app.listen(3001,()=>{
    console.log("listening");
    console.log(dot.config());
})

