const express = require('express');
const fs=require('fs');

const server = express();

const port = 3000;

server
.get('/', (req, res) => {
    fs.readFile('./index.html', (err,html) => {
if (err) {
    throw new Error (err);
}

res.write(html);
res.end();
    });
})

.get('/script.js', (req, res) => {
    fs.readFile('./script.js', (err,html) => {
if (err) {
    throw new Error (err);
}

res.write(html);
res.end();
    });
})

.get('/style.css', (req, res) => {
    fs.readFile('./style.css', (err,html) => {
if (err) {
    throw new Error (err);
}

res.write(html);
res.end();
    });
})

.get('/avatar.png', (req, res) => {
    fs.readFile('./avatar.png', (err,html) => {
if (err) {
    throw new Error (err);
}

res.write(html);
res.end();
    });
})

    .listen(port, () => {
        console.log('App start on port', port)
    })
