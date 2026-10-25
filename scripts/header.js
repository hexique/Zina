const account_buttons = document.querySelectorAll("#profile")
if(account_buttons == null || account_buttons.length < 2){
    document.body.innerHTML = "<h1>#profile not found. plz fix</h1> (expecting atleast 2 buttons)"
}

if(localStorage.getItem("name") !== null){
    account_buttons.forEach(function(btn) {
        btn.href = "profile.html"
        btn.textContent = "Профиль"
    })
}
else{
    account_buttons.forEach(function(btn) {
        btn.href = "reg.html"
        btn.textContent = "Регистрация"
    })
}