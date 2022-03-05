const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./src/models");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos!");
  })
  .catch((err) => {
    console.log(
      `Ocurrio un error al tratar de conectarlo a la base de datos! ${err}`
    );
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Hola" });
});

require("./src/routes/persona.routes.js")(app);

let PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server en el puerto ${PORT}`);
});
