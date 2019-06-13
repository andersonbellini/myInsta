const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//connection string deve ser válidada
const connectionString ="mongodb+srv://admin:admin123@mycluster-1egxt.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true });

app.use((req,res,next)=>{
    req.io=io;
    next();
});

app.use(cors()); // liberado para qualquer aplicação acessar esse backend

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized' )));

app.use(require('./routes'));

server.listen(3333);

