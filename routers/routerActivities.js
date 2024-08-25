const express = require("express")

const routerActivities = express.Router();

let activities = require("../data/activities")

routerActivities.get("/", (req, res) => {
	res.render("index", {
		activities: activities
	})
})

module.exports = routerActivities