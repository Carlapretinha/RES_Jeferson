const db = require('./banco')

//Criando o molde de uma tabela do banco
const Agendamentos = db.sequelize.define("agendamentos", {
    //Campos da tabela
    nome:{
        //Tipo de dado do campo
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data:{
        type: db.Sequelize.STRING
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
    
})

// //Criação de tabela
// Agendamentos.sync({force: true})

//INSERTs
/*Agendamentos.create({
    nome: "Jeferson Roberto de Lima",
    endereco: "Av Aguia de Haia",
    bairro: "Jd São Nicolau",
    cep: 08390123,
    cidade: "São Paulo",
    estado: "SP"
})*/

module.exports = Agendamentos