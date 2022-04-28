const BowlingCalculator = require('./bowling');
const frameGenerator = require('./frameGenerator');

var randomThrow = [];

var throws1 = [
    1,2, //3
    0,4, //+4=7
    6,0, //+6=13
    0,0,  //+0=13
    6,4, //+19=32
    9,1, //+10=42
    0,10, //+20=62
    10, //+20=82
    5,5, //+20=102
    10,5,5  //+20=122
];
for(counter=0;counter<10;counter++){
    var randomThrows = frameGenerator.generateFrame();
    var bowlC1 = new BowlingCalculator(randomThrows);
    console.log(bowlC1.getScore());
}