//Your api-routes.js file should contain two routes:

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var path = require('path');

module.exports = function(app){

  // API GET Requests
  // Below code handles when users "visit" a page. 
  // In each of the below cases when a user visits a link 
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
  // ---------------------------------------------------------------------------

  app.get('/api/tables', function(req, res){
    res.json(friendData);
  });

/*
  app.get('/api/waitlist', function(req, res){
    res.json(waitListData);
  });   

 */

  app.post('/api/survey', function(req, res){

   
    if(tableData.length < 5 ){
      tableData.push(req.body);
      res.json(true); // KEY LINE
    }

   
    else{
      waitListData.push(req.body);
      res.json(false); // KEY LINE
    }

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don't worry about it!

  app.post('/api/clear', function(req, res){
    // Empty out the arrays of data
    tableData = [];
    waitListData = [];

    console.log(tableData);
  })
}