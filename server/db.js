var { MongoClient, ObjectID } = require("mongodb");
var db;
var mongourl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

MongoClient.connect(mongourl, (err, db1) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Connected successfully to: ${mongourl}`);
  db = db1;
});
