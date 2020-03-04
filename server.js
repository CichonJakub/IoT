// server.js
const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { Client } = require('pg')

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'iot',
  password: 'Marcin',
  port: 5432,
})

const port = 80;

//app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
server.listen(port, function(){
    console.log(`App listening on port ${port}!`);
});

client.connect();

function init(){
    client.query('SELECT * from test', (err, res) => {
        if( !err ){
            console.log(res.rowCount);
            console.log(res.rows);
            if( res.rowCount > 0 ){
                console.log(res);
            }
        }else{
            console.log(err);
        }
        client.end();
    })
}
