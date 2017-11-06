var jc = require('json-config-reader');
var _ = require('lodash');

var data = jc.read('data.json');

_.forEach(data.items, function(value){
  console.log(value);
});