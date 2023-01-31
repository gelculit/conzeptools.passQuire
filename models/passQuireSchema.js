const mongoose = require('mongoose')
const Schema = mongoose.Schema; // -> will define structure of DB

//instantiate and create a new schema for the DB structure
const passQuireSchema = new Schema({
    accessFor: {
        type: String,
        required: true
    },
    emailAdd: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    },
    
    memo: {
        type: String,
        required: true
    }
}, { timestamps: true }); //-> second option adds acreated at timestamp

// create the model to wrap around the schema
const PassQuire = mongoose.model('UnamePword', passQuireSchema); //collection name singular and the structure (schema)

//export the model
module.exports = PassQuire;