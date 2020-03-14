const express = require('express');
var ejs = require('ejs');
const bodyParser = require('body-parser');

const mysql = require('mysql');
var HOST = 'localhost';
var MYSQL_PORT = 3306;
var MYSQL_USER = 'root';
var MYSQL_PASS = '445566pop';
var DATABASE = 'client_meals';
// var TABLE = 'info';
const connection = mysql.createConnection({
    host: HOST,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: DATABASE,
});

const app = express();

connection.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {

});

app.post('/sign-up', (req, res) => {
            var username = req.body.client_username;
            var password = req.body.client_password;
            var email = req.body.client_email;
            var sql = "";
            connection.query("SELECT userName FROM useraccounts WHERE userName = '"+username+"' ", function (err,result) {
                if(err) throw err;
                if(result.length == 0){
                    var sql2 = "INSERT INTO useraccounts(userName, userPassword, userEmail) VALUES ('"+username+"','"+password+"','"+email+"')";
                    connection.query(sql2, function (err) {
                        if(err) throw err;
                    });
                }
                else{

                    // console.log("Account already exists!");
                }
            })

        res.end();
});
//
//
// const port = 5000;
//
// app.listen(port, () => `Server running on port ${port}`);
// // module.e