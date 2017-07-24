const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const { db } = require("./server/db");
var bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js")); // redirect bootstrap JS
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css")); // redirect CSS bootstrap

app.use(bodyParser.json());
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("Unable to append to server.log file");
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render("maintenance.hbs");
// });

hbs.registerHelper("getyear", () => {
  return new Date().getFullYear();
});

// hbs.registerHelper("scream", txt => {
//   //   return txt.toUpperCase();
//   return String(txt).toUpperCase();
// });

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

app.get("/", (req, res) => {
  //   res.send("hello express!");
  //   res.send({
  //     name: "John garzon",
  //     likes: ["ice cream", "pussy"]
  //   });

  res.render("home.hbs", {
    title: "Homepage",
    welcome: "Hello... User",
    day: new Date().toLocaleString("en-us", { weekday: "long" })
  });
});

// app.get("/about", (req, res) => {
//   res.render("about.hbs", {
//     title: "About Page title yoyo"
//   });
// });

app.listen(port, undefined, undefined, () => {
  console.log(`Listening on port ${port}`);
});
