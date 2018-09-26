//dependencies
const path = require("path");
const db = require("../models/index");

//routes
module.exports = app => {
    // html file "index" in client
    app.get('/dangit', (req, res) => {
        console.log("Dang it Bobby")
        db.Job.findAll({}).then(function (dbJobs) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbJobs);
          });
    });

    //html file for Corey's linkedin route
    app.get('/success', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/success.html'));
    });
}; 