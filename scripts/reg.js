const keys = ["name", "email", "password", "about", "age", "city", "gender"]
const legal_checkbox = document.querySelector("#eula-input")

for(let i = 0; i < keys.length; i++){
    try {
        document.getElementById(keys[i]).value = localStorage.getItem(keys[i])
    } catch {
        0
    }
}

if (hasProfile()){
    document.getElementById("title").textContent = "Изменить данные странички"
    document.getElementById("signup").textContent = "Сохранить"
    document.getElementById("signup-buttons").hidden = true
    document.getElementById("gender-div").hidden = true
    document.getElementById("eula").hidden = true

    
    document.getElementById("delete-account").hidden = false
}

//indev
function deleteAccount(){
    if(!confirm("Вы уверены, что хотите удалить свой аккаунт? Это действие НЕВОЗМОЖНО отменить.")){
        return
    }

    for(let i = 0; i < keys.length; i++){
        localStorage.removeItem(keys[i]);
        window.location = "/"
    }
}

async function submit(){
    if(!hasProfile() && !legal_checkbox.checked){
        document.querySelector("#eula-not-accepted").hidden = false
        return
    }

    for(let i = 0; i < keys.length; i++){
        localStorage.setItem(keys[i], document.getElementById([keys[i]]).value);
        console.log(`${keys[i]} : ${document.getElementById([keys[i]]).value}`)
    }

    const photoFile = document.getElementById("photo").files[0];
    if (photoFile) {
        await savePhotoToLocalStorage(photoFile);
    }

    window.location.href = "profile.html";
}

function savePhotoToLocalStorage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const photoData = {
                dataUrl: e.target.result,
                name: file.name,
                type: file.type,
                size: file.size,
                lastModified: file.lastModified
            };
            localStorage.setItem("photo", JSON.stringify(photoData));
            resolve();
        };
        
        reader.onerror = function(error) {
            console.error(`error ${error}`);
            reject(error);
        };
        
        reader.readAsDataURL(file);
    });
}