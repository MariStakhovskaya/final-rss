const { Schema, model} = require('mongoose');

const schemaMeeting = new Schema({
    title: {type: String},
    description: {type: String},
    fulldescriptions: {type: String},
    date: {type: String},
    time: {type: String},
    personCount: {type: Number},
    role: {type: Array, default:[]},
    users: Array,
    url: {type: String},
    
});

module.exports = model('Meeting', schemaMeeting)