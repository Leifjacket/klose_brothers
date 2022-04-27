const BowlingCalculator = require('./bowling');

describe("Bowling tests", () => {
    test("Should give 53 back as the Number of points for throws1 ", () => {
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
        var bowlC = new BowlingCalculator(throws1);
        expect(bowlC.getScore()).toBe(53);
    });
    test("Should give 39 back as points for throws2", () => {
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
        var bowlC = new BowlingCalculator(throws2);
        expect(bowlC.getScore()).toBe(39);
    })
})