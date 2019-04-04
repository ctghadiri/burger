var connection = require('connection.js');

var orm = {
    uneaten: function(col, table, condition, cb){
        var queryString = 'SELECT ' + col; 
        queryString += ' FROM ' + table ;
        queryString += ' WHERE ' + condition;

        connection.connect(queryString,function (err, result){
            if (err) throw err;
            cb(result)
        })
    },
    devoured: function(){
        var queryString = 'SELECT ' + col; 
        queryString += ' FROM ' + table ;
        queryString += ' WHERE ' + condition;

        connection.connect(queryString,function (err, result){
            if (err) throw err;
            cb(result)
        })
    }
}