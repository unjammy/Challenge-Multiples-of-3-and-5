/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  // do your work here

  var leftside = 0;
  var rightside = 0;

  for(var i = 1; i < (n / 3); i++){

      leftside = leftside + (i * 3);

  };

  console.log(leftside);

  for(var j = 1; j < (n / 5); j++){

      rightside = rightside + (j * 5);

  };

  console.log(rightside);

  sum = leftside + rightside;

  return sum;
};
