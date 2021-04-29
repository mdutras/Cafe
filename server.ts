import { table } from "node:console";

const express = require('express')
const app = express()

app.use(express.static('src'))

app.get('/', (req, res)=>{
    res.sendFile("src/index.html");
})

app.listen(8080, (req, res)=>{
    console.log("Listening on the port 8080...");
})
