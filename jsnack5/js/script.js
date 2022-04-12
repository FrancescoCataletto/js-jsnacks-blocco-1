/*

 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array

*/

const numArr = [];

let userNum;

const countLimit = 6;

const userNumbers = document.getElementById("user-numbers");

for(let i = 0; i < countLimit; i++){
    userNum = parseInt(prompt("Type a number"));
    if((userNum % 2) !== 0){
        numArr.push(userNum);
        userNumbers.innerHTML = numArr;
    }
}