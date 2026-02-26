const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.getAllStudents);

routes.get("/ttech", myController.tooeleTechFunction);

module.exports = routes;

