let scenarios = JSON.parse(localStorage.getItem("dm_scenarios"))

function load(){
    let id = idbox.value
    if(!id){
        return
    }

    if(scenarios[id] == null){
        scbox.value = "Сценарий для данного ID отсутствует."
        return
    }
    scbox.value = scenarios[id].messages.join("\n")
}

function reset(){
    if(!confirm(".")){
        return
    }

    load()
    save()

    const dm_history = JSON.parse(localStorage.getItem("dm_history"))
    let history = {}
    for(const key in dm_history){
        console.log(key, key == idbox.value, idbox.value)
        if(key == idbox.value){
            continue
        }
        history[key] = dm_history[key]
    }
    console.log(history)
    console.log(scenarios)
    localStorage.setItem("dm_history", JSON.stringify(history))
}

function save(){
    if(!scenarios){
        scenarios = new Object()
    }
    scenarios[idbox.value] = {"messages": scbox.value.split("\n"), "index": frbox.checked ? 1 : 0}

    localStorage.setItem("dm_scenarios", JSON.stringify(scenarios))
    if(frbox.checked){
        let people = JSON.parse(localStorage.getItem("dm_people"))
        if(!people.includes(idbox.value)){
            people.push(idbox.value)
        }
        localStorage.setItem("dm_people", JSON.stringify(people))
        
        let history = JSON.parse(localStorage.getItem("dm_history"))
        history[idbox.value] = [scenarios[idbox.value].messages[0]]
        localStorage.setItem("dm_history", JSON.stringify(history))
    }
}

const idbox = document.getElementById("id")
const scbox = document.getElementById("scenario")
const frbox = document.getElementById("is-first")