//var { MongoClient, ObjectID } = require("mongodb");
var mongoose = require("mongoose");
var db;
var dburl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
var dboptions = {
  //   server: { reconnectTries: Number.MAX_VALUE }
  useMongoClient: true
};

mongoose.connect(dburl, dboptions, err => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Connected successfully to: ${dburl}`);
  db = mongoose.connection;
});

// MongoClient.connect(mongourl, (err, db1) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   console.log(`Connected successfully to: ${mongourl}`);
//   db = db1;
// });

module.exports = { db };
