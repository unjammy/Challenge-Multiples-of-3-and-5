var multiples = require( './../multiples.js' ); // import the file we are testing
var chai = require( 'chai' );
var should = chai.should();

describe( 'Sum of a Multiple Function', function() {

  it( 'should return the value 23 if given 10 as an argument', function() {
    var sum = multiples.sumOfAMultiple( 10 );
    sum.should.equal( 23 );
  });

  it( 'should return the value 2633 if given 100 as an argument', function() {
    var sum = multiples.sumOfAMultiple( 100 );
    sum.should.equal( 2633 );
  });

  // when your tests pass, uncomment the next two and
  // change the expected value to your calculated result

  it( 'should return the value 233168 if given 1000 as an argument', function() {
    var sum = multiples.sumOfAMultiple(1000);

    // Change the argument given to .equal() to the correct number
    sum.should.equal( 233168 );
  });

  it( 'should return the value 50005000 for if given 10000 as an argument', function() {
    var sum = multiples.sumOfAMultiple(10000);

    // Change the argument given to .equal() to the correct number
    sum.should.equal( 50005000 );
  });


});
