var https = require('https');

function getAndPrintHTMLChunks () {
  var data = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // borrowed from template provided in lesson and working with Kyle.
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log(data, '\nChunk Received. Length: ', data.length);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(data);
    });
  });
}

getAndPrintHTMLChunks();