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
        var overallScore=0;

        //When a Strike in frames 1-9 got thrown this is true, otherwise false
        var oddNumberOfThrows=false;
        var bonusThrow = this.bonusThrow();
        for(var counter=0;counter<this.throws.length;counter++){
            //calculate value of a Spare in a frame
            // if(this.throws[counter] % 2 == 0 && !oddNumberOfThrows){

            // } 
            
            //TODO: calculate value of Strike in a frame

            //normal points added for the frame
            overallScore = overallScore + this.throws[counter];
        }
        return overallScore;
    }

    getScore () {
        return this.calculateScore();
    }
}

module.exports = BowlingCalculator