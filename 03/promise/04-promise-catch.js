new Promise( function(resolve, reject) {
  // resolve(1);
}).then( function(result) {
  // throw new Error('error');
}).catch( function(err) {

});

// difference???

new Promise( function(resolve, reject) {
  // resolve(1);
}).then(
    function(result) {
      // throw new Error('error');
    },
    function(err) {}
);
