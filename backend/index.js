const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRouter = require("./routes/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());


// mongo con
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully")
});

app.use("/users", usersRouter);

app.get('/', (req, res) => 
res.send(`The Table app is running on ${port}`)
);

app.listen(port, () => {
console.log(`The table server is running on ${port}`);
});