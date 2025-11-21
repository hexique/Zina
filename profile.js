const months = [undefined, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(`username : ${localStorage.getItem("username")}`)
document.getElementById("username").innerHTML = localStorage.getItem("username")

console.log(`about : ${localStorage.getItem("about")}`)
document.getElementById("about").textContent = localStorage.getItem("about").replaceAll("\n", "<br>")

if(id){
    document.getElementById("buttons").innerHTML = `
        <button onclick="goTo('dm.html')">Написать</button>
        <button onclick="goTo('reg.html')">Сохранить в избранное</button>
`
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

function goTo(path) {

    window.location.href = path;
}