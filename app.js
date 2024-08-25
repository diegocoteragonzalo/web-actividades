const app = require("express")
const app = express()
const port = 8081


app.listen(port, () => {
	console.log("Server running " + port)
})