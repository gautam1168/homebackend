const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.get("*", (req, res) => {
	res.send("Call at: " + req.url);
});

app.listen(port, () => {
	console.log("Listening at port: ", port);
});
