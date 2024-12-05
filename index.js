var mysql = require('mysql2')
let iniparser = require('iniparser')
let configDB = iniparser.parseSync('./DB.ini')
const express = require('express')
let app = express();
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))
const ejs = require('ejs')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const path = require("node:path");

let client=mysql.createConnection({
    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database'],
    port: 3308
})