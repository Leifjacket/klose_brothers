const BowlingCalculator = require('./bowling');

describe("Bowling geordnete Tests", () => {
    test("Spares mit erstem Wurf 0 und zweitem 10, sollte 100 ergeben", () => {
        var throws2 = [
            0,10,   //10
            0,10,   //+10=20
            0,10,   //+10=30
            0,10,   //+10=40
            0,10,   //+10=50
            0,10,   //+10=60
            0,10,   //+10=70
            0,10,   //+10=80
            0,10,   //+10=90
            0,10,0  //+10=100
        ];
        var bowlC = new BowlingCalculator(throws2);
        expect(bowlC.getScore()).toBe(100);
    });
    test("9 Spares mit jeweils 9 Extrapunkten und ein Spare und eine 9 als Bonus wurf, sollte 190 ergeben", () => {
        var throws2 = [
            9,1,   //19
            9,1,   //+19=38
            9,1,   //+19=57
            9,1,   //+19=76
            9,1,   //+19=95
            9,1,   //+19=114
            9,1,   //+19=133
            9,1,   //+19=152
            9,1,   //+19=171
            9,1,9 //+19=190
        ];
        var bowlC = new BowlingCalculator(throws2);
        expect(bowlC.getScore()).toBe(190);
    });

    test("Abwechselnd 1 Punkt und keinen Punkt, sollte 10 ergeben", () => {
        //10 insgesamt
        var throws2 = [
            0,1, 
            1,0, 
            0,1, 
            1,0, 
            0,1, 
            1,0, 
            0,1, 
            1,0, 
            0,1, 
            1,0
        ];
        var bowlC = new BowlingCalculator(throws2);
        expect(bowlC.getScore()).toBe(10);
    });
    test("Gar keine Punkte, sollte 0 ergeben", () => {
        //0 insgesamt
        var throws2 = [
            0,0, 
            0,0, 
            0,0, 
            0,0, 
            0,0, 
            0,0, 
            0,0, 
            0,0, 
            0,0, 
            0,0
        ];
        var bowlC = new BowlingCalculator(throws2);
        expect(bowlC.getScore()).toBe(0);
    });
    test("Nur Strikes, sollte 300 ergeben", () => {
        //300 insgesamt
        var throws2 = [
            10, 
            10, 
            10, 
            10, 
            10, 
            10, 
            10, 
            10, 
            10, 
            10,10,10
        ];
        var bowlC = new BowlingCalculator(throws2);
        expect(bowlC.getScore()).toBe(300);
    });

    test("Erster Wurf 9, der Zweite wurf geht daneben, sollte 90 ergeben", () => {
        //90 insgesamt
        var throws2 = [
            9,0,  
            9,0,  
            9,0,  
            9,0,  
            9,0,  
            9,0,  
            9,0,
            9,0,
            9,0,
            9,0 
        ];
        var bowlC = new BowlingCalculator(throws2);
        expect(bowlC.getScore()).toBe(90);
    });
    test("5 Strikes die keine Extrapunkte geben, sollte 50 ergeben", () => {
        var throwsExample = [
            10, //10
            0,0, //+0=10
            10, //+10=20
            0,0,  //+0=20
            10, //+10=30
            0,0, //+0=30
            10, //+10=40
            0,0, //+0=40
            10, //+10=50
            0,0  //+0=50
        ];
        var bowlC = new BowlingCalculator(throwsExample);
        expect(bowlC.getScore()).toBe(50);
    });
})
describe("Bowling ungeordnete Tests", () => {
    test("4 Spares mit Bonuspunkten und 5 Nichtspares, bei hintereinander folgende Würfe in verschiedenen Frames einen Spare ergeben hätten, sollte 104 ergeben", () => {
        //11 insgesamt
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
        var bowlC = new BowlingCalculator(throws2);
        expect(bowlC.getScore()).toBe(104);
    });
    test("Strikes or spares? 4 Spares und 6+1Strikes (bonus throw), sollte 210 ergeben", () => {
        var throws2 = [
            0,10,   //20
            10,     //+20=40
            0,10,   //+20=60
            10,     //+30=90
            10,     //+20=110
            10,     //+20=130
            0,10,   //+20=150
            10,     //+20=170
            10,     //+20=190
            0,10,10 //+20=210
        ];
        var bowlC = new BowlingCalculator(throws2);
        expect(bowlC.getScore()).toBe(210);
    });
    test("Zufällige Würfe ohne Spares, Strikes oder Verfehlungen, sollte 53 ergeben", () => {
        var throwsExample = [
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
        var bowlC = new BowlingCalculator(throwsExample);
        expect(bowlC.getScore()).toBe(53);
    });
    test("Zufällige Würfe mit Spares, Strikes und Verfehlungen, sollte 122 ergeben", () => {
        var throwsExample = [
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
        var bowlC = new BowlingCalculator(throwsExample);
        expect(bowlC.getScore()).toBe(122);
    });
})