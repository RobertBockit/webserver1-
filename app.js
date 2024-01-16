const express = require('express')
const app = express()
const port = 3000
const { users } = require('./database');
const database = {users : users};
console.log(users);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.post("/api/login", function (req,res) {

    let username = req.body.username;
    let password = req.body.password;

    for (let i = 0; i < database.users.length; i++) {
        const userToCheck = users[i];
        console.log("Checking User Number " + i)
        if (userToCheck.username === username && userToCheck.password === password) {

            res.sendStatus(200);
            console.log("User '" + username + "' is logged in")
            break;
        }
        res.sendStatus(401)




    }
})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})