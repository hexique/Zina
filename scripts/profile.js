const months = [undefined, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let dm_people = JSON.parse(localStorage.getItem("dm_people"))
let dm_favorites = JSON.parse(localStorage.getItem("dm_favorites")) 
if(dm_favorites == null){
    dm_favorites = new Array()
}

let about = localStorage.getItem("about");
if (about){
    about = about.replaceAll("\n", "<br>")
}

function toggleFavorite(){
    if(dm_favorites.includes(id)){
        dm_favorites.splice(dm_favorites.indexOf(id), 1)
    }
    else{
        dm_favorites.push(id)
    }
    localStorage.setItem("dm_favorites", JSON.stringify(dm_favorites))
    _updateButtons()
}

function _updateButtons(){
    if(id){
        document.getElementById("buttons").innerHTML = `
            <button onclick=${hasProfile() ? "registerDM()" : "redirect('reg.html')"}>${dm_people.includes(id) ? "Перейти в ЛС" : "Написать"}</button>` +
        `<button onclick=${hasProfile() ? "toggleFavorite()" : "redirect('reg.html')"}>${dm_favorites.includes(id) ? "Удалить из избранного" : "Сохранить в избранное"}</button>`
        return
    }
    document.getElementById("buttons").innerHTML = `<button onclick="redirect('dm.html')">Личные сообщения</button>
                <button onclick="redirect('reg.html')">Изменить данные</button>`
}

if(id){
    _updateButtons()
}

function registerDM(){
    if(!dm_people.includes(id)){
        dm_people.push(id)
        console.log("DM" + dm_people)
        localStorage.setItem("dm_people", JSON.stringify(dm_people))
    }
    redirect(`dm.html?g=${id}`)
}

loadPhoto();
loadInfo();

function loadInfo() {
    if(id){
        document.getElementById("age-city-gender").innerHTML = `${people[id]["age"]} · ${people[id]["city"]} · ${people[id]["gender"]}`
        document.getElementById("username").innerHTML = people[id]["username"]
        document.getElementById("about").innerHTML = people[id]["about"]
    } else {
        document.getElementById("age-city-gender").innerHTML = `${calculateAge(localStorage.getItem("age"))} · ${localStorage.getItem("city")} · ${localStorage.getItem("gender")}`
        document.getElementById("username").innerHTML = localStorage.getItem("name")
        document.getElementById("about").textContent = about
    }
        
}

function calculateAge(date){
    const currentDate = new Date()
    console.log(currentDate)
    // Sun Nov 16 2025 16:07:20 GMT+0300 (Москва, стандартное время)

    let result = currentDate.getFullYear() - parseInt(date.split("-")[0]) + 1

    if(parseInt(date.split("-")[0]) < months.indexOf(currentDate.getMonth())) {
        result -= 1
    } else if(parseInt(date.split("-")[2]) < currentDate.getDate()) {
        result -= 1
    }

    return result
}

function loadPhoto() {
    if(id){
        document.getElementById("image").src = `img/persons/${people[id]["photo"]}.jpg`;
        return
    }

    const photoData = localStorage.getItem("photo");


    if(photoData) {
        try {
            const parsedData = JSON.parse(photoData);
            if (parsedData.dataUrl) {
                document.getElementById("image").src = parsedData.dataUrl;
            }
        } catch (e) {
            console.error(e);
            document.getElementById("image").src = photoData;
        }
    }
}