const express = require("express")
const app = express()
const port = process.env.PORT || 8001
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const expressjwt = require("express-jwt")

app.use(bodyParser.json())
app.use(cors())

const jwtCheck = expressjwt({
	secret: "mysupersecretkey"
})

app.get("/resource", (req, res) =>{
	res.status(200)
	res.send("public resource, you can see this")
})

app.get("/resource/secret", jwtCheck, (req, res) => {
	res.status(200)
	res.send("Secret resources, you should be logged into this")
})

const users = [
	{id:1, username: "srilakshmi", password: "abc123"},
	{id:2, username: "sri", password: "mno123"}
]

app.post("/login", (req, res) => {
	if(!req.body.username || !req.body.password){
	res.status(400)
	res.send("you need a username and password")
	return;
	}
	
	const user = users.find((u) => {
		return u.username === req.body.username && u.password === req.body.password
	})

	if(!user){
		res.status(401)
		res.send("user not found")
		return;
	}

	const token = jwt.sign({
		sub: user.id,
		username: user.username
	}, "mysupersecretkey", {expiresIn: "10 hours"})

	res.status(200)
	res.send({access_token: token})
})

app.get("/status", (req,res) => {
	const localTime = (new Date()).toLocaleTimeString()

	res.status(200)
	res.send(`The time is ${localTime}`)
})
app.get("*", (req,res) => {
	res.sendStatus(404)
})

app.listen(port, function(req, res){
	console.log("server started")
})