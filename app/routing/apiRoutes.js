//require files=============================

var candidates = require('../data/candidates.js');
var bestCandidate = require('../data/bestCandidate.js');

//export function that routes api calls=======================

module.exports = function(app) {

    app.get("/api/candidates", function(req, res) {

        res.json(candidates);

    })

    app.get("/api/bestCandidate", function(req, res) {

        res.json(bestCandidate);

    })

    //handle posts to this URL by toggling a true response & pushing to array

    app.post("/api/candidates", function(req, res) {

var differences = [];
var allDiff = [];
var arrayOne = [];

        findDifferences();

        // res.json(bestMatch);

        alert("Your best match is: " + bestMatch)

    });

  };

    //export function that finds differences between arrays================

   function findDifferences() {

    var bestMatch;
    var bestIndex;

        arrayOne.push(candidates[candidates.length - 1])

        arrayOne = arrayOne.map(function(c) {
            return c.scores
        });

        arrayOne = arrayOne[0];

        var arrayTwo = candidates.map(function(d) {
            return d.scores
        });

        //subtract all of the different items in arrayOne from all of the correspondiing indexes in arrayTwo (for every single object in arrayTwo) which is the bigger object. Get the absolute values of the difference.//

        arrayTwo.map(function(object) {

            for (var i = 0; i < object.length; i++) {

                var sum = Math.abs(object[i] - arrayOne[i])
                differences.push(sum);

            }
            var totDiff = differences.reduce(function(sum, value) {
                return sum + value;
            }, 0);

            allDiff.push(totDiff);

        });

        //Determine the smallest value (differences) in the array of all absolute differences (allDiff). This is the score of your best match.//

        Array.min = function(allDiff) {

            return Math.min.apply(Math, allDiff);
        };

        //find the indexOf that score. It is also the index of the person in the whole candidates data object.//

        bestMatch = Array.min(allDiff);
        bestIndex = allDiff.indexOf(bestMatch)

        //=====this is. the magic object=====================================//

        bestMatch = candidates[bestIndex];

    }


