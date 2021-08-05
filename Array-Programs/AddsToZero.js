const prompt = require("prompt-sync")();
let addsToZeroArray = new Array();
let arrayLength = parseInt(prompt("Enter the length of the array:"));
for (let i = 0; i < arrayLength; i++) {
    let number = parseInt(prompt("enter the numer"+i+" : "))
    addsToZeroArray.push(number);
}
console.log("the array elements are:"+addsToZeroArray);
let sum = 0
for (i =0; i<(arrayLength - 2); i++)
{
    for (let j =1; j<(arrayLength - 1); j++)
    {
        for (let k =2; k<arrayLength; k++)
        {
            if(addsToZeroArray[i]+addsToZeroArray[j]+addsToZeroArray[k] == sum)
            {
                console.log("Addition of "+addsToZeroArray[i]+" "+addsToZeroArray[j]+" "+addsToZeroArray[k]+" == 0");
                break;
            }
        }
    }
}
