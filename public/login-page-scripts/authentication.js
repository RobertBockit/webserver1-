

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
    console.log(await response.text)

    if(response.status === 200){
        console.log("loggedin")
        sessionStorage.setItem("username", usernameInput);

        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            window.location.href = '/dashboard.html';

        };
        xhttp.open("POST", "demo_post.asp", true);
        xhttp.send();
    }

    if(response.status === 401){
        console.log("CREATIgn POPUP")
        let popup = document.getElementById("401err")
        popup.style.display = "flex"

    }
}

