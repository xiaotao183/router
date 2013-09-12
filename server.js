/**
 * Created with JetBrains WebStorm.
 * User: txiao
 * Date: 14/03/13
 * Time: 9:56 PM
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var router = require('./index');
var route = router();

route.get('/', function(req, res) {
    res.writeHead(200);
    res.end('hello index page');
});

http.createServer(route).listen(8080); // start the server on port 8080