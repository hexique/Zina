const months = [undefined, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log(`username : ${localStorage.getItem("username")}`)
document.getElementById("username").innerHTML = localStorage.getItem("username")

console.log(`about : ${localStorage.getItem("about")}`)
document.getElementById("about").textContent = localStorage.getItem("about").replaceAll("\n", "<br>")

loadPhoto();
loadInfo();

function loadInfo() {
    document.getElementById("age-city-gender").textContent = `${calculateAge(localStorage.getItem("age"))} · ${localStorage.getItem("city")} · ${localStorage.getItem("gender")}`
}

function calculateAge(date){
    const currentDate = new Date()
    console.log(currentDate)
    // Sun Nov 16 2025 16:07:20 GMT+0300 (Москва, стандартное время)

    let result = currentDate.getFullYear() - parseInt(date.split("-")[0])

    if(parseInt(date.split("-")[0]) < months.indexOf(currentDate.getMonth())) {
        result -= 1
    } else if(parseInt(date.split("-")[2]) < currentDate.getDate()) {
        result -= 1
    }

    return result
}

function loadPhoto() {
    const photoData = localStorage.getItem("photo");
    
    if (photoData) {
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