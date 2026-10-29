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