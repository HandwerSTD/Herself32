const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.write('<p align="center">Herself32 %%%</p>');
	for (var i = 1; i <= 15; ++i) {
		res.write(`<p align="center"><font size=${Math.abs(8 - i)}px>Herself32 %%%</font></p>`);
	}
	res.write('<hr />');
	res.end('<footer><p align="center"><small>Herself32 %%%</small></p></footer>');
});

server.listen(port, hostname, () => {
	console.log(`Herself32 %%% is running at http://${hostname}:${port}`);
})