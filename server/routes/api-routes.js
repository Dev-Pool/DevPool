// Dependencies
const db = require("../models");

// Routes
module.exports = app => {
    // Jobs route
    app.get('/api/jobs/:id', (req, res) => {
        // console.log(req.params);
        db.Job.findAll({attributes: ['id', 'company', 'title', 'body', 'applied']}).then((dbJobs) => {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbJobs);
          });
    });

    // Creating Users
    app.post('/api/user', (req, res)=>{
        // console.log (req.body);

        // Checks for current email address in DB.
        // If exist, don't do anything.
        function isIdUnique (email) {
            return db.User.findAll({ where: { email: email } })
              .then(count => {
                if (count != 0) {
                  return false;
                } else {
                    return true;
                }
            });
        }
        
        // If email does not exist in DB, add user info from linkedin
        isIdUnique(req.body.email).then(isUnique => {
            if (isUnique === true) {
                db.User.create({
                    name: req.body.name,
                    email:req.body.email,
                    password: req.body.password,
                    imageURL: req.body.imageURL
                }).then((response)=>{
                    res.json(response);
                });
            }
        });
    });

};