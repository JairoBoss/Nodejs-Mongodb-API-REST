module.exports = (app) => {
  const personaController = require("../controllers/persona.controller.js");
  const router = require("express").Router();

  router.post("/", personaController.create);

  router.get("/", personaController.findAll);

  router.get("/:id", personaController.findById);

  router.put("/:id", personaController.update);

  router.delete("/:id", personaController.delete);

  app.use("/api/persona", router);
};
