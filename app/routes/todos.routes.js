const router = require('express').Router();
const todosController = require('../controllers/todos.controller');

module.exports = router;

router.get('/', todosController.getAll);
router.post('/', todosController.insert);
router.put('/:id', todosController.updateById);
router.delete('/:id', todosController.removeById);