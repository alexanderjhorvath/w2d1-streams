var getHTML = require('./http-functions');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions);
//console.log(getHTML);

function printHTML (html) {
  // getHTML(requestOptions);
  console.log(html);
};

printHTML(getHTML);