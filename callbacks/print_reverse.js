var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var str = html
  var stringReverse = str.split("").reverse().join("");
  console.log(stringReverse);
}

getHTML(requestOptions, printReverse);