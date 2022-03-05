const mongoose = require("mongoose");
var PersonaSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellidoPaterno: {
      type: String,
      required: true,
    },
    apellidoMaterno: {
      type: String,
      require: false,
    },
    edad: {
      type: Number,
      require: false,
    },
    correo: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Persona", PersonaSchema);
//mongoose.model(modelName, schema);
