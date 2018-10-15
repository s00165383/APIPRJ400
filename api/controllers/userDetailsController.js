'use strict'

var mongoose = require('mongoose'),
 User = mongoose.model('userDetails');

 exports.read_a_user = function(req,res){
     User.find({}, function(err,user){
         if(err)
            res.send(err);
        res.json(user);
     });
 };

 exports.create_a_user = function (req, res) {
    var user = new User(req.body);
    //Product.save({}, function(err, product){
    user.save((err, createdUser) => {
        if (err)
            res.send(err);
        else
            res.json(createdUser);
    });
};
