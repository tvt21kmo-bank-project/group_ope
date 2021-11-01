var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/toka',function(request, response){
  console.log('toka');
  response.send('toka');
});

router.use(function(request, response, next){
  console.log("Olen Middleware 1");
  next();
});

router.get('/kolmas/:name?',function(request, response){
  console.log(request.params.name);
  response.send("Terve "+request.params.name);
});

router.get('/neljas/:fname/:lname?',function(request,response){
  console.log("Terve "+request.params.fname+" "+request.params.lname);
  response.send("Terve "+request.params.fname+" "+request.params.lname);
});

router.post('/', function(request, response){
  console.log(request.body);
  response.send("Terve "+request.body.fname+" "+request.body.lname);
});

router.put('/:id',function(request, response){
  response.send("henkilölle "+request.params.id+" Muutetaan nimeksi"+request.body.fname);
});

module.exports = router;
