const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine

const bodyParser = require('body-parser')
const post = require('./models/post')

//Configurando o template de HTML
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req,res){
    res.render("primeira_pagina")
})

//Configurando o body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Rota pra segunda página
app.get("/segunda", function(req,res){
    res.render("segunda_pagina")
})


//Os dados do form serão enviados via POST
app.post("/cadastrar", function(req, res){
    post.create({
        //Parâmetro // Requisição // Body // Name do input 
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data: req.body.date,
        observacao: req.body.obs
    }).then(function(){
        res.send("Dados recebidos")
    }).catch(function(erro){
        res.send("Falha ao cadastrar: "+erro)
    })
})


app.listen(8081, function(){
    console.log("Servidor ativo")
})