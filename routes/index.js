const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", (req, res) => {
    res.send('Tooele Tech is Awesome');
});
//student routes
routes.use("/students", require("./students"))

module.exports = routes;

