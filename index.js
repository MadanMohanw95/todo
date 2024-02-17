const exp = require('constants');
const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./types')

app.use(express.json())

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({msg: "Passed invalid inputs"});
        return;
    }
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({msg: "Passed invalid inputs"});
        return;
    }
})

app.listen(5000)