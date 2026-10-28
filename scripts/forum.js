let scenarios = JSON.parse(localStorage.getItem("dm_scenarios"))

function load(){
    let id = idbox.value
    if(!id){
        return
    }

    scbox.value = scenarios[id]
}

function save(){
    if(!scenarios){
        scenarios = new Object()
    }
    scenarios[idbox.value] = scbox.value.split("\n")

    localStorage.setItem("dm_scenarios", JSON.stringify(scenarios))
}

const idbox = document.getElementById("id")
const scbox = document.getElementById("scenario")
const frbox = document.getElementById("is-first")