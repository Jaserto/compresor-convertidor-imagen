const fs = require('fs');
const path = require('path');

const express = require("express");
const multer = require("multer");




let dir = "public";
let subDirectory = "public/uploads";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);

  fs.mkdirSync(subDirectory);
}



const app = express();   
// Lectura y parseo del body
app.use( express.json() );


app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/processimage', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});