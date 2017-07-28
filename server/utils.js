const fs = require("fs");

function handleError(req, res, reason, message, code) {
  var now = new Date().toString();
  var log = `${now}: `; // ${req.method} ${req.url}`;
  log += req ? `${req.method} ${req.url}: ` : "";
  log += `ERROR: ${reason} `;

  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("Unable to append to server.log file");
    }
  });

  console.log("ERROR: " + reason);
  if (res) {
    res.status(code || 500).json({ error: message });
  }
}

module.exports = { handleError };
