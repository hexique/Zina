document.body.innerHTML += '<div class="ad"></div>'


let ad_shown = false;
let forbid_ads = false;


const DELAY = 7500

function add_ad(){
    show_add(Math.floor(Math.random() * ads.length))
}

function show_add(idx){
    document.querySelector(".ad").innerHTML = `
        <div class="ad-container">
            <button class="close-btn" onclick="rmv_ad()">X</button>
            ${ads[idx]}
        </div>`
    ad_shown = true
}

function rmv_ad(){
    document.querySelector(".ad").innerHTML = ""
    ad_shown = false
}

window.setInterval(() => {
    if(!ad_shown && !forbid_ads){
        add_ad()
    }
}, DELAY)


//Everytime you refresh a page
const random_person = people[Math.floor(Math.random() * people.length)]


const ads = [
    `<div style="display: flex; gap: 15px; width: 325px"><img style="vertical-align: middle" src="img/persons/${random_person.photo}.jpg">
        <div>
        <h2>${random_person.username.split(" ")[1]} ${50 * Math.floor(Math.random() + 1 * 10)}м от вас</h2>
        <h4><a href="profile.html?id=${random_person.id}">Познакомьтесь!</a></h4>
        </div>
    </div>`,
    
    `<div style="display: flex; gap: 15px;"><img style="vertical-align: middle" src="https://volgofarm.ru/storage/drug-images/May2026/ORSbdUKM5RQlmzBVw78k.webp">
        <div>
            <h1>ВАЗЕЛИН</h1>
            <h3>ДЕШЕВЫЙ ВАЗЕЛИН МОЖНО КУПИТЬ<br>ТОЛЬКО У НАС В ВОЛГАФАРМАЦЕВТИКА</h3>
        </div>
    </div>
    <div style="display: flex; gap: 10px; justify-content: end;">
        <button style="background: green" onclick="window.open('https://volgofarm.ru', '_blank').focus(); rmv_ad()">Купить!</button>
        <button style="background: red" onclick="rmv_ad()">Пройти мимо :(</button>
    </div>`,
    
    `<div>
        <p>Новая <b>молодежная</b> соц-сеть уже вышла!<br>Попробуйте!</p>
    </div>
    <div style="display: flex; gap: 10px; justify-content: end;">
        <button onclick="window.open('https://vk.ru', '_blank').focus(); rmv_ad()">Перейти</button>
    </div>`
]