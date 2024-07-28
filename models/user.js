const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    studentName: {
        type: String, 
        required: true
    },
    fathersName: {
        type: String, 
        required: true
    },
    currentAge: {
        type: String, 
        required: true
    },
    neverVisitedSchool: {
        type: String, 
        required: true
    },
    reasonsForDropOut: {
        type: String, 
        required: true
    },
    studentAddress: {
        type: String, 
        required: true

    },
    zipcode: {
        type: String, 
        required: true
    },
    droppedAtAge: {
        type: String, 
        required: true
    }
});

const User = new mongoose.model('User', userSchema);

module.exports = User;
