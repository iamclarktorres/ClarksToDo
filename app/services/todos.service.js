const todosModel = require('../models/todos');

module.exports = todosService;

function todosService(options) {
    let Todo

    if (!options.modelService) {
        throw new Error('Options.modelService is required');
    }

    Todo = options.modelService;

    return {
        getAll: getAll,
        insert: insert,
        updateById: updateById,
        removeById: removeById
    }

    function getAll() {
        return Todo.find();
    }

    function insert(document) {
        let todo = new Todo(document);
        return todo.save();
    }

    function updateById(queryCondition, doc) {
        return Todo.findOneAndUpdate(queryCondition, doc, {
            new: true
        });
    }

    function removeById(queryCondition) {
        return Todo.findOneAndRemove(queryCondition);
    }
}