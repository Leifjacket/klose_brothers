const BowlingCalculator = require('./bowling');

var randomThrow = [];


var bowlC1 = new BowlingCalculator(throws1);
randomThrow = bowlC1.generateFrame();
console.log(bowlC1.getScore());
var bowlC2 = new BowlingCalculator(throws2);
console.log(bowlC2.getScore());