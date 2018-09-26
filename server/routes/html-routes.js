//dependencies
const path = require("path");
const db = require("../models/index");

//routes
module.exports = app => {
    // html file "index" in client
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/index.html'));
    });

<<<<<<< HEAD
    // html file for Corey's linkedin route
    app.get('/success', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/success.html'));
    });
}; 
=======
    //html file for Linkedin route
    app.get('/success', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/success.html'));
    });
}; 
>>>>>>> 87fa08ccc8c7717a3d59ec2f42b816b9f1089d6d
