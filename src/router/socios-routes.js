const router = require('express').Router();
const { MongoClient } = require("mongodb");
var ObjectID = require('mongodb').ObjectID;

const mongoUrl = "mongodb://localhost:27017/";
const client = new MongoClient(mongoUrl, { useUnifiedTopology: false });
let db;
let socios;
client.connect().then(a => {
    console.log("Conexión establecida con mongodb");
    db = client.db("deportes");
    socios = db.collection("socios");
});



router.get('/',  function (req, res) {
    socios.find({}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send( JSON.stringify(result));
        }
    })
}); 

 router.get('/:_id',  function (req, res) {
    socios.find({"id": ObjectID(req.params._id)}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(JSON.stringify(result));
        }
    })
}); 

router.post('/',  function (req, res) {

        console.log('VINO AL POST ')
        console.log(req.body)
        socios.insertOne(req.body)
        res.json('Dio true' + req.body);

        //res.sendStatus(400).send('Error')

});


router.put('/:_id',  function (req, res) {
    socios.updateOne({"_id": ObjectID(req.params._id)},{ $set: {nombre : req.body.nombre}})
});

router.delete('/',  function (req, res) {
    console.log('VINO AL DELETE' + req.body.DNI)
    socios.deleteMany({DNI:req.body.DNI})
    res.json({});
});


module.exports = router;