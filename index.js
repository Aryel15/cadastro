const express = require("express");
//importar banco
const db = require('./model/services/db.js');
const app = express();

app.use(function (req, res, next) {
    console.log("middleware 1");
    next();
})

app.get("/", function(req, resp){
    resp.send("Bem vindo ao meu app!");
})

app.get("/contato", function(req, resp){
    resp.send("Página de contato");
})

app.get("/produto", function(req, resp){
    resp.send("Página do produto")
})

//Banco de dados
console.log('SELECT * FROM usuario');
const usuarios = db.selectUsuario();
console.log(usuarios);

console.log('INSERT INTO usuario');
const result = db.insertUsuario({nome: "Zé", senha: "oi12345"});
console.log(result);

console.log('DELETE FROM usuario');
const result3 = db.deleteUsuario(2);
console.log(result3);

console.log('UPDATE usuario');
const result2 = db.updateUsuario(3, {nome: "Zé José", senha: "oi12345"});
console.log(result2);

;(async () => {
    const database = require('../cadastro-1/model/services/dborm.js');
    const Cliente = require('../cadastro-1/model/entidade/cliente.js');

    console.log('Criar tabela =============================================================');
    const resultado = await database.sequelize.sync();
    console.log(resultado);
    console.log('Criar registro =============================================================');
        const inserirCliente = await Cliente.create({
            nome:'João da Silva',
            idade: 10,
            endereco: 'Rua Paulista, n 1000'
        })
        console.log(inserirCliente);
        console.log('Buscar um registro =============================================================');
        const cliente = await Cliente.findByPk(1);
        console.log(cliente);
})();

//ultima linha
app.listen(8081, function(){
    console.log("O servidor está funcionando na url http://localhost:8081");
})

