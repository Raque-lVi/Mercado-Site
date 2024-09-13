var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var loginRouter = require('./routes/fora/login');
var perguntasRouter = require('./routes/fora/perguntas');
var usersRouter = require('./routes/fora/users');

var indexRouter = require('./routes/index');
var CadastroRouter = require('./routes/Cadastro');
var CarrinhoRouter = require('./routes/Carrinho');
var GaleriaRouter = require('./routes/Galeria');
var LoginRouter = require('./routes/Login');
var VendasRouter = require('./routes/Vendas');

var app = express();

// view engine setup

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');//app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//HTML //HTML //HTML //HTML //HTML //HTML //HTML //HTML //HTML //HTML //HTML //HTML 

app.use('/', indexRouter);
app.use('/cadastro', CadastroRouter);
app.use('/carrinho', CarrinhoRouter);
app.use('/galeria', GaleriaRouter);
app.use('/login', LoginRouter);
app.use('/vendas', VendasRouter);


//Pesquisa //Pesquisa //Pesquisa //Pesquisa //Pesquisa //Pesquisa //Pesquisa //Pesquisa 

app.use('/api/fotos', usersRouter);
app.use('/api/perguntas', perguntasRouter);
app.use('/api/pessoas', loginRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  

  // message = document.getElementById("message");
  // h2 = document.getElementById('status');
  // pre = document.getElementById("stack");

  console.log(err.status)
  console.log(err.stack)

  // res.render('error');
  
});

module.exports = app;
