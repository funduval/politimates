var friends = require('../data/friends.js');
//need to gather survey answers as a variable

module.exports = function (app) {

app.get("/api/friends", function(req,res){

  res.json(friends);
})

app.post("/api/friends", function(req,res){

  //if statements handling totalDifference
console.log("You are most compatible with: ");

var differences = []; 
var allDiff = [];
var bestCandidate;
var arrayOne = [];

arrayOne.push(friends[friends.length-1])

arrayOne = arrayOne.map(function(c){
return c.scores
});

arrayOne = arrayOne[0];

var arrayTwo = friends.map(function(d){
return d.scores
});

arrayTwo.map(function(object){
  
  for (var i = 0; i < object.length; i++){
    
    var sum = Math.abs(object[i] - arrayOne[i])
    differences.push(sum);
   
  }
   var totDiff = differences.reduce(function(sum, value) {
      return sum + value;
    }, 0);
    
    allDiff.push(totDiff);
    
});
  
Array.min = function( allDiff ){
    return Math.min.apply( Math, allDiff );
};    

  bestCandidate = Array.min(allDiff);
  bestIndex = allDiff.indexOf(bestCandidate)
  bestCandidate = friends[bestIndex];
 
  console.log(bestCandidate)
  

});




}