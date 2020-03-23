const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
	console.log("SERVER STARTED...");
});

app.use(express.static('./public'));

app.get('/get_text', (req, res) => {
    res.send('hello world');
});

app.get("/api/user/", (req, res) => {
	console.log ("Get request name");
    res.send({
    	name: "Toto",

});
});
