// Code your solutions in this file
function writeCards( names) {
    let thankCards = []
    for ( let i = 0; i < names.length; i++ ) {
      thankCards.push( `Thank you, ${names[i]}, for the wonderful surprise gift!` )
    }
    return thankCards
  }
  
  function countDown( start ) {
    while ( start > 0 ) {
      console.log( start );
      start -= 1;
    }
    console.log( start );
  }