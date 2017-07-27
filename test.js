//var { db } = require("./server/db");
var { JModel } = require("./server/models/journalModel");

JModel.find({}, (err, docs) => {
  if (err) {
    console.log("Error retreiving...", err);
  }

  console.log(docs);
});
