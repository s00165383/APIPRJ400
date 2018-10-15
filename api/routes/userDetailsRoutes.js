module.exports = (app) => {
    var userDetails = require('../controllers/userDetailsController');


    //userDetails Routes
    app.route('/userDetails')
        .get(userDetails.read_a_user)
        .post(userDetails.create_a_user);
        



};