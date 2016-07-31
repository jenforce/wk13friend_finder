
var path = require('path');

module.exports = function(app){

  app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });


  app.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  }); //app.use a default incase other paths fail?

}//end