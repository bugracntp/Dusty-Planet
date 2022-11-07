const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weatherSchema = new Schema({
    ID: {
        type: String,
        require: true
    },
    sol: {
        type: String,
        require: true
    },
    temp: {
        type: String,
        require: true
    },
    press: {
        type: String,
        require: true
    }
});

const Weather = mongoose.model('Weather',weatherSchema)
module.exports = Weather