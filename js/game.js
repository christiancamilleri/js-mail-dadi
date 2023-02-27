

let gamebtnEl = document.getElementById("gamebtn");

gamebtnEl.addEventListener("click", function() {
    let cpuNumber = Math.floor(Math.random() * 6) + 1;
    let userNumber = Math.floor(Math.random() * 6) + 1;
    
    console.log(cpuNumber);
    console.log(userNumber)
})