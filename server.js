const http = require("http");
const fs = require("fs");
const express = require('express');

const app = express();
const server = http.createServer(app);
const port = 3000;


app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write("Non trouvé");
        }
        else
            res.write(data);

        res.end();
    })
});
server.listen(port, (err) => {
    if (err) {
        console.log("Oups...", err);
        return;
    }
    console.log("Listening on port http://127.0.0.1:" + port);
});