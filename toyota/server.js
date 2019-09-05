const express = require('express');
const parser = require('body-parser');
const mysql = require('mysql');
const morgan = require('morgan');
var path = require('path');
var fs = require('fs')
 
const app = express();

app.use(express.static('./public'));

app.use(morgan('short'));

app.use(parser.urlencoded({extended:false}));

var connection =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'customers'
});
connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }
    else{
        console.log('Database is connected');
    }
})
app.post('userdetails',(req, res)=>{
    const user = req.body.customerId;
         user = req.body.name;
         user = req.body.state;


        const queryString = "INSERT INTO product_purshase{costomerId,name,state} VALUES(?,?,?)"
        connection.query(queryString, []);
        res.end();
});

app.listen(8001);
console.log('Running at port 8001');