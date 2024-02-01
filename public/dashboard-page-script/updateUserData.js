function updateUserData(){
    let username = sessionStorage.getItem("username");
    let title = document.getElementById("h1_dashboard")
    title.textContent = username + "'s Dashboard"

}

async function updateUserProfilePicture(){

    let username = sessionStorage.getItem("username")
    let profilePic = document.getElementById("profile-pic")

    profilePic.src = await fetch("/api/" + username + "/profile-picture-path"
    ).then(result => result.json()).then(res => res)


}