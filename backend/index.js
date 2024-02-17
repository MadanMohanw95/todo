const exp = require('constants');
const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

app.use(express.json())

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({msg: "Passed invalid inputs"});
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        isCompleted: false
    })
    res.send({
        msg: "todo created successfully!"
    })
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({todos});
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({msg: "Passed invalid inputs"});
        return;
    }
    await todo.updateOne({
        _id: updatePayload.id
    }, {
        isCompleted: updatePayload.isCompleted
    })
    res.json({msg: "Todo marked as completed!"})
})

app.delete('/deleteTodo', async (req, res) => {
    const deletePayload = req.body;
    const parsedPayload = updateTodo.safeParse(deletePayload);

    await todo.deleteOne({
        _id: deletePayload.id
    })
    res.json({
        msg: "deleted todo successfully!"
    })
})

app.listen(5000)