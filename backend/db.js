const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://madanmohanreddyvanga4:Mongodb%4095@cluster0.zja0idn.mongodb.net/todo');

const todoSchema = mongoose.Schema({title: String, description: String, isCompleted: Boolean})

const todo = mongoose.model('todos', todoSchema);

// todo.updateMany({}, { $rename: { "completed": "isCompleted" } });


module.exports = {
    todo
}

