function updateUserData(){
    let username = sessionStorage.getItem("username");
    let title = document.getElementById("h1_dashboard")
    title.textContent = username + "'s Dashboard"

}