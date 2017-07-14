var friends = require('../data/friends.js');

module.exports = function (app) {

app.get("/api/friends", function(req,res){

  res.json(friends);

})

app.post("/api/friends", function(req,res){

//================declare variables "global" (to the post route, at least)

var differences = []; 
var allDiff = [];
var bestCandidate;
var arrayOne = [];

//some functional/mapping logic to tease out the arrayOne and arrayTwo arrays to compare

arrayOne.push(friends[friends.length-1])

arrayOne = arrayOne.map(function(c){
return c.scores
});

arrayOne = arrayOne[0];

var arrayTwo = friends.map(function(d){
return d.scores
});

//subtract all of the different items in arrayOne from all of the correspondiing indexes in arrayTwo (for every single object in arrayTwo) which is the bigger object. Get the absolute values of the difference.//

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

//Determine the smallest value (differences) in the array of all absolute differences (allDiff). This is the score of your best match.//
  
Array.min = function( allDiff ){
    return Math.min.apply( Math, allDiff );
};    

//find the indexOf that score. It is also the index of the person in the whole friends data object.//

  bestCandidate = Array.min(allDiff);
  bestIndex = allDiff.indexOf(bestCandidate)
  bestCandidate = friends[bestIndex];

  //here we will have to post it onto the pop-up modal
 
  console.log(bestCandidate) 

});

}