var friends = require('../data/friends.js');
//need to gather survey answers as a variable

module.exports = function (app) {

app.get("/api/friends", function(req,res){

  res.json(friends);
})

app.post("/api/friends", function(req,res){

  //if statements handling totalDifference
  console.log("You are most compatible with: ");

});




}