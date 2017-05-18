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

  for(var i = 1; i < n ; i++){

    if( !(i%3) ){
      sum = sum + i;
    }
    if( !(i%5) ){
      sum = sum + i;
    }
    if( !(i%15) ){
      sum = sum - i;
    }

  };

  return sum;
};
