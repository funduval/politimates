

        var differences = [];
            var allDiff = [];
            var arrayOne = [];
            var arrayTwo = res.json(req.body);
            arrayOne.push(candidates[candidates.length-1])
            var bestMatch;
            var bestIndex = 0;

        arrayOne = arrayOne.map(function(c) {
            return c.scores
        });

        arrayOne = arrayOne[0];

        var arrayTwo = candidates.map(function(d) {
            return d.scores
        });

//subtract all of the different items in arrayOne from all of the correspondiing indexes in arrayTwo, for each object//

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

        //Determine the smallest value//

        Array.min = function(allDiff) {

            return Math.min.apply(Math, allDiff);
        };

        //find the indexOf that score.//

        bestMatch = Array.min(allDiff);
        bestIndex = allDiff.indexOf(bestMatch)

        //=====this is. the magic object=====================================//



   