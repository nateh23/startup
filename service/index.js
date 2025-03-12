const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = "token";

//mines honestly so similar to simon haha
let users = [];
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

//init stack
app.use(express.json());
app.use(cookieParser());

//prep public
app.use(express.static('public'));

//route this
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//create user
//login user
//delete user

//verification to make sure user can submit score

//get all scores
//submit the users score


//error handler
//home page if theres a failure


//low level funcs


//debug listener
