const mongoose = require('mongoose');
const {Schema} = mongoose;
const todoSchema = new Schema({
    text: String,
    isCompleted: {
        type: Boolean,
        default : false
    },
    createDate : {
        type : Date,
        default: Date.now
    }
    
})
module.exports = mongoose.model('todo',todoSchema)