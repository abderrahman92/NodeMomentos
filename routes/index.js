var express = require('express');
var router = express.Router();
var data = require('../data/data.json')
JSON.stringify(data)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 'users': data,'id':-1 });
});


router.get('/:id', function (req, res) {
  const id = req.params.id
  if(id < data.length){
    res.render('index', { 'users': data ,'id':id});
    console.log('true')
  }
  else{
    res.render('index', { 'users': data ,'id':-1})
    console.log('false')
  }
})

module.exports = router;
