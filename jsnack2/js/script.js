/*

 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const firstWord = prompt("Type your first word");
const secondWord = prompt("Type your second word");

if(firstWord.length > secondWord.length){
    console.log(`La parola più lunga è ${firstWord}, la parola più corta è ${secondWord}`)
}else if(secondWord.length > firstWord.length){
    console.log(`La parola più lunga è ${secondWord}, la parola più corta è ${firstWord}`)
}else if( firstWord.length === secondWord.length){
    console.log("Please insert two words of different length");
}
