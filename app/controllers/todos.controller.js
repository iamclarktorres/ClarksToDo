const todosModel = require('../models/todos')
const todosService = require('../services/todos.service')({
    modelService: todosModel
});

module.exports = todosController;

function todosController() {
    return {
        getAll: getAll,
        insert: insert,
        updateById: updateById,
        removeById: removeById
    }

    function getAll(req, res){
        todosService.getAll()
            .then((todos) => {
                res.json(todos);
            })
            .catch ((err) => {
                return res.status(500);
            });
    }

    function insert(req, res) {
        todosService.insert(req.body)
            .then((todo) => {
                res.status(201)
                    .json(todo);
            })
            .catch((err) => {
                return res.status(500);
            })
    }

    function updateById(req, res) {
        todosService.updateById(req.params.id, req.body)
            .then((todo) =>{
                res.status(204)
                    .json(todo)
            })
            .catch((err) => {
                return res.status(500)
            });
    }

    function removeById(req, res) {
        todoService.removeById(req.params.id)
            .then((todo) => {
                res.status(204)
                    .json(todo);
            })
            .catch((err) => {
                return res.status(500);
            })
    }
    
}