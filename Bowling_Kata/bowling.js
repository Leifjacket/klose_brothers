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

    calculateScore(){
        //Calculates the Overall score and get returned
        var overallScore = 0;

        //Tracks the frames played, because with strikes, frames and rolls can differ
        var frames = 1;
        //When a Strike in frames 1-9 got thrown this is true, otherwise false
        var oddStrike = false;
        for(var roll = 0; roll < this.throws.length;roll++){

            //calculation for frame 1-9
            if(frames<10) {
                //is it a spare, strike, or not cleared?
                if(this.throws[roll] + this.throws[roll+1] == 10 && this.throws[roll]!= 10){
                    //Spare
                    var spareValue = 10 + this.throws[roll+2];
                    overallScore = overallScore + spareValue;
                    //increase roll because we already counted the next roll aswell for the spare
                    roll++;
                    frames++;
                } else if(this.throws[roll]==10){
                    //Strike
                    var strikeValue = 10 + this.throws[roll+1] + this.throws[roll+2];
                    overallScore = overallScore + strikeValue;
                    frames++;
                } else {
                    //No Strike or Spare
                    overallScore = overallScore + this.throws[roll]+this.throws[roll+1];
                    //increase roll because we already counted the next roll aswell
                    roll++;
                    frames++;
                }
            } else {
                //calculation for frame 10
                //Check if bonus throw
                overallScore = overallScore + this.throws[this.throws.length-2] + this.throws[this.throws.length-1];
                if(this.throws.length-3==roll){
                    overallScore = overallScore + this.throws[this.throws.length-3];
                    roll++;
                }
                roll = roll + 2;
            }
        }
        return overallScore;
    }

    getScore () {
        return this.calculateScore();
    }

    generateFrame(){
        return null;
    }
}
module.exports = BowlingCalculator