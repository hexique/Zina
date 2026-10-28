function save() {
    localStorage.setItem("username-script", document.getElementById("username").value);
    localStorage.setItem("photo-script", document.getElementById("photo").value);
    localStorage.setItem("messages", document.getElementById("messages").value.split("\n").join("s-p-l-i-t-t-e-r"));
    localStorage.setItem("is-first", document.getElementById("is-first")?.checked);

    console.log("saved")
}

//load
document.getElementById("username").value = localStorage.getItem("username-script");
document.getElementById("photo").value = localStorage.getItem("photo-script")
document.getElementById("messages").value = localStorage.getItem("messages").split("s-p-l-i-t-t-e-r").join("\n");
document.getElementById("is-first").checked = localStorage.getItem("is-first");