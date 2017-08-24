var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('Hola mundo, con Express');
});

app.use(function(req, res){
    res.sendStatus(404); 
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Servidor express está escuchando por el puerto %s', port);
});
