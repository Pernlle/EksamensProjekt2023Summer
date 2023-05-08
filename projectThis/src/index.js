const express = require("express");
const app = express();
const port=31031;
const axios = require("axios");

app.get("/", (reg, res) => {
    res.send("Hello World!");
});

app.get("/todos", (reg, res) => {

    //do a database query, ect.

    axios.get("http://jsonplaceholder.typicode.com/todos")
    .then(response => {
        res.json(response.data);
        //console.log(respone.data);
    })
    .catch(err=>{
        console.log(err);

        res.sendStatus(500);
    });
    //res.send("Todos");
});

app.post("/todos", (reg, res) => {
    //add todos
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
