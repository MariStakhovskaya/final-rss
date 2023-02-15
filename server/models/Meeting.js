const { Schema, model} = require('mongoose');

const schemaMeeting = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    fulldescriptions: {type: String},
    date: {type: String, required: true},
    time: {type: String, required: true},
    personCount: {type: Number, required: true},
    role: {type: Array, default:[]},
    users: Array,
    url: {type: String},
    
});

module.exports = model('Meeting', schemaMeeting)