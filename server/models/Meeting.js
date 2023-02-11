const { Schema, model} = require('mongoose');

const schemaMeeting = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    date: {type: String, required: true},
    time: {type: String, required: true},
    personCount: {type: Number, required: true},
    url: {type: String},
    
});

module.exports = model('Meeting', schemaMeeting)