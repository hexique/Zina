const div = document.querySelector(".header");

div.innerHTML = `<div class="container">
            <h3><img src="img/logo.png" height="25"> Zina</h3>
            <!-- <h3>Zina</h3>-->
            <a href="index.html">Главная</a>
            <a href="reg.html" id="profile">Регистрация</a>
            <a href="dating.html">Знакомства</a>
            <a href="forum.html">Форум</a>
            <a href="donations.html">Пожертвования</a>
            <a href="about.html">О проекте</a>
            <a href="contacts.html">Связаться с нами</a>
        </div>`

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