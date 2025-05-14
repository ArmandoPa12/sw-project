var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var materiaRouter = require('./src/routes/materia');
var notaRouter = require('./src/routes/nota');
var imagenRouter = require('./src/routes/file');
var calendarRouter = require('./src/routes/calendario');




var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/materia', materiaRouter);
app.use('/nota', notaRouter);
app.use('/file', imagenRouter);
app.use('/calendario', calendarRouter);



module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});