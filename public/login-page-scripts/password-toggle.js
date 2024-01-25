const passwordField = document.getElementById("passwordField")
const toggleButton = document.getElementById("showPassword")
function toggleVisibility(){
    if(passwordField.type === "password"){
        passwordField.type="text"
        toggleButton.textContent = "Hide Password"

    } else {
        passwordField.type = "password"
        toggleButton.textContent = "Show Password"

    }
}

function closePopUp() {
    let popup = document.getElementById("401err")
    popup.style.display = "none";
}


