const { Schema, model} = require('mongoose');

const schemaUsers = new Schema({
    id: {type: String},
    email: {type: String, required: true, unique: true },
    name: {type: String},
    
});

module.exports = model('Users', schemaUsers)