var jc = require('json-config-reader');
var _ = require('lodash');

var data = jc.read('data.json');

_.forEach(data.items, function(value){
  console.log(value);
});

console.log(`${data.items[0].fname} ${data.items[0].lname} is ${data.items[0].age} years old`);
console.log(`${data.items[1].fname} ${data.items[1].lname} is ${data.items[1].age} years old`);