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
    if(localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i] == "") return
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
    }
}

function send(){
    if(document.getElementById("msg").value == ""){
        displayMessage(true)
        i++
        return
    }
    displayYourMessage(document.getElementById("msg").value, true)
    loadPhoto()

    document.getElementById("msg").value = ""
    document.getElementById("msg").focus()

    if(i >= localStorage.getItem("messages").split("s-p-l-i-t-t-e-r").length) return
    if(localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i] == "") {
        i++
        return
    }
    
    setTimeout(() => {
        displayMessage()
        i++
    }, Math.random() * 8000 + 2000)
}

function loadPhoto() {
    const photoData = localStorage.getItem("photo");
    
    if (photoData) {
        try {
            const parsedData = JSON.parse(photoData);
            if (parsedData.dataUrl) {
                document.getElementById("your-avatar").src = parsedData.dataUrl;
                document.getElementById("your-avatar").id = photoData.dataUrl;
            }
        } catch (e) {
            console.error(e);
            document.getElementById("your-avatar").src = photoData;
            document.getElementById("your-avatar").id = photoData;
        }
    }
}
document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        send();
    }
});
