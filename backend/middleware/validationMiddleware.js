const { createTodo, updateTodo, deleteTodo } = require("../types");

const createValidationMiddleware = (req, res, next) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    validationMessage(parsedPayload, res, next);
}

const updateValidationMiddleware = (req, res, next) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    validationMessage(parsedPayload, res, next);
}

const deleteValidationMiddleware = (req, res, next) => {
    const deletePayload = req.body;
    const parsedPayload = deleteTodo.safeParse(deletePayload);
    validationMessage(parsedPayload, res, next);
}

const validationMessage = (payload, res, next) => {
    if (!payload.success) {
        res.status(411).json({msg: "Passed invalid inputs"});
        return;
    } else {
        next();
    }
}

module.exports = {
    createValidationMiddleware,
    updateValidationMiddleware,
    deleteValidationMiddleware
}