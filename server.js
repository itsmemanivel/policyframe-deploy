const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const app = express()
const http = require('http');
const port =  process.env.PORT || 3000;


//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());



//static
app.use(express.static(__dirname + '/public/'));
app.get('*', express.static(__dirname  +  './public/index.html'));




app.listen(port, (err, res)=>{


	if (err) throw err;

    console.log(`🚀 Server is running on http://localhost:${port}`);
})