/*

 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.

*/

let userNums;

let i = 0;

let numSum = 0;
let numMedian = 0;

const sumOfNum = document.getElementById("num-sum");
const medianOfNum = document.getElementById("num-median");

while(i < 10){
    userNums = parseInt(prompt("Scrivi un numero"));
    i++;
    numSum += userNums;
    sumOfNum.innerHTML = numSum;

    numMedian = (numSum / 10);
    medianOfNum.innerHTML = numMedian;
}