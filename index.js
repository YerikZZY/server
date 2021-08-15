const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

// setup express server

const app = express();

app.use(express.json());

app.listen(5500, () => console.log("Server started on port 5500"));

// set up routers

app.use("/snippet", require("./routers/snippetRouter"));

mongoose.connect(process.env.MDB_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) =>{
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
});

// password for Jay: Fu2S6phNdpxw6EqX

//mongodb+srv://Jay:<password>@snippet-manager.wfsbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority