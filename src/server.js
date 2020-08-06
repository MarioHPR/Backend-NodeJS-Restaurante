const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://sistemafood:sistemafood@sistemafood.zk27t.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());// configurar  o endereço da api que deve consumir os dados
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '../','uploads')));
app.use(routes);

app.listen(3333);