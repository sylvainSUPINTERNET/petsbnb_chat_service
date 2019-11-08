'use strict';
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 4999;

app.set('view engine', 'ejs');


app.get('/join', async (req,res,next) => {
    res.render('home');
});

io.on('connection', function(socket){
    console.log('a user connected');
});


http.listen(port,() => {
    console.log(`Chat starts on port : ${port}`);
});


