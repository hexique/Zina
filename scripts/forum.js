function save() {
    localStorage.setItem("username-script", document.getElementById("username").value);
    localStorage.setItem("photo-script", document.getElementById("photo").value);
    localStorage.setItem("messages", document.getElementById("messages").value.split("\n").join("s-p-l-i-t-t-e-r"));
    localStorage.setItem("is-first", document.getElementById("is-first")?.checked);

    console.log("saved")
}