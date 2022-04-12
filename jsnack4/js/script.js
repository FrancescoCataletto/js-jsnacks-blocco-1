/*

 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*/

const guestArr = [
    "Domenico Agostino",
    "Mihai Badia",
    "Riccardo Becattini",
    "Manuel Benini",
    "Bruno Bernardini",
    "Guido Buono",
    "Pierluigi Cancellaro",
    "Francesco Cataletto",
    "Stefano Cravotta",
    "Giovanni Crispino",
    "Giancarlo Croce",
    "Enrico De Stefano",
    "Silvia Dugato",
    "Carlo Duminuco Del Monte",
    "Francesco Ercoli",
    "Luca Gaddini",
    "Marco Gagliano",
    "Cristina Gasperini",
    "Gabriele Giusti",
    "Chiara Grillo",
    "Manuela Ienuso",
    "Michele Iliescu",
    "Ketevan Jorjoliani",
    "Renato Lami",
    "Davide Manciucca",
    "Emanuele Mastronardi",
    "Luca Mazzarini",
    "Daniele Monteleone",
    "Salvatore Olivieri",
    "Leonardo Pellegrini",
    "Agostino Piquè",
    "Davide Pizzolla",
    "Antonio Pollo",
    "Ivan Russo",
    "Amanjit Singh",
    "Sebastiano Visco"
    ];

    const guest = prompt("Can you give me your name please");

    const guestOutput = document.getElementById("guest");

    let notGuest = false;

    for(let i = 0; i < guestArr.length; i++){
        if(guest === guestArr[i]){
            notGuest = true;
        }
    }

    if(notGuest){
        guestOutput.innerHTML = ("Welcome");
    }else{
        guestOutput.innerHTML = ("I'm sorry, you are not in the list."); 
    }