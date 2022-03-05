const Persona = require("../models/persona.model.js");

exports.create = (req, res) => {
  const personaNueva = new Persona({
    nombre: req.body.nombre,
    apellidoPaterno: req.body.apellidoPaterno,
    apellidoMaterno: req.body.apellidoMaterno,
    edad: req.body.edad,
    correo: req.body.correo,
    telefono: req.body.telefono,
  });

  personaNueva
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear a la persona ${personaNueva.nombre}`,
      });
    });
};

exports.findAll = (req, res) => {
  Persona.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de recuperar todas las personas.`,
      });
    });
};

exports.findById = (req, res) => {
  Persona.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id} no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind == "ObjectId") {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos de la Persona con id: ${req.params.id}`,
      });
    });
};

exports.update = (req, res) => {
  Persona.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (data) => {
      if (!data) {
        return res.status(404).send({
          message: `Persona con id${req.params.id}, no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: `Persona con id: ${req.params.id}, no encontrado`,
          });
        }
        return res.status(500).send({
          message: `Error al actualizar al Persona con id: ${req.params.id}`,
        });
      });
};

exports.delete = (req, res) => {
    Persona.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Persona eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Persona con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar la Persona con id: ${req.params.id}.`,
      });
    });
};
