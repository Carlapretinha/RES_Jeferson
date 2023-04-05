const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conexao realizada com sucesso!")
}).catch(function(erro){
    console.log("Falha na conexao: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.INTEGER
    },
    origem:{
        type: Sequelize.STRING
    },
    endereco_email:{
        type: Sequelize.INTEGER
    },
    observacoes:{
        type: Sequelize.STRING
    }
})

Agendamentos.sync({force: true})

/*Agendamentos.create({
    nome: "Jeferson Roberto de Lima",
    endereco: "Av Aguia de Haia",
    bairro: "Jd São Nicolau",
    cep: 08390123,
    cidade: "São Paulo",
    estado: "SP"
})*/