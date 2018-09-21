//Dependencies 
const path = require("path");

//Routes
module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/success", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/redirect.html"))
    });
}