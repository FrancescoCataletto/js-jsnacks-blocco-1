/*

 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const firstWord = prompt("Type your first word");
const secondWord = prompt("Type your second word");

const outputWord = document.getElementById("output-word");

let notNumber = false;

if(firstWord.length > secondWord.length){
    outputWord.innerHTML = (`La parola più lunga è ${firstWord}, la parola più corta è ${secondWord}`);
}else if(secondWord.length > firstWord.length){
    outputWord.innerHTML = (`La parola più lunga è ${secondWord}, la parola più corta è ${firstWord}`);
}else if(firstWord.length === secondWord.length){
    outputWord.innerHTML = ("Please insert two words of different length");
}

if(!isNaN(parseInt(firstWord)) || !isNaN(parseInt(secondWord))){
    notNumber = true;
    outputWord.innerHTML = ("Please type only words.");
}