//dependencies
const path = require("path");
const db = require("../models/index");

//routes
module.exports = app => {
    // html file "index" in client
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/index.html'));
    });

    //html file for Linkedin route
    app.get('/success', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/success.html'));
    });
}; 