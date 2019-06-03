const promise = new Promise((resolve, reject) => {
  throw new Error('WOPS');
});


promise.then( function(result) {
  console.log('Result', result);
}, function(err) {
  console.log('Caught', err.message);
});
