// Dependencies
const path = require("path");
const db = require("../models/index");

// Routes
module.exports = app => {
    // Test route
    app.get('/dangit', (req, res) => {
        console.log("Dang it Bobby")
        db.Job.findAll({}).then(function (dbJobs) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbJobs);
          });
    });

    // Creating Users
    app.post('/user', (req, res)=>{
        console.log (req.body);

        // db.User.create({

        // }).then((response)=>{
        //     console.log(response);
        //     // res.json(response);
        // });
    });

};
