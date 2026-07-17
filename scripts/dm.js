let i = 0
let history = []
if(localStorage.getItem("is-first")){
    displayMessage()
    i++
}
load()

function save(){
    localStorage.setItem("messages-history", JSON.stringify(history))
    console.log("saved")
}

function load(){
    history = JSON.parse(localStorage.getItem("messages-history"))

    for(let i = 0; i < history.length; i++){
        if(history[i]["author"] == "you"){
            displayYourMessage(history[i]["message"], false)
            loadPhoto()
        } else {
            displayMessage(false)
        }
    }
}

function displayMessage(saves){
    if(localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i] == "") return
    document.getElementById("messages-container").innerHTML += `<div class="msg-left">\
        <div class="msg-avatar">\
            <img src="img/persons/${localStorage.getItem("photo-script")}.jpg" alt="">\
        </div>\
        <div class="msg-content">\
            <strong>${localStorage.getItem("username-script")}</strong>\
            <p>${localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i]}</p>\
        </div>\
    </div>`
    if(saves){
        history.push({"author": "interlocutor", "message": localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i]})
        save()
    }
            

    
}

function displayYourMessage(message, saves){
    if(message == "") {
        if(saves){
            history.push({"author": "you", "message": message})
            save()
            loadPhoto()
        }
        return
    }
    document.getElementById("messages-container").innerHTML += `<div class="msg-right">\
        <div class="msg-avatar">\
            <img src="img/persons/2.jpg" id="your-avatar">\
        </div>\
        <div class="msg-content">\
            <strong>Вы</strong>\
            <p>${message}</p>\
        </div>\
    </div>`
    if(saves){
        history.push({"author": "you", "message": message})
        save()
        loadPhoto()
    }
    loadPhoto()
}

function send(){
    if(document.getElementById("msg").value == ""){
        setTimeout(() => {
            displayMessage(true), Math.random() * 8000 + 2000
            i++
            return
        })

    }
    displayYourMessage(document.getElementById("msg").value, true)

    document.getElementById("msg").value = ""
    document.getElementById("msg").focus()

    if(i >= localStorage.getItem("messages").split("s-p-l-i-t-t-e-r").length - 1) return
    if(localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i] == "") {
        i++
        return
    }
    
    setTimeout(() => {
        displayMessage(true)
        i++
    }, Math.random() * 8000 + 2000)
    loadPhoto()
}

function loadPhoto() {
    if(history.length != 0){
        if(history[history.length - 1]["author"] != "you") {
            console.log(history)
            return
    }
    }
    const photoData = localStorage.getItem("photo");
    
    if (photoData) {
        try {
            const parsedData = JSON.parse(photoData);
            if (parsedData.dataUrl) {
                document.getElementById("your-avatar").src = parsedData.dataUrl;
                document.getElementById("your-avatar").id = "parsed-avatar";
            }
        } catch (e) {
            console.error(e);
        }
    }
}
document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        send();
    }
});
