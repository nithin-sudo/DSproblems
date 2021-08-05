let randomNumberArray = new Array();
for(let i=0; i<10; i++){
    let randomnumber = Math.floor(Math.random() * 1000) % 899 + 100;
    randomNumberArray.push(randomnumber);
}
console.log("the 10 random numbers are : "+randomNumberArray);
let sortArray = randomNumberArray.sort();
console.log("Sorted array of Random Numbers:\n["+sortArray+"]");
console.log("1st Maximum:"+sortArray[9]+" 2nd Maximum:"+sortArray[8]+
            "\n1st Minimum:"+sortArray[0]+"\n2nd Minimum:"+sortArray[1]);