const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
    console.log("Servidor no ar - Porta: 3000!")
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/calcular', function(req, res) {
    var num1 = req.body.valor1;
    var num2 = req.body.valor2;
    var t = req.body.tipo;

    var total;

    if (t == 2) {
        var DECIMAL = 10
        total = parseInt(num1, DECIMAL) + parseInt(num2, DECIMAL);
    }
    if (t == 3) {
        total = num1 - num2;
    } 
    if (t == 4) {
        total = num1 * num2;
    } 
    if (t == 5) {
        total = num1 / num2;
    }  

    res.render('calculo.ejs', {total: total});
});


