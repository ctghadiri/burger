var express = require('express');
var router = express.Router();

var burgers = require('../models/burger.js');

router.get('/', function (req, res){
    orm.burgers.all(function (data){

    })
})

router.post('/api/burger/:id', function(req,res){

})

module.exports = router;