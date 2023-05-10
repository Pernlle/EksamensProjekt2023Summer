const express = require("express");
const app = express();
const port = 31031;
const axios = require("axios");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");

const router = require("./router");
const mongoose = require("mongoose");


app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
  console.log(
    `Example app listening on port ${port} on http://localhost:31031`
  );
});

const MONGO_URI = "mongodb+srv://pkoe99:pkoe9221@projectthis.m69cgde.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on("connected", () => 
console.log("connected to db"));

mongoose.connection.on("disconnected", () =>
  console.log("disconnected from db")
);

mongoose.connection.on("error", (error: Error) => 
console.log(error));

app.use("/", router());



// app.get("/", (reg, res) => {
//     res.send("Hello World!");
// });

// app.get("/todos", (reg, res) => {

//     //do a database query, ect.

//     axios.get("http://jsonplaceholder.typicode.com/todos")
//     .then(response => {
//         res.json(response.data);
//         //console.log(respone.data);
//     })
//     .catch(err();
//     =>{
//         console.log(err);

//         res.sendStatus(500);
//     });
//     //res.send("Todos");
// });

// app.post("/todos", (reg, res) => {
//     //add todos
// })
