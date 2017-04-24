var mysql = require("mysql");
var http = require('http');
var qualificationsInfo;


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cv"
});


con.connect(function (err) {
    if (err) {
        console.log('Error connecting to the database');
        return;
    }
    console.log('Connection established');
});


con.query('SELECT * FROM QualificationsInfo ORDER BY id ASC', function (err, rows) {
    if (err) throw err;
    qualificationsInfo = rows;
});


con.end(function (err) {
});


http.createServer(function (request, response) {
    var body = [];
    request.on('error', function (err) {
        console.error(err);
    }).on('data', function (chunk) {
        body.push(chunk);
    }).on('end', function () {
        body = Buffer.concat(body).toString();

        response.on('error', function (err) {
            console.error(err);
        });

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Access-Control-Allow-Origin', '*');

        var responseBody = {
            qualificationsData: qualificationsInfo
        };

        response.write(JSON.stringify(responseBody));
        response.end();
    });
}).listen(8800);
