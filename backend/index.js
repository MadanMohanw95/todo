const exp = require('constants');
const express = require('express');
const app = express();
const routeHandler = require('./routes/todo');

app.use(express.json());

app.use('/app', routeHandler);

app.listen(5000)