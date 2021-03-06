const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    title: String,
    todos:[{type:Schema.Types.ObjectId, ref:'Todo'}]
})


module.exports = mongoose.model('todoList', todoListSchema)