const keys = ["username", "email", "password", "about", "age", "city", "gender"]

async function submit(){
    for(let i = 0; i < keys.length; i++){
        try {
            document.getElementById(keys[i]).value = localStorage.getItem(keys[i])
        } catch {
            0
        }
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