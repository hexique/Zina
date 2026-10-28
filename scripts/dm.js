// const profile_picture = JSON.parse(localStorage.getItem("photo"))['dataUrl']
// console.log(profile_picture)

// const inputbox = document.getElementById("msg")

// let i = 0
// let history = []
// if(localStorage.getItem("is-first")){
//     displayMessage()
//     i++
// }
// load()

// inputbox.addEventListener("keydown", (event) => {
//     console.log(event)
//     if(event.code === "Enter") {
//         send();
//     }
// });


// function save(){
//     localStorage.setItem("messages-history", JSON.stringify(history))
//     console.log("saved")
// }

// function load(){
//     history = JSON.parse(localStorage.getItem("messages-history"))

//     if(!history){
//         return
//     }
//     for(let i = 0; i < history.length; i++){
//         if(history[i]["author"] == "you"){
//             displayYourMessage(history[i]["message"], false)
//             loadPhoto()
//         } else {
//             displayMessage(false)
//         }
//     }
// }

// function displayMessage(saves){
//     //if(localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i] == "") return

//     document.getElementById("messages-container").innerHTML += `<div class="msg-left">\
//         <div class="msg-avatar">\
//             <img src="img/persons/${localStorage.getItem("photo-script")}.jpg" alt="">\
//         </div>\
//         <div class="msg-content">\
//             <strong>${localStorage.getItem("username-script")}</strong>\
//             <p>${localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i].replaceAll("${USERNAME}", localStorage.getItem("name"))}</p>\
//         </div>\
//     </div>`
//     if(saves){
//         //history.push({"author": "interlocutor", "message": localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i]})
//         save()
//     }
            

    
// }

// function displayYourMessage(message, saves){
//     if(message == "") {
//         if(saves){
//             history.push({"author": "you", "message": message})
//             save()
//             loadPhoto()
//         }
//         return
//     }
//     document.getElementById("messages-container").innerHTML += `<div class="msg-right">\
//         <div class="msg-avatar">\
//             <img src="${profile_picture}" id="your-avatar">\
//         </div>\
//         <div class="msg-content">\
//             <strong>Вы</strong>\
//             <p>${message}</p>\
//         </div>\
//     </div>`
//     if(saves){
//         //history.push({"author": "you", "message": message})
//         save()
//         //loadPhoto()
//     }
//     //loadPhoto()
// }

// function send(){
//     if(inputbox.value == ""){
//         setTimeout(() => {
//             displayMessage(true), Math.random() * 8000 + 2000
//             i++
//             return
//         })

//     }
//     displayYourMessage(inputbox.value, true)

//     inputbox.value = ""
//     inputbox.focus()

//     if(i >= localStorage.getItem("messages").split("s-p-l-i-t-t-e-r").length - 1) return
//     if(localStorage.getItem("messages").split("s-p-l-i-t-t-e-r")[i] == "") {
//         i++
//         return
//     }
    
//     setTimeout(() => {
//         displayMessage(true)
//         document.querySelector("#notify-audio").play()

//         var msgs = document.querySelectorAll(".msg-left")
//         msgs[msgs.length - 1].scrollIntoView()
//         i++
//     }, Math.random() * 8000 + 2000)
//     //loadPhoto()
// }

// // function loadPhoto() {
// //     if(history.length != 0){
// //         if(history[history.length - 1]["author"] != "you") {
// //             console.log(history)
// //             return
// //     }
// //     }
// //     const photoData = localStorage.getItem("photo");
    
// //     if (photoData) {
// //         try {
// //             const parsedData = JSON.parse(photoData);
// //             if (parsedData.dataUrl) {
// //                 document.getElementById("your-avatar").src = parsedData.dataUrl;
// //                 document.getElementById("your-avatar").id = "parsed-avatar";
// //             }
// //         } catch (e) {
// //             console.error(e);
// //         }
// //     }
// // }

const dm_view = document.querySelector("#dm-full")
const dm_list = document.querySelector("#dm-list")

const dm_view_template = document.querySelector("#dm-template")

const dm_people_list = JSON.parse(localStorage.getItem("dm_people")) //array of people's id
const dm_history = localStorage.getItem("dm_history")

populatedm()

let last_person = person_div

if(!dm_view.hidden){
    dm_view.hidden = true
}

function opendm(person_div){
    const id = person_div.id
    
    dm_list.hidden = true;
    dm_view.hidden = false;

    dm_view_template.innerHTML = `${people[id].username}` //<img src="img/persons/${id}.jpg" width="40">
}

function closedm(){
    dm_list.hidden = false;
    dm_view.hidden = true;
}

function populatedm(){
    if(!dm_people_list){
        return
    }
    console.log(dm_people_list)

    for(let i=0; i < dm_people_list.length; i++){
        console.log(dm_people_list[i])
        const person = people[parseInt(dm_people_list[i])];
        dm_list.innerHTML += `<div class="person-dm-listing" onclick="opendm(this)" id="${person.id}">
                <img src="img/persons/${person.photo}.jpg" width="60" height="60">
                <a>${person.username}</a>
                <span>1 новый сообщение!</span>
            </div>`
    }
}