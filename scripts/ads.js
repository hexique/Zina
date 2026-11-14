document.body.innerHTML += '<div class="ad"></div>'


let ad_shown = false;
let forbid_ads = false;

let show_unsafe_ads = localStorage.getItem("showNSads") == "true";


forbid_ads = localStorage.getItem("DISABLE_ADS") == "true"

const unsafe_ads = [3, 5, 6, 11, 12]
const DELAY = 5000

function add_ad(){
    let n = 0
    while(true){
        n = Math.floor(Math.random() * ads.length)
        if(unsafe_ads.includes(n) && !show_unsafe_ads){
            continue
        }
        break
    }

    show_add(n)
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
    `<div style="display: flex; gap: 15px; width: 325px"><img style="vertical-align: middle; height: auto" width="100" src="img/persons/${random_person.photo}.jpg">
        <div>
        <h2>${random_person.username.split(" ")[1]} ${50 * Math.floor(Math.random() + 1 * 10)}м от вас</h2>
        <h4><a href="profile.html?id=${random_person.id}">Познакомьтесь!</a></h4>
        </div>
    </div>`,
    
    `<div style="display: flex; gap: 15px;"><img style="vertical-align: middle" width="100" src="https://volgofarm.ru/storage/drug-images/May2026/ORSbdUKM5RQlmzBVw78k.webp">
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
        <h3>Ура!</h3>
        <p>Новая <b>молодежная</b> соц-сеть!     вышла<br>Попробуйте!</p>
    </div>
    <div style="display: flex; gap: 10px; justify-content: end;">
        <button onclick="window.open('https://vk.ru', '_blank').focus(); rmv_ad()">Перейти</button>
    </div>`,
    
    `<audio src="https://nu.vgmtreasurechest.com/soundtracks/doki-doki-literature-club-official-soundtrack/jpnllnkozr/1-10.%20Sayo-nara.mp3#t=20" autoplay></audio>
    <image width="1024" src="https://images.steamusercontent.com/ugc/945096193863886159/226003440C880DA612985DC66BF457B4E4FA9166/">`,

    `<h1 style="color: red">ВАШ IP-адрес ЗАБЛОКИРОВАН!</h1><br>
    <h3>Узнайте подробней на нашем сайте: <a href="https://www.kaspersky.ru">https://www.kaspersky.ru</a></h3>`,

    `<div style="display: flex; gap: 15px;">
    <img style="vertical-align: middle" width="250" src="img/kd.jpg">
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
            <h1>КУПЛЮ ПИВА, ВОЗЬМУ В РОТ</h1>
            <h3>Ксения, 40 лет в метре от Вас</h3>
        </div>
    </div>`,

    `<div style="width: 600px">
    <img src="https://static2.klipy.com/ii/4493325008d34b7bf8cd6813cd5c1619/3f/e2/khx6doqKRtE0bS.gif">
    <h1>Новое классное эроге-аниме.</h1>
    <h4>Смотрите только на <a href="https://youtube.com/@hexigd">old.yummyanime.ru</a>
    </div>`,

    `<div style="display: flex; gap: 15px;">
        <div style="font-size: 60px;">💸</div>
        <div>
            <h2>ЗАРАБОТОК ОТ 500 000 ₽ В ДЕНЬ!</h2>
            <p>Просто сиди дома и <b>кликай</b>!<br>Бабушка из Саратова заработала <b>3 миллиона</b> за неделю!</p>
        </div>
    </div>
    <div style="display: flex; gap: 10px; justify-content: end;">
        <button style="background: green" onclick="window.open('https://apple.com', '_blank').focus(); rmv_ad()">ХОЧУ ДЕНЕГ!</button>
    </div>`,

    `<div>
    <h1 style="color: orange">🎉 ВЫ — 1 000 000-й ПОСЕТИТЕЛЬ!</h1>
    <h3>Заберите приз: <b>iPhone 47 Pro Max</b><br>Осталось всего <span style="color:red">2 часа!</span></h3>
</div>
<div style="display: flex; gap: 10px; justify-content: end;">
    <button style="background: green" onclick="window.open('https://apple.com', '_blank').focus(); rmv_ad()">ЗАБРАТЬ ПРИЗ</button>
</div>`,

`<div>
    <h2>💳 ДЕНЬГИ ДО ЗАРПЛАТЫ ЗА 5 СЕКУНД!</h2>
    <p>До <b>100 000 ₽</b> без справок, без поручителей, без вопросов.<br><small>Ставка всего 890% годовых*</small></p>
</div>
<div style="display: flex; gap: 10px; justify-content: end;">
    <button style="background: green" onclick="window.open('https://apple.com', '_blank').focus(); rmv_ad()">Взять 100 000 ₽</button>
</div>`,

`<div style="display: flex; gap: 15px;">
    <div style="font-size: 60px;">👑</div>
    <div>
        <h2>Здравствуйте, дорогой друг!</h2>
        <p>Я — принцесса <b>Убангу</b>, и мне нужно перевести <b>$4000000</b>.<br>Отправьте мне <b>500 ₽</b> на карту — и половина ваша!</p>
    </div>
</div>
<div style="display: flex; gap: 10px; justify-content: end;">
    <button style="background: green" onclick="window.open('https://apple.com', '_blank').focus(); rmv_ad()">ПОМОЧЬ ПРИНЦЕССЕ</button>
</div>`,

`<h1>КЛАССНАЯ, МОЛОДЕЖДНАЯ ИГРА!!!</h1><h4>"PROJECT TMP" ("ПРОЕКТ TMP") - ЭТО НОВАЯ КЛАССНАЯ ИГРА ОТ РАЗРАБОТЧИКА thellittlmoekne, ПОДАРИВШЕГО НАМ ТАКИЕ ИГРЫ КАК:<br>
"ASPG", "ODIL: THE GAME", "NIKOLAEVICH."</h4><h2>ОЗНАКАМЛИВАЙТЕСЬ СКОРЕЕ!!!</h2><a href="https://github.com/thelittlemonke/projecttmp">mega.com</a><h3>ДАТА ВЫХОДА Q2-Q3 2027. ДЕМО ВЕРСИЯ УЖЕ ДОСТУПНА!!!!</h3>
`,

`<h2>новый фильм анонсирован для фанатов бозаро</h2><img width="500" src="https://bocchi.rocks/hoshinoashiato/assets/img/page/top/mainvisual/ph_main.webp"><br><a href="https://bocchi.rocks">смотреть</a>`
]
