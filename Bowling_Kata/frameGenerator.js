
const frameGenerator = {
    //generates 10 random frames for a bowling match
    generateFrame(){
        var randomThrowArray=[];
        var counter=0;

        for(var genframe=1;genframe<11;genframe++){
            var randomThrow = 0;
            var randomThrow2 = 0;

            randomThrow = Math.floor(Math.random() * 11);
            randomThrowArray[counter] = randomThrow;
            counter++;

            if(randomThrow!=10){
                randomThrow2 = Math.floor(Math.random() * (11-randomThrow));
                randomThrowArray[counter] = randomThrow2;
                counter++;
            }

            if(genframe==10){
                if(randomThrow + randomThrow2==10 && randomThrow !=10){
                    var bonusThrow = Math.floor(Math.random() * 11);
                    randomThrowArray[counter] = bonusThrow;
                } else if (randomThrow == 10){
                    var bonusThrow1 = Math.floor(Math.random() * 11);
                    randomThrowArray[counter] = bonusThrow1;
                    counter++;
                    if(bonusThrow1 == 10){
                        var bonusThrow2 = Math.floor(Math.random() * 11);
                        randomThrowArray[counter] = bonusThrow2;
                    } else {
                        var bonusThrow2 = Math.floor(Math.random() * (11-randomThrow));
                        randomThrowArray[counter] = bonusThrow2;   
                    }
                }
            }
        }
        console.log(randomThrowArray);
        return randomThrowArray;
    }
}

module.exports = frameGenerator