const marker = require('@ajar/marker'); 
const ix = require('./index');

var str = ix.slugger('a','b','c','d');
console.log(marker.yellow(str));
console.log(marker.red("--------------------------------------"));