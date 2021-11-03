var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
var app = express();

app.use(helmet());
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
const basicAuth = require('express-basic-auth');
app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))

function myAuthorizer(username, password, cb){
    if(username===process.env.authUser && password ===process.env.authPass){
        return cb(null, true);
    }
    else{
        return cb(null, false);
    }
}

var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);

module.exports = app;
