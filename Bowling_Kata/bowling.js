/*
Annahmen: 
    Es wird eine valide Datei mit Würfen verfügbar gemacht
    Ein Wurf der nichts getroffen hat wird mit einer 0 gekennzeichnet. 
    Ein Strike mit einer 10.
    Spares ergeben sich aus dem Programm.
*/

class BowlingCalculator {
    constructor (throws) {
        this.throws = throws;
    }

    bonusThrow(){
        //is true when there are 3 throws in the last frame
        var bonusThrowsInLastFrame = false;

        if(this.throws[this.throws.length-3] == 10 || this.throws[this.throws.length-3] + this.throws[this.throws.length-2] == 10 ) {
            bonusThrowsInLastFrame = true;
        }
        return bonusThrowsInLastFrame;
    }

    calculateScore(){
        //Calculates the Overall score and get returned
        var overallScore = 0;

        //When a Strike in frames 1-9 got thrown this is true, otherwise false
        var oddStrike = false;
        var lastThrows = 2;
        if(this.bonusThrow()){
            lastThrows = 3;
        }
        for(var roll = 0; roll < this.throws.length;roll++){

            //calculation for frame 1-9
            if(roll < this.throws.length-lastThrows) {
                //is it a spare, strike, or not cleared?
                if(this.throws[roll] + this.throws[roll+1] == 10 && !oddStrike){
                    var spareValue = 10 + this.throws[roll+2];
                    overallScore = overallScore + spareValue;
                    //increase roll because we already counted the next roll aswell for the spare
                    roll++;
                } else if(this.throws[roll]==10){
                    var strikeValue = 10 + this.throws[roll+1] + this.throws[roll+2];
                    overallScore = overallScore + strikeValue;
                    // reverse oddStrike Boolean, important for calculating a Spare, for reference when 2 rolls add up to 10 points and it can be either the start of a frame or 2 different frames 
                    oddStrike = !oddStrike;
                } else {
                    //normal points added for the frame
                    overallScore = overallScore + this.throws[roll]+this.throws[roll+1];
                    //increase roll because we already counted the next roll aswell
                    roll++;
                }
            } else {
                //calculation for frame 10
                overallScore = overallScore + this.throws[this.throws.length-2] + this.throws[this.throws.length-1];
                if(this.bonusThrow()){
                    overallScore = overallScore + this.throws[this.throws.length-2];
                }
                roll = roll + 3;
            }
        }
        return overallScore;
    }

    getScore () {
        return this.calculateScore();
    }
}

module.exports = BowlingCalculator