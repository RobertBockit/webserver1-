

async function authenticateUser(event){
    event.preventDefault()

    const usernameInput = document.getElementById("usernameField").value
    const passwordInput = document.getElementById("passwordField").value

    console.log(usernameInput + " " + passwordInput )
    const response = await fetch("/api/login",{
        method : "POST",
        headers : {
            "content-type" : "application/x-www-form-urlencoded",
            },
        body: "username=" + usernameInput + "&password=" + passwordInput,

        },
    )
    console.log(response)

    if(response.status === 200){
        console.log("loggedin")
    }
}

