const express = require("express"),
  router = express.Router();
// var { db } = require("./db");
var { JModel } = require("./models/journalModel"),
  { handleError } = require("./utils");

// router.param("proc", function(req, res, next, process) {
//   console.log("param reached");
//   next();
//   //res.send({ status: process });
// });

// home page route (http://localhost:8080)
router.get("/journals", function(req, res) {
  JModel.find({}).limit(10).exec((error, docs) => {
    if (error) {
      handleError(
        req,
        res,
        JSON.stringify(error),
        "Unable to retrieve journals",
        500
      );
    }

    res.status(202).json(docs);
  });
});

/* some middleware validation */
var mware = (req, res, next) => {
  if (!req.body.text) {
    return res.status(404).send({ err: "No valid payload received" });
  }

  new JModel({
    text: req.body.text
  })
    .save()
    .then(doc => {
      req.out = doc._doc;
      next();
    })
    .catch(e => {
      console.log(`Error attempting to save document`, e);
      res.status(500).end({ error: "Error attempting to save document" });
    });
};

router.use(mware);

router.post("/", (req, res) => {
  var text = req.body.text;
  res.send({
    status: "OK",
    response: text
    //doc: req.out
  });
});

// about page route (http://localhost:8080/about)
// router.get("/about", function(req, res) {
//   res.send("im the about page!");
// });

// apply the routes to our application
module.exports = { router };
