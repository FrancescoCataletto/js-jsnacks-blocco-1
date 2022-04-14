/*

 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

*/

let userNum = parseInt(prompt("Type a number"));

let numCube;
const userNumbers = document.getElementById("user-numbers");

let notNumber = false;

if(!isNaN(userNum)){
    notNumber = true;
}

if(notNumber){
    for(let i = 1; i <= userNum; i++){
        numCube = i * i * i;
        userNumbers.append(`Il cubo di ${i} è ${numCube}, `);
    }
}else if(isNaN(userNum)){
    alert("Type only numbers.");
}

    

