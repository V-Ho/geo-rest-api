const express = require('express');
const bodyParser = require('body-parser'); //remember to include above middleware
const mongoose = require('mongoose');
const app = express();

//connect to mongodb - mongose provides connect method to find db connection stream
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise; //setting mongoose to global promise bc Mongodb's version is deprecated

app.use(express.static('public')); //express serves static files in Public folder

app.use(bodyParser.json());//we want bodyParser middleware to parse json before it reaches route handler

//initialise routes to all use /api route, and require the routes exported from api.js
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
  console.log(err);
  res.status(422).send({error:err.message});//pass error message (obj) back to client
})

app.listen(process.env.port||4000,function(){
console.log('now listening for requests');
});
// app listens either for setup variable (ex.heroku specficies port number in env) OR listens on 400
