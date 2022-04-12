/*

 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)

*/

let typeNum;
const numLimit = 5;

for(let i = 0; i < numLimit; i++){
    typeNum = parseInt(prompt("Type a number"));
    console.log(typeNum);
}



