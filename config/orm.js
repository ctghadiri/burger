var connection = require('connection.js');

function printQuestionMarks(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push('?');
    }
    return arr.toString();
}

function objToSql(object){
    var arr = [];
    for (var key in object){
        var value = object[key];
        if (Object.asOwnProperty.call(object,key)){
            if (typeof value === 'string' && value.indexOf(' ') >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
var orm = {
    all: function (table, cb){
        var queryString = 'SELECT * FROM ';
        queryString += table;
        connection.query(queryString, function (err, result){
            if(err)throw err;
            cb(result)
        })
    },
    update: function(table, colsVals, condition, cb){
        var queryString = 'UPDATE ' + table; 
        queryString += ' SET ' + objToSql(colsVals);
        queryString += ' WHERE ' + condition;

        connection.query(queryString,function (err, result){
            if (err) throw err;
            cb(result)
        });
    },
    create: function (table, cols, vals, cb){
        var queryString = 'INSERT INTO ' + table;
        queryString += ' (' + cols.toString();
        queryString += ') VALUES (';
        queryString += printQuestionMarks(vals.length) + ')';

        connection.query(queryString, function(err, result){
            cb(result)
        })
    }
};
module.exports = orm;