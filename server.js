//dependencies for app
const express = require('express');
const bodyParser = require('body-parser');
//setting up express app
const app = express();
let PORT = process.env.PORT || 9090;
//requiring models

const db = require('./models');

//setting up Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//we'll need to require the routes here

//-----------------------------------

//syncing sequelize models and starting Express
db.sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`App listening on PORT ${PORT}`);
    });
});