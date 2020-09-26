const MYSQL = require('mysql');
const MYSQL_CONFIG = require('../Config/MySqlConfig');

module.exports = {
    insert: (sql, params) => {
        let connection = MYSQL.createConnection(MYSQL_CONFIG);
        connection.connect(err => {if(err) console.log("error in connect" + err)});
        let promise = new Promise((resolve, reject) => {
            connection.query(sql, params, (err, result, field) => {
                if(err) console.log("error in query" + err);
                resolve(JSON.stringify(result));
            })
        })
        connection.end(err => {if(err) console.log("error in end" + err)});
        return promise;
    },
    delete: (sql, params) => {
        let connection = MYSQL.createConnection(MYSQL_CONFIG);
        connection.connect(err => {if(err) console.log("error in connect" + err)});
        let promise = new Promise((resolve, reject) => {
            connection.query(sql, params, (err, result, field) => {
                if(err) console.log("error in query" + err);
                resolve(JSON.stringify(result));
            })
        })
        connection.end(err => {if(err) console.log("error in end" + err)});
        return promise;
    },
    update: (sql, params) => {
        let connection = MYSQL.createConnection(MYSQL_CONFIG);
        connection.connect(err => {if(err) console.log("error in connect" + err)});
        let promise = new Promise((resolve, reject) => {
            connection.query(sql, params, (err, result, field) => {
                if(err) console.log("error in query" + err);
                resolve(JSON.stringify(result));
            })
        })
        connection.end(err => {if(err) console.log("error in end" + err)});
        return promise;
    },
    select: (sql, params) => {
        let connection = MYSQL.createConnection(MYSQL_CONFIG);
        connection.connect(err => {if(err) console.log("error in connect" + err)});
        let promise = new Promise((resolve, reject) => {
            connection.query(sql, params, (err, result, field) => {
                if(err) console.log("error in query" + err);
                resolve(JSON.stringify(result));
            })
        })
        connection.end(err => {if(err) console.log("error in end" + err)});
        return promise;
    },
}