const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contactoController = require("./src/controllers/contactoController");

function meuMiddleware(req, res, next) {
  req.session = {
    nome: "Gonçalo",
    apelido: "Arsénio",
  };

  console.log();
  console.log("Passei no teu middleware");
  console.log();
  next();
}

//rotas da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

//rotas de contacto
route.get("/contacto", contactoController.paginaInicial);
module.exports = route;
