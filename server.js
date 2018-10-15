var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

    //connect the database by adding a url to the mongoose instance connection
    mongoose = require('mongoose'),
    
    //Load the created model
    User = require('./api/models/userDetailsModel'),

    bodyParser = require('body-parser');

    const cors = require('cors')
    app.use(cors());

    //monggose instance url connection
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Userdb');

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());

    //import the routes
    var routes = require('./api/routes/userDetailsRoutes');
    //register the route
    routes(app);
    
app.use(function(req,res){
    res.status(404).send({ url: req.originalUrl + ' not found'})
});

    app.listen(port);
    console.log('construction app RESTful API server started on:  ' + port);