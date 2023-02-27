// creo variabile costante con classi per icon awesome
const diceFaces = ["fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six"];

// bersaglio pulsante
let gamebtnEl = document.getElementById("gamebtn");

// creo evento click
gamebtnEl.addEventListener("click", function() {
    // assegno classi fisse alle <i>
    let iconplayerEl = document.getElementById("icon");
    iconplayerEl.className = "fa-solid";
    let cpuplayerEl = document.getElementById("cpuicon");
    cpuplayerEl.className = "fa-solid";



    // genero numeri casuali e assegno classi
    let cpuNumber = Math.floor(Math.random() * 6) + 1;
    cpuplayerEl.classList.add(diceFaces[cpuNumber - 1]);
    let userNumber = Math.floor(Math.random() * 6) + 1;
    iconplayerEl.classList.add(diceFaces[userNumber - 1]);
    

    // bersaglio div dove inserire il risultato
    let resultEl = document.getElementById("result");

    console.log(userNumber);
    console.log(cpuNumber);
    
    // ? se il numero dell'utente è maggiore del numero cpu di hai vinto altrimenti hai perso, se sono uguali è un pareggio
    if(userNumber > cpuNumber) {
       resultEl.innerHTML = "Hai Vinto!"
    } else if(cpuNumber > userNumber) {
       resultEl.innerHTML = "Hai Perso!"
    } else if(userNumber == cpuNumber) {
       resultEl.innerHTML = "Pareggio!"
    }



})