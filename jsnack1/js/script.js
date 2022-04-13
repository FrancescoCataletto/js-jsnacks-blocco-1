/*

 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

*/

// VARIABLES TO ASK THE TWO NUMBERS
const startBtn = document.getElementById("start-button");
const outputNum = document.getElementById("number");

startBtn.addEventListener("click", function(){
    const firstNum = parseInt(prompt("Type first number"));
    const secondNum = parseInt(prompt("Type second number"));

    if(firstNum > secondNum){
        outputNum.innerHTML = firstNum;
    }else if(secondNum > firstNum){
        outputNum.innerHTML = secondNum;
    }else if(firstNum === secondNum){
        outputNum.innerHTML = "Please type two different numbers";
}
})

