const express = require("express"),
  router = express.Router();
var { db } = require("./db");

// home page route (http://localhost:8080)
router.get("/", function(req, res) {
  res.send("im the journal route");
});

// about page route (http://localhost:8080/about)
// router.get("/about", function(req, res) {
//   res.send("im the about page!");
// });

// apply the routes to our application
module.exports = { router };
