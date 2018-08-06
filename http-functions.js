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
      for (data in chunk) {
        //console.log(chunk);
        receivedData += chunk;
        // console.log(receivedData);
        return receivedData;
      };
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(receivedData);
    });
  });
}