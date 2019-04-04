var connection = require('connection.js');

var orm = {
    all: function (table, cb){
        var queryString = 'SELECT * FROM ';
        queryString += table;
        connection.query(queryString, function (err, result){
            if(err)throw err;
            cb(result)
        })
    },
    uneaten: function(col, table, condition, cb){
        var queryString = 'SELECT ' + col; 
        queryString += ' FROM ' + table ;
        queryString += ' WHERE ' + condition;

        connection.query(queryString,function (err, result){
            if (err) throw err;
            cb(result)
        });
    },
    devoured: function(col, table, condition, cb){
        var queryString = 'SELECT ' + col; 
        queryString += ' FROM ' + table ;
        queryString += ' WHERE ' + condition;

        connection.query(queryString,function (err, result){
            if (err) throw err;
            cb(result)
        });
    },
    addBurger: function (table, vals, cb){
        var queryString = 'INSERT INTO ' + table;
        queryString += '(burger_name) VALUES (';
        queryString += vals + ')';

        connection.query(queryString, function(err, result){
            cb(result)
        })
    }
};
module.exports = orm;