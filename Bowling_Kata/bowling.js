/*
    Annahmen: 
    Es wird eine Array mit validen Würfen übergeben
    Ein Wurf der nichts getroffen hat wird mit einer 0 gekennzeichnet. 
    Ein Strike mit einer 10.
*/

class BowlingCalculator {
    constructor (throws) {
        this.throws = throws;
    }

    //Calculates the value if a frame didn't get cleared
    calculateNoStrikeNoSpare(roll){
        var normalThrowsValue = this.throws[roll]+this.throws[roll+1];
        return normalThrowsValue;
    }

    //Calculates the value for a thrown strike
    calculateStrike(roll){
        var strikeValue = 10 + this.throws[roll+1] + this.throws[roll+2];
        return strikeValue;
    }

    //Calculates the value for a thrown spare
    calculateSpare(firstRollOfSpare){
        var spareValue = 10 + this.throws[firstRollOfSpare+2];
        return spareValue;
    }

    calculateScore(){
        //Calculates the Overall score and gets returned
        var overallScore = 0;

        //Tracks the frames played, because with strikes, frames and rolls can differ. Last frame gets counted differently so frames are important
        var frames = 1;

        for(var roll = 0; roll < this.throws.length;roll++){
            if(frames<10) {
                if(this.throws[roll] + this.throws[roll+1] == 10 && this.throws[roll]!= 10){
                    //Spare
                    overallScore += this.calculateSpare(roll);
                    //increase roll because we already counted the next roll aswell for the spare
                    roll++;
                } else if(this.throws[roll]==10){
                    //Strike
                    overallScore += this.calculateStrike(roll);
                } else {
                    //No Strike or Spare
                    overallScore += this.calculateNoStrikeNoSpare(roll);
                    //increase roll because we already counted the next roll aswell
                    roll++;
                }
                frames++;
            } else {
                //Calculation for frame 10
                //Check if there is a bonus throw
                if(this.throws.length-3==roll){
                    overallScore += this.throws[this.throws.length-3];
                    roll++;
                }
                overallScore += this.throws[this.throws.length-2] + this.throws[this.throws.length-1];
                roll++;
            }
        }
        return overallScore;
    }

    getScore () {
        return this.calculateScore();
    }

}
module.exports = BowlingCalculator