require('babel-register')
require("twig")
require("http")
const mysql = require('mysql')
const bodyparser = require('body-parser')

const static = require('express-static')
const app = require("express")();
//const morgan = require('morgan') 

const db = mysql.createConnection({
    'host' : 'localhost' ,
    'database' : 'elie_restaurant',
    'user': 'root',
    'password':''
})
db.connect((err) =>{
    if(!err)
        console.log('connexion etablie a la BD')
    else
    console.log(err.message)

})


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.set('view engine','twig')
app.set('views','view')


app.get('/',(req,res) =>{
    res.render('index')
})
app.get('/demande',(req,res) =>{
    res.render('demande')
})
app.post('/demande',(req,res) =>{

    let parametre =[req.body.nom, req.body.prenom, req.body.adresse, req.body.telephone,req.body.quantite, req.body.choix,req.body.date]
    console.log(parametre)

    db.query('INSERT INTO client(NOM,PRENOMS,ADRESSE,TELEPHONE,QUANTITE,CHOIX,DATE_CMD) VALUES(?,?,?,?,?,?,?)',parametre =[req.body.nom, req.body.prenom, req.body.adresse, req.body.telephone,req.body.quantite, req.body.choix,req.body.date],(err) =>{
        if(!err)
        res.send('donnees enregistrees ! nous vous contacterons tres bientot')
        else
        res.send(err.message)  
    })
    
})
app.use(static(__dirname + '/public'))
app.listen(8082,(err)=>{
    if(!err)
    console.log('le server est lance au port 8082');
    else console.log(err.message)
})




