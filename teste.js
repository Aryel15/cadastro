const express = require("express");

const app = express();

//ultima linha
app.listen(8081, function(){
    console.log("O servidor está funcionando na url http://localhost:8081");
})