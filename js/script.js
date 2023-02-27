let emails = ["camilleri.christian@outlook.com", "kikkocamilleri@icloud.com", "hipkikkohop@live.it"]




let btnEl = document.getElementById("btn");

btnEl.addEventListener("click", function() {
     let usermailEl = document.getElementById("usermail");
     let usermail = usermailEl.value;
    
    for(let i = 0; i < emails.length; i++) {

        if (usermail == emails[i]) {
            window.location.href = "../game.html"
        } else {
            let errorEl = document.getElementById("error");

            errorEl.innerHTML = "e-mail non registrata";
            errorEl.style.color = "red"

            usermailEl.value = "";
        }

        
    }
    
})

