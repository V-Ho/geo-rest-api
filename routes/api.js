const express = require('express');
const router = express.Router(); //we are storing/mounting route handlers onto our router object
const Ninja = require('../models/ninja');

// get list of ninjas from db
router.get('/ninjas',function(req,res,next){
  res.send({type:'GET'});
});

//add new ninja to db
router.post('/ninjas',function(req,res,next){
  Ninja.create(req.body).then(function(ninja) {
    res.send(ninja);
  }).catch();//recieve post request with JSON data attached to body of request. creating new instance of Ninja by passing through data sent in req.body, then saving it to db. Returns promise

  });

//update a ninja in db
router.put('/ninjas/:id',function(req,res,next){
  Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Ninja.findOne({_id:req.params.id}).then(function(ninja){
      res.send(ninja);
    });
  });
});

//delete a ninja from db, need params(id)
router.delete('/ninjas/:id',function(req,res,next){
  Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
    res.send(ninja);
  })
});

module.exports = router;


// app.get('/api', function(req,res){
//   console.log('GET request');
//   res.send({name:'Yoshi'});
// });
// // app.get'/' listens for GET requests to localhost:4000/
// // responds to GET request with callback function(){}, passing in req & res parameters
// // req: contains info about request made
// // res: contains info about response (status code, send data etc. ).
// // res.end ends response so browser no longer waiting for response
//
