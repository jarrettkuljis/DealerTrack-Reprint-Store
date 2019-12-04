var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var https = require('https');
var ip = require("ip");
var testmode = false;

const PORT = process.env.PORT || 5000;
app.set('view engine','ejs');
app.use(bodyParser.json({limit: '25mb'}));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

/* Testing the comment block */