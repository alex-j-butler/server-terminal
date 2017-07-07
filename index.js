const WebSocket = require('ws');
const ReadLine = require('readline');

const sock = new WebSocket("ws://sydney.qixalite.com:9000/api/v1/servers/console/ws?uuid=53b3f395-d3f5-45b5-a170-a4953dbc247e");

const rl = ReadLine.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.on('line', function(line) {
	sock.send(line);
})

sock.on('open', function() {
	console.log("Connection opened");
});

sock.on('message', function(data) {
	console.log(data);
})