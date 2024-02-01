let logoutButton = document.getElementById("logount-button")

function logoutUser(event){
    event.preventDefault()
    sessionStorage.removeItem("username");
    document.cookie = "session_token=; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    window.location="/"
}


