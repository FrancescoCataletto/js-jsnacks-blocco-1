/*

 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica

*/

const userNum = prompt("Inserisci un numero di 4 cifre");

let numSum = 0;

if(userNum.length === 4){
    for(let i = 0; i < userNum.length; i++){
        numSum += parseInt(userNum[i]);
        console.log(numSum);
    }
}else{
    console.log("Inserire un numero di 4 cifre. ")
}

