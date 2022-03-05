const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Hola" });
});

let PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server en el puerto ${PORT}`);
});
