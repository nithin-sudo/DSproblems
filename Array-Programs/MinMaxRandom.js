let randomNumberArray = new Array();
for(let i=0; i<10; i++){
    let randomnumber = Math.floor(Math.random() * 1000) % 899 + 100;
    randomNumberArray.push(randomnumber);
}
console.log("the 10 random numbers are : "+randomNumberArray);
let maximum,minimum,secondMax,secondMinimum;
for(let j=0; j<randomNumberArray.length; j++){
    if (j==0){
        maximum=minimum=secondMax=secondMinimum=randomNumberArray[0];
        continue;
    }
    if (randomNumberArray[j] > maximum) {
        secondMax = maximum;
        maximum = randomNumberArray[j];
    } else if (randomNumberArray[j] > secondMax) {
        secondMax = randomNumberArray[j];
    } else if (randomNumberArray[j]< minimum) {
        secondMinimum = minimum;
        minimum = randomNumberArray[j];
    } else if (randomNumberArray[j] < secondMinimum) {
        secondMinimum = randomNumberArray[j];
    }
}
console.log("1st Maximum:"+maximum+" 2nd Maximum:"+secondMax+"\n1st Minimum:"+minimum+" 2nd Minimum:"+secondMinimum);