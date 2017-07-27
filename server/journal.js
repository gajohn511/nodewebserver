const express = require("express"),
  router = express.Router();
var { db } = require("./db");

// home page route (http://localhost:8080)
router.get("/:text", function(req, res) {
  // res.status(202).send({ message: "im the journal route" });
  res.status(202).send(req.params);
});

router.post("/", (req, res) => {
  var jtext; // = req.body.jtext;
  if (!req.body.jtext) {
    return res.status(404).send({ err: "No valid payload received" });
  }

  jtext = req.body.jtext;
  res.send({
    status: "OK",
    response: jtext
  });
});

// about page route (http://localhost:8080/about)
// router.get("/about", function(req, res) {
//   res.send("im the about page!");
// });

// apply the routes to our application
module.exports = { router };
