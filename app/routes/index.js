const router = require('express').Router();
const todosRoutes = require('./todos.routes');

router.use('api/todos', todosRoutes);

router.use('/api/*', (req, res, next) => {
    res.sendStatus(404);
})

router.use(sitesRoutes)

router.use((err, req, res, next) => {
    if(!err) {
        return next();
    } else {
        console.error(err.stack);
        res.sendStatus(500);
    }
})

module.exports = router
