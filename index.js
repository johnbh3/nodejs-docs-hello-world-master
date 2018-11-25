var mysql      = require('mysql');
var connection = mysql.createConnection({
    host : 'mysql.iluminarsistemas.com.br',
    user :  'iluminarsistem02',
    password : 'p4r3q3j2',
    database : 'iluminarsistem02'  
});


var http = require('http');

var server = http.createServer(function(request, response) {
    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
      });

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
