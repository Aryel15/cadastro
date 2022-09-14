const express = require("express");

const app = express();

app.get("/", function(req, resp){
    resp.send("Bem vindo ao meu app!");
})

app.get("/contato", function(req, resp){
    resp.send("Página de contato");
})

app.get("/produto", function(req, resp){
    resp.send("Página do produto")
})

//ultima linha
app.listen(8081, function(){
    console.log("O servidor está funcionando na url http://localhost:8081");
})