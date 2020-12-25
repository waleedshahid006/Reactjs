var express = require('express');
var router = express.Router();

var users = [
  {
    email: 'wal@gmail.com' , password: '1234'
  },
  {
    email: 'eed@gmail.com' , password: '1122'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("helloo Backendd");
});

router.post('/login' , function(req,res){
  let result = users.find(user => user.email == req.body.email);
  if(result){
    if(result.password == req.body.password) {
      res.status(200).send({
        message: "Success"
      })
    } else {
      res.status(200).send({
        message: "Password incorrect"
    })
  }  }
  else {
    res.status(200).send({
      message: "Email not found"
  })
  }
})

module.exports = router;
