const { todo } = require("../db");

const createTodoController = async (req, res, next) => {
    await todo.create({
        title: req.body.title,
        description: req.body.description,
        isCompleted: false
    });
    next();
}

const getTodoController = async (req, res, next) => {
    const todos = await todo.find({});
    req.todos = todos;
    next();
}

const completedTodoController = async (req, res, next) => {
    await todo.updateOne({
        _id: req.body.id
    }, {
        isCompleted: req.body.isCompleted
    });
    next();
}

const deleteTodoController = async (req, res, next) => {
    await todo.deleteOne({
        _id: req.body.id
    });
    next();
}

module.exports = {
    createTodoController,
    getTodoController,
    completedTodoController,
    deleteTodoController
}