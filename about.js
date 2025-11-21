function clearCookies(){
    window.alert("u sure?")
    localStorage.clear()
}

function deleteMessage(){
    let messages = JSON.parse(localStorage.getItem("messages-history"))
    messages = messages.slice(0, messages.length - 1)
    localStorage.setItem("messages-history", JSON.stringify(messages))
}