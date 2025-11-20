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

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

if(page){
    shuffle(people)
    document.getElementById("current-page").textContent = page
} else {
    page = 1
}

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
                <button onclick="goTo(${people[i]["id"]})">Перейти в профиль</button> 
                <button>Связаться</button>
            </div>
        </div>
    </div><br>
`}

function goTo(id){
    window.location.href = `profile.html?id=${id}`
}

function goToPage(pageId){
    window.location.href = `dating.html?page=${page + pageId}`
}