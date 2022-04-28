const BowlingCalculator = require('./bowling');
const frameGenerator = require('./frameGenerator');

var throws2 = [
    0,6,  //6
    4,3,  //+7=13
    7,2,  //+9=22
    8,2,  //+15=37
    5,4,  //+9=46
    6,4,  //+10=56
    0,10, //+13=69
    3,6,  //+9=78
    4,6,  //+14=92
    4,6,2 //+12=104
];
var bowlCalc = new BowlingCalculator(throws2);
console.log(bowlCalc.getScore());

var randomThrow = [];


for(counter=0;counter<10;counter++){
    var randomThrows = frameGenerator.generateFrame();
    var bowlCalc = new BowlingCalculator(randomThrows);
    console.log(bowlCalc.getScore());
}