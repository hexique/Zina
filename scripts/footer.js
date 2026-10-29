function hasProfile(){
    return localStorage.getItem("name") !== null
}

function redirect(url){
    window.location.href = url
}

function isDeveloper(){
    return localStorage.getItem("isDeveloper") === "true"
}

function m(){
    if(localStorage.getItem("isDeveloper") != null){
        return
    }

    localStorage.setItem("dm_people", "[]")
    localStorage.setItem("dm_favorites", "[]")
    localStorage.setItem("dm_history", "{}")
    localStorage.setItem("dm_scenarios", "{}")
    localStorage.setItem("isDeveloper", "false")
}

m()

document.body.innerHTML += `<footer>
<div class="container">
    <strong>Zina</strong><br>
    <p>
        <a href="index.html">Главная</a>
        <a href="index.html" id="profile">Войти</a>
        <a href="dating.html">Знакомства</a>
        <a href="forum.html">Форум</a>
        <a href="donations.html">Пожертвования</a>
        <a href="about.html">О проекте</a>
        <a href="contacts.html">Связаться с нами</a>
    </p><br>
    <a>&copy;Zina 2008-2016</a>
</div>
</footer>`