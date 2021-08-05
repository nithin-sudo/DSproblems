const prompt = require("prompt-sync")()

let number = prompt("Enter the number to which prime factors be calculated : ")
let primeFactorArray = new Array();
console.log("the prime factors are : ")
for(let iterator = 2; iterator <= number; iterator++)
{
    while(number % iterator == 0)
    {
        number = number / iterator
        primeFactorArray.push(iterator)
    }
}
console.log(primeFactorArray)