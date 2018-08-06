var https = require('https');
var receivedData = '';

function getAndPrintHTML (options) {
  var data = '';

  // borrowed from template provided in lesson and working with Kyle.
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      //console.log(chunk, '\nChunk Length: ', chunk.length);
      for (data in chunk) {
        receivedData += chunk;
        return receivedData;
      };
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(receivedData);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);