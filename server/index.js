let http = require('http');
let static = require('node-static');
let file = new static.Server('.');
let WebSocketServer = new require('ws');

http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(3003);

console.log('Server running on port 3003');

let webSocketServer = new WebSocketServer.Server({
  port: 8081
});

console.log('WebSocketServer running on port 8081');

let clients = {};

webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("новое соединение " + id);

  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);

    for (var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('соединение закрыто ' + id);
    delete clients[id];
  });
});