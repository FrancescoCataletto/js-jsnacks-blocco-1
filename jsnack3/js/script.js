/*

 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)

*/

let typeNum;
const numLimit = 5;
let sum = 0;

const numOutput = document.getElementById("num-output");

// UNCOMMENT THIS SECTION TO USE THE FOR LOOP
// for(let i = 0; i < numLimit; i++){
//     typeNum = parseInt(prompt("Type a number"));
//     if(isNaN(typeNum)){
//         alert("Type only numbers");
//         i--;
//     }else if(!isNaN(typeNum)){
//         sum += typeNum;
//     }
// }

// numOutput.innerHTML = sum;

// COMMENT THIS SECTION TO USE THE FOR LOOP
let i = 0;

while(i < numLimit){
    typeNum = parseInt(prompt("Type a number"));
    if(!isNaN(typeNum)){
        sum += typeNum;
        i++;
    }else if(isNaN(typeNum)){
    alert("Type only numbers");
    }
}

numOutput.innerHTML = sum;

