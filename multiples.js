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

  for(var i = 0; i <= n; i++){
    if ( (i % 3) === 0 ){
      leftside = leftside + i;
    }
  };

  for(var j = 0; j <= n; j++){
    if( (j % 5) === 0 ){
      rightside = rightside + j;
    }
  };

  sum = leftside + rightside;

  return sum;
};
