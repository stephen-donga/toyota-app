// Calling the modules to beused and assigning them to variables
const express = require('express');
const parser = require('body-parser');
const mysql = require('mysql');
const morgan = require('morgan');

//assing express to our app
const app = express();

// setting the toyota page
var html_dir ='./public/';

// Enablingtheuse of express to the app
app.use(express.static('./public'));

app.use(morgan('short'));

app.use(parser.urlencoded({extended:false}));


app.get('/', function(req, res){

    var steph ={root :__dirname}
    res.sendFile(html_dir + '/toyota.html',steph);
});

var connection =  mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'customers',
    password:'password',

});
connection.connect(function(error){
    if(!error){
        console.log('Database is connected'); 
    }
    else{
        console.log('Error');
    }
});
app.post('/userdetails',(req, res)=>{
    
        var user = req.body.customerId;
        var userName = req.body.name;
        var userState = req.body.state;


        let queryString = "INSERT INTO product_purshase(costomerId,name,state) VALUES(?,?,?)"; 
        connection.query(queryString, [user,userName,userState])
       
        connection.end();
        res.end();
    });
    
app.listen(8001);
console.log('Running at port 8001');