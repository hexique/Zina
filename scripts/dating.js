// let unusedNums = []
// for(let i = 0; i < 40; i++){
//     unusedNums.push(i)
// }

// for(let i = 0; i < people.length; i++){
//     unusedNums.splice(unusedNums.indexOf(people[i]["photo"]), 1)
// }

// console.log(`unusedNums = ${unusedNums.join(" ")}`)

const urlParams = new URLSearchParams(window.location.search);
let page = parseInt(urlParams.get('page'));
const dm_favorites = JSON.parse(localStorage.getItem("dm_favorites"))

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

if(page > 1){
    shuffle(people)
    document.getElementById("current-page").textContent = page
} else {
    page = 1
}

//DO NOT CHANGE (make an illusion that this site has more people than it actually has)

document.getElementById("people").innerHTML = ""
console.log(`legh = ${people.length}`)
for(let i = 0; i < people.length; i++){
    document.getElementById("people").innerHTML += `
    <div class="person-card">
        <div class="person-avatar">
            <img src="img/persons/${people[i]["photo"]}.jpg" alt="${people[i]["username"]}" title="id = ${i}; image link = ${people[i]["photo"]}" width="200">
        </div>
        <div class="person-info">
            <div>
                <h3>${people[i]["username"].split(" ")[1]}</h3>
                <strong>${people[i]["age"]} · ${people[i]["city"]} · ${people[i]["gender"]}</strong>
                <p>${people[i]["about"]}</p>
            </div>
            <div class="person-actions">
                <a href="profile.html?id=${people[i]["id"]}"><button>Перейти в профиль</button></a>
                ${false ? "<button>Связаться</button>": ""}
                ${dm_favorites.includes(people[i]['id'].toString()) && page == 1 ? "<span>В избранном</span>" : ""}
            </div>
        </div>
    </div><br>
`
    //Связаться бесмысленно имхо зачем оно надо
}

function goToPage(pageId){
    window.location.href = `dating.html?page=${page + pageId}`
}