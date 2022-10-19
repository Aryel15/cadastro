const express = require("express");

const app = express();

//importar banco
const db = require('./model/services/db.js');

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

//ultima linha
app.listen(8081, function(){
    console.log("O servidor está funcionando na url http://localhost:8081");
})