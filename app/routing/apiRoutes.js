var candidates = require('../data/candidates.js');
//need to gather survey answers as a variable
var bestCandidate = require('../data/bestCandidate.js');

module.exports = function (app) {


app.get("/api/candidates", function(req,res){

  res.json(candidates);

})

app.get("/api/bestCandidate", function(req,res){

  res.json(bestCandidate);

})

//================declare variables "global" (to the post route, at least)

var differences = []; 
var allDiff = [];
var bestMatch;
var arrayOne = [];

//some functional/mapping logic to tease out the arrayOne and arrayTwo arrays to compare

arrayOne.push(candidates[candidates.length-1])

arrayOne = arrayOne.map(function(c){
return c.scores
});

arrayOne = arrayOne[0];

var arrayTwo = candidates.map(function(d){
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

//find the indexOf that score. It is also the index of the person in the whole candidates data object.//

  bestMatch = Array.min(allDiff);
  bestIndex = allDiff.indexOf(bestMatch)
  bestMatch = candidates[bestIndex];

  //here we will have to post it to the APIapp.post("/api/bestCandidate", function(req,res){

app.post("/api/bestCandidate", function(req,res){
 
 bestCandidate.push(bestMatch);

});

}

