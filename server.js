//dependencies for app
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//setting up express app
const app = express();
let PORT = process.env.PORT || 9090;

//requiring models
const db = require('./models');

//setting up Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')));

//we'll need to require the routes here

const routes = require("./routes/vue-routes.js");
app.use(routes);

//-----------------------------------

//syncing sequelize models and starting Express
db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`App listening on PORT ${PORT}`);
    });
});