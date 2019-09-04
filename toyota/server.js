const express = require('express');
const parser = require('body-parser');
const crypto = reqiure('crypto');
const msql = require('mysql');
const session = require('express-session');

const app = express();

app.use(express.static('./public'));

app.use(morgan('short'));

app.use(parser.urlencoded({extended:false}));

const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'customers',
    password:'password'
});

app.post('userdetails',(req, res)=>{
    const user = req.body.customerId;
        user = req.body.name;
        user = req.body.state;




        const queryString = "INSERT INTO customers {costomerId,name,state} VALUES(?,?,?,?,?,?)"
        connection.query(queryString, []);
        res.end();
});

app.listen(8001);
console.log('Running at port 8001');