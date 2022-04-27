const BowlingCalculator = require('./bowling');

var throws1 = [
    1,2, //3
    3,4, //+7=10
    5,4, //+9=19
    3,2, //+5=24
    1,1, //+2=26
    1,2, //+3=29
    3,4, //+7=36
    5,4, //+9=45
    3,2, //+5=50
    1,2  //+3=53
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