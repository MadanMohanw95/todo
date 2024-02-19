const express = require('express');
const router = express.Router();
const {
    createValidationMiddleware,
    updateValidationMiddleware,
    deleteValidationMiddleware
} = require('../middleware/validationMiddleware');
const { createTodoController, completedTodoController, getTodoController } = require('../controllers/todocontroller');

router.post('/todo', createValidationMiddleware, createTodoController, (req, res) => {
    res.send({
        msg: "todo created successfully!"
    })
});

router.get('/todos', getTodoController, async (req, res) => {
    const todos = req.todos;
    res.json({ todos });
});

router.put('/completed', updateValidationMiddleware, completedTodoController, async (req, res) => {
    res.json({ msg: "Todo marked or unmarked successfully!", isCompleted: req.body.isCompleted })
});

router.delete('/deleteTodo', deleteValidationMiddleware, async (req, res) => {
    res.json({
        msg: "deleted todo successfully!"
    })
});

module.exports = router;