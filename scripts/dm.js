

// let i = 0
// let history = []
// if(localStorage.getItem("is-first")){
//     displayMessage()
//     i++
// }
// load()


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

function _clear_messages(){
    console.log("cleariing...")
    document.getElementById("messages-container").innerHTML = ""
}

function _add_message(role, message){
    if(role == 1){
        document.getElementById("messages-container").innerHTML += `<div class="msg-right">
            <div class="msg-avatar">
                <img src="${profile_picture}" id="your-avatar">
            </div>
            <div class="msg-content">
                <strong>Вы</strong>
                <p>${message}</p>
            </div>
        </div>`
        return;
    }
    document.getElementById("messages-container").innerHTML += `<div class="msg-left">
        <div class="msg-avatar">
            <img src="img/persons/${people[last_person].photo}.jpg" alt="">
        </div>
        <div class="msg-content">
            <strong>${people[last_person].username}</strong>\
            <p>${message}</p>
        </div>
    </div>`
}

function send(message){
    if(message == ""){
        return;
    }

    inputbox.value = ""
    _add_message(1, message)
    _push_to_history(message)
    respond_message(last_person)
}

function respond_message(person){
    let scenario = JSON.parse(localStorage.getItem("dm_scenarios"))
    if(scenario[last_person].index > scenario[last_person].messages.length - 1){
        return
    }
    const message = scenario[last_person].messages[scenario[last_person].index]
    _add_message(0, message)
    scenario[last_person].index++;

    localStorage.setItem("dm_scenarios", JSON.stringify(scenario))
    _push_to_history(message)

    console.log(scenario)
}

function _push_to_history(message){
    if(dm_history[last_person] == null){
        dm_history[last_person] = [message]
    }
    else{
        dm_history[last_person].push(message)
    }

    console.log(dm_history)
    localStorage.setItem("dm_history", JSON.stringify(dm_history))
}

const urlParams = new URLSearchParams(window.location.search);
let goto_id = urlParams.get('g')

const dm_view = document.querySelector("#dm-full")
const dm_list = document.querySelector("#dm-list")

const dm_scenarios = JSON.parse(localStorage.getItem("dm_scenarios"))
const dm_view_template = document.querySelector("#dm-template")

let dm_people_list = JSON.parse(localStorage.getItem("dm_people")) //array of people's id
let dm_history = JSON.parse(localStorage.getItem("dm_history"))

if(dm_history == null){
    dm_history = new Object()
}

let last_person = null

const profile_picture = JSON.parse(localStorage.getItem("photo"))['dataUrl']
const inputbox = document.getElementById("msg")


//[START]
if(!dm_view.hidden){
    dm_view.hidden = true
}

inputbox.addEventListener("keydown", (event) => {
    if(event.code === "Enter") {
        send(inputbox.value);
        
    }
});

if(goto_id != null){
    opendm(parseInt(goto_id));
}

populatedm()

function opendm(id){
    console.log(id)
    last_person = id
    
    dm_list.hidden = true;
    dm_view.hidden = false;

    dm_view_template.innerHTML = `${people[id].username}` //<img src="img/persons/${id}.jpg" width="40">

    dm_setmessages(id)
}

function dm_setmessages(id){
    const history = dm_history[id]
    let scenario = dm_scenarios[id]
    if(scenario == null){
        scenario = []
    }
    else{
        scenario = scenario.messages
    }
    
    _clear_messages()
    if(history == null){
        return;
    }
    for(let i=0; i < history.length; i++){
        const msg = history[i]
        console.log(`adding "${msg}"`)
        if(scenario == null){
            _add_message(1, msg)
            continue
        }
        _add_message(scenario.includes(msg) ? 0 : 1, msg)
    }
}

function closedm(){
    dm_list.hidden = false;
    dm_view.hidden = true;
}

function deletedm(){
    if(!confirm("вы уверены?")){
        return
    }

    const index = dm_people_list.indexOf(last_person)
    dm_people_list.splice(index, 1)

    console.log(dm_people_list)

    localStorage.setItem("dm_people", JSON.stringify(dm_people_list))
    closedm()
    populatedm()
}

function populatedm(){
    if(dm_people_list == null || dm_people_list.length == 0){
        dm_list.innerHTML = "<i>Здесь пустовато. Попробуйте с кем-нибудь <a href=\"dating.html\">познакомиться</a>!</i>"
        return
    }
    console.log(dm_people_list)
    dm_list.innerHTML = ""

    for(let i=0; i < dm_people_list.length; i++){
        console.log(dm_people_list[i])
        const person = people[parseInt(dm_people_list[i])];
        const history = dm_history[dm_people_list[i]]

        dm_list.innerHTML += `<div class="person-dm-listing" onclick="opendm(this.id)" id="${person.id}">
                <img src="img/persons/${person.photo}.jpg" width="60" height="60">
                <a>${person.username}</a>
                <p>${history != null ? history[history.length - 1] : ""}</p>
            </div>`
    }
}