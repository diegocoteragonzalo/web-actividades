const express = require("express")
const app = express()
const port = 8081


app.set("views", "views")
app.set("view engine", "ejs")

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true}))

let routerActivities = require("./routers/routerActivities")
app.use("/activities", routerActivities)

let routerUsers = require("./routers/routerUsers")
app.use("/users", routerUsers)

app.listen(port, () => {
	console.log("Server running " + port)
})