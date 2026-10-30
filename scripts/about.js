toggleVisibility()


let keys = new Array(5)
let idx = 0;
window.addEventListener("keydown", (event) => {
    keys[idx] = event.key
    idx++;
    if(idx >= 5){
        idx = 0
    }
    if(keys.join() == "p,i,l,y,a"){
        setDevMode(true)
        document.querySelector("#devmode").hidden = false
    }
})


function setDevMode(value){
    localStorage.setItem("isDeveloper", value)
    toggleVisibility()
}

function toggleVisibility(){
    document.querySelector("#devmode").hidden = !isDeveloper()
}

function clearCookies(){
    if (window.confirm("u sure?") == true){
        localStorage.clear()
    }
}

function deleteMessage(){
    let messages = JSON.parse(localStorage.getItem("messages-history"))
    messages = messages.slice(0, messages.length - 1)
    localStorage.setItem("messages-history", JSON.stringify(messages))
}

const pts_id = document.querySelector("#pts-id")
const pts_pv = document.querySelector("#pts-preview")
const pts_tweaker = document.querySelector("#pts-tweaker")


function pts_load(){
    const id = pts_id.value
    console.log(JSON.stringify(people[id]))

    pts_tweaker.value = JSON.stringify(people[id])
    pts_pv.src = `img/persons/${people[id].photo}.jpg`
}

function pts_save(){
    const id = pts_id.value

    people[id] = JSON.parse(pts_tweaker.value)
    console.log(people[id])
    pts_tweaker.value = ""
    pts_id.value = ""

    localStorage.setItem("pts_people", JSON.stringify(people))
}

function pts_ilya(){
    for(let i=0; i < people.length; i++){
        people[i] = {"username":"Перешивов Илья Валерьянович","city":"Казань","about":"Депутат <b>народной</b> госдумы, 17 год , ищу друга","photo":"../pilya","gender":"Мужчина","age":17,"id":i}
    }
    localStorage.setItem("pts_people", JSON.stringify(people))
}