const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


app.post("/api/login", function (req,res){
    let username = req.body.username;
    let password = req.body.password;

    if(username === "test" && password === "admin") {
        res.send('Hello World!' + username + password)
    }else{
        res.send('Login not authorized')
    }



})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})