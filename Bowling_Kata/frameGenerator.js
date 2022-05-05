
const frameGenerator = {
    //generates 10 random frames for a bowling match
    generateFrame(){
        var randomThrowArray=[];
        var currentThrow=0;

        for(var genframe=1;genframe<11;genframe++){
            var randomThrow = 0;
            var randomThrow2 = 0;

            randomThrow = Math.floor(Math.random() * 11);
            randomThrowArray[currentThrow] = randomThrow;
            currentThrow++;

            if(randomThrow!=10){
                randomThrow2 = Math.floor(Math.random() * (11-randomThrow));
                randomThrowArray[currentThrow] = randomThrow2;
                console.log("Frame: "+ genframe + ", randomThrow1: " + randomThrowArray[currentThrow-1] + ", randomThrow2: " + randomThrowArray[currentThrow]);
                currentThrow++;
            }
            else {
                console.log("Frame: "+ genframe + ", randomThrow: " + randomThrowArray[currentThrow-1]);
            }

            if(genframe==10){
                if(randomThrow + randomThrow2==10 && randomThrow !=10){
                    var bonusThrow = Math.floor(Math.random() * 11);
                    randomThrowArray[currentThrow] = bonusThrow;
                    console.log("Frame: "+ genframe + ", randomBonusThrow: " + randomThrowArray[currentThrow]);
                } else if (randomThrow == 10){
                    var bonusThrow1 = Math.floor(Math.random() * 11);
                    randomThrowArray[currentThrow] = bonusThrow1;
                    console.log("Frame: "+ genframe + ", randomBonusThrow1: " + randomThrowArray[currentThrow]);
                    currentThrow++;
                    if(bonusThrow1 == 10){
                        var bonusThrow2 = Math.floor(Math.random() * 11);
                        randomThrowArray[currentThrow] = bonusThrow2;
                    } else {
                        var bonusThrow2 = Math.floor(Math.random() * (11-randomThrow));
                        randomThrowArray[currentThrow] = bonusThrow2;   
                    }
                    console.log("Frame: "+ genframe + "randomBonusThrow2: " + randomThrowArray[currentThrow]);
                }
            }
        }
        return randomThrowArray;
    }
}

module.exports = frameGenerator