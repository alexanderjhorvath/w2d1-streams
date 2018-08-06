var https = require('https');
// var receivedData = '';

module.exports = function getHTML (options, callback) {
  // var https = require('https');
  var data = '';
  var receivedData = '';

  // borrowed from template provided in lesson and working with Kyle.
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      //console.log(chunk, '\nChunk Length: ', chunk.length);
        receivedData += chunk;
    });
    response.on('end', function() {
      callback(receivedData);
      // console.log('Response stream complete.');
    });
  });
}