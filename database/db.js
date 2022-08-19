const mySql = require('mysql');

const connection = mySql.createconnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.USER_PWD
});

module.exports = connection