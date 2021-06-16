var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/deportes";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("deportes");
    dbo.createCollection("socios", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("deportes");
    dbo.createCollection("canchas", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("deportes");
    dbo.createCollection("reservas", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });