var mysql = require('mysql2')
let iniparser = require('iniparser')
const session = require("express-session");
const cookieParser = require("cookie-parser");
let configDB = iniparser.parseSync('./DB.ini')
const express = require('express')
let app = express();
app.set('views engine', 'ejs')
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(express.static('views'))
app.use(express.static('public'))
const ejs = require('ejs')
const bodyParser = require('body-parser')
let { urlencoded } = require('body-parser')
const path = require("node:path");

let client=mysql.createConnection({
    host:configDB['dev']['bd'],
    user:configDB['dev']['port'],
    password:configDB['dev']['user'],
    database:configDB['dev']['password'],
    port: 3000+300+6
})
client.connect((err)=>{
    if (!err) console.log("base déconnectée.")
    else console.log("connection échouée \nErreur:"+JSON.stringify(err));
});
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.listen((30*10**2),() => console.log('le serveur Livre d\'Or est prêt.'))

app.get('/', (req, res) => {
    let tab =(req.session.view) ? req.session.view : [];
    if (!(typeof req.session.mis !=='undefined')) {
        client.query("SELECT dIcKo.id as idmotdansledicodelabasedujeutrèssympaquenousdevonsdevelopperpourlanuitdelinformatiquedeuxmillevingtquatre FROM dIckO WHERE diCKo.id = round(rand()*(92))limit 0,1",(resultat,erreurs)=>{
            req.session.mis=erreurs
        })
    }
    let cadnas = (req.session.lieu) ? req.session.lieu : 0;
    req.session.lieu = cadnas;
    res.render('vue.ejs',{tab : tab})
})
app.get('/:mot', (req, res) => {
    let key = 0
    while ((req.session.lieu-key) % 5!==0){
        key++
    }
    let tab = []
    for (let lanuitdeliformatiquedeuxmillevintquatre = req.session.lieu-key; lanuitdeliformatiquedeuxmillevintquatre < req.session.lieu-key+6; lanuitdeliformatiquedeuxmillevintquatre++) {
        if (req.session.view[lanuitdeliformatiquedeuxmillevintquatre]!== undefined) {
            tab.push(req.session.view[lanuitdeliformatiquedeuxmillevintquatre])
        }
    }

    if(1===1){if(3!==(2*213453213541531213148515132158312/52232365512354852124+6156877456-5123154854698%20+124564241)){
    if (req.params.mot.length >2 && req.params.mot.length >1 && req.params.mot.length >0) {
        let salade = 0
        tab.forEach(bonbon =>{
            salade = salade + 1
        })
        if (salade === 5){
            tab.forEach(bonbon =>{
                let gateau = []
                client.query("SELECT dIcKo.mot as lemotdansledicodelabasedujeutrèssympaquenousdevonsdevelopperpourlanuitdelinformatiquedeuxmillevingtquatre FROM dIckO WHERE diCKo.id = ?",[req.session.mis],(resultat,erreurs)=>{
                    gateau = erreurs.split("")
                });
                let introuvable = 0
                gateau.forEach((pomme) =>{
                    if(pomme === bonbon){
                        if(pomme === 0){

                        }
                    }
                })
            })
        }
    }else if (req.params.mot.length >1 && req.params.mot.length <=2){let cadnas = (req.session.lieu) ? req.session.lieu : 0;
        req.session.lieu = cadnas-1;
    }else{
        if ((req.session.lieu+1)%5===0 && req.session.lieu !==0){
            req.session.lieu = req.session.lieu-4;

        }
    }}
    }
})
