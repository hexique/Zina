let i = 0

function send(){
    document.getElementById("messages-container").innerHTML += `<div class="msg-right">\
        <div class="msg-avatar">\
            <img src="img/persons/2.jpg" id="your-avatar">\
        </div>\
        <div class="msg-content">\
            <strong>Вы</strong>\
            <p>${document.getElementById("msg").value}</p>\
        </div>\
    </div>`
    loadPhoto()

    document.getElementById("msg").value = ""
    document.getElementById("msg").focus()

    if(i >= localStorage.getItem("messages").split("s-p-l-i-t-t-e-r").length) return
    
    setTimeout(() => {
        document.getElementById("messages-container").innerHTML += `<div class="msg-left">\
            <div class="msg-avatar">\
                <img src="img/persons/${localStorage.getItem("photo-script")}.jpg" alt="">\
            </div>\
            <div class="msg-content">\
                <strong>${localStorage.getItem("username-script")}</strong>\
                <p>${localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i]}</p>\
            </div>\
        </div>`
    
        i++
    }, Math.random() * 5000)
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
