const express = require('express')
const app = express()
const port = 3000
const { users } = require('./database');
const database = {users : users};


    console.log(users);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

function checkIfUserExists(username){
    let userExists = false
    for( let i = 0; i < database.users.length; i++){
        const userToCheck = users[i];
        if(username === userToCheck.username){
            userExists = true
            return true
        }
    }

    if(userExists === false){
        return false
    }
}




app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/landing-page.html')
})

app.get('/', function (req, res) {
    res.redirect('/home');
});



app.get('/api/:username/city', (req, res) => {
    let username = req.params.username
    if(checkIfUserExists(username)){
        const userRecord = database.users.find(user => user.username === username);
        res.send(userRecord.city)
    } else {
        res.sendStatus(404)
    }
})



app.post("/api/login", function (req,res) {
    let hasAuthUser = false
    let username = req.body.username;
    let password = req.body.password;
    console.log(req.body)

    //
    for (let i = 0; i < database.users.length; i++) {
        const userToCheck = users[i];
        console.log("Checking User Number " + i)
        if (userToCheck.username === username && userToCheck.password === password) {
            hasAuthUser = true
            const token = username + String(Date.now())
            console.log("Token for user is: " + token)
            res.send(token);
            console.log("User '" + username + "' is logged in")
            break;
        }




    }
    if (hasAuthUser === false) {res.sendStatus(401)}

})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})