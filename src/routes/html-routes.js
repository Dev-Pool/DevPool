//dependencies
const path = require("path");

//routes
module.exports = app => {
    //html file "index" in layouts
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../layouts/index.html'));

    });

    //html file for Corey's linkedin route
    app.get('/success', (req, res) => {
        res.sendFile(path.join(__dirname, '../../layouts/views/success.html'))
    });
}; 