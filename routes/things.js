const express = require("express")
let router=express.Router();

router.use(function(req,res, next) {
    console.log(req.url, "@", Date.now());
    next();
})

router 
.route("/cars")
.get((req,res) => {
    res.send("hi get things/cars")
})

.post((req,res) => {
    res.send("hi post things/cars")
})

router
.route("/cars/:carid")
.get((req,res) => {
    res.send("hi get things/cars" + req.params.carid)
})

.post((req,res) => {
    res.send("hi post things/cars" + req.params.carid)
})

module.exports = router;