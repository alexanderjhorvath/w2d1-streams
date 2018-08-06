function doSomething() {
  return 'somethijngj';
}

var thing = doSomething;
var thing2 = thing();
// console.log(doSomething());
// console.log(doSomething);

function callStuff(callback) {
  console.log(callback);
}

callStuff(doSomething());