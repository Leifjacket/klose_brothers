const BowlingCalculator = require('./bowling');

var throws1 = [
    1,2, 
    3,4, 
    5,4, 
    3,2, 
    1,1, 
    1,2, 
    3,4, 
    5,4, 
    3,2, 
    1,2
];
var throws2 = [
    0,1, 
    1,0, 
    0,1, 
    1,0, 
    1,0, 
    0,1, 
    0,1, 
    1,0, 
    1,0, 
    10,10,10
];
var bowlC1 = new BowlingCalculator(throws1);
console.log(bowlC1.getScore());
var bowlC2 = new BowlingCalculator(throws2);
console.log(bowlC2.getScore());