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
  // var i declared outside so it doesnt repeat declarations on every iteration
  // limit = array.length so it doesnt call array.length every iteration

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

  /* Alternative Solution

  var i = 0;
  while (i < n){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
    i++;
  }

  // Loops are "blocking"
  // For loop is preferred when you know how many items there are
  // While loop is preferred when you don't

  */


  return sum;
};
