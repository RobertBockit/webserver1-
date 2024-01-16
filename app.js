const express = require('express')
const app = express()
const port = 3000
const { users } = require('./database');
const database = {users : users};
console.log(users);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/landing-page.html')
})

app.get('/', function (req, res) {
    res.redirect('/home', 301);
});


app.post("/api/login", function (req,res) {
    let hasAuthUser = false
    let username = req.body.username;
    let password = req.body.password;

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