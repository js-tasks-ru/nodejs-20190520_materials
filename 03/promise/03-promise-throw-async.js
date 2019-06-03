const promise = new Promise( function(resolve, reject) {
  setTimeout(function() {
    throw new Error('WOPS');
  }, 0);
});


promise.then( function(result) {
  console.log('Result', result);
}, function(err) {
  console.log('Caught', err.message);
});
