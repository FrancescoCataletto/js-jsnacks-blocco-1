/*

 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

*/

let userNum = parseInt(prompt("Type a number"));

let i = 1;

while(i <= userNum){
    console.log(i * i * i);
    i++;
}