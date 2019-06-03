const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('OK');
  }, 1000);

  setTimeout(function() {
    console.log('reject');
    reject(new Error('WOPS!'));
  }, 2000);

});


promise.then(function(result) {
  console.log('Result', result); // 1 second
}, function(err) {
  console.log('Caught', err); // 2 seconds
});
