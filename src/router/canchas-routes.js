const router = require('express').Router();
const { MongoClient } = require("mongodb");
var ObjectID = require('mongodb').ObjectID;

const mongoUrl = "mongodb://localhost:27017/";
const client = new MongoClient(mongoUrl, { useUnifiedTopology: false });
let db;
let canchas;
client.connect().then(a => {
    console.log("Conexión establecida con mongodb");
    db = client.db("deportes");
    canchas = db.collection("canchas");
});



router.get('/',  function (req, res) {
    canchas.find({}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send( JSON.stringify(result));
        }
    })
});

router.get('/:_id',  function (req, res) {
    canchas.find({"id": ObjectID(req.params._id)}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(JSON.stringify(result));
        }
    })
});

router.post('/',  function (req, res) {
    if(req.body.nombre){
        canchas.insertOne(req.body)
    res.json('Dio true' + req.body.nombre);
    } else{
        res.sendStatus(400).send('Error')
    }
});


router.put('/:_id',  function (req, res) {
    canchas.updateOne({"_id": ObjectID(req.params._id)},{ $set: {nombre : req.body.nombre}})
});

router.delete('/:id',  function (req, res) {
    res.json({});
});


module.exports = router;