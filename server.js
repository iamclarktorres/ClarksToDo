//setup
const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override')
    ;

//configuration
//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uw03mypu');

mongoose.connect('mongodb://iamclarktorres:1mrPickles@ec2-54-183-153-81.us-west-1.compute.amazonaws.com:27017');

// mongoose.connect('mongodb://localhost:27017');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(methodOverride());

//model
let todo = mongoose.model('Todo', {
    item: String
});

// //routes
// app.get('/api/todos', (req, res) => {
//     Todo.find((err, todos) => {
//         if (err) {
//             res.send(err)
//         }
//         res.json(todos);
//     });
// });

// app.post('/api/todos', (req, res) => {
//     Todo.create({
//         text: req.body.text,
//         done: false
//     }, (err, todo) => {
//         if (err) {
//             res.send(err);
//         }
//         Todo.find((err, todos) => {
//             if (err) {
//                 res.send(err)
//             }
//             res.json(todos);
//         });
//     });
// });

// app.delete('/api/todos/:todo_id', (req, res) => {
//     Todo.remove({
//         _id: req.params.todo_id
//     }, (err, todo) => {
//         if (err) {
//             res.send(err)
//         }
//         Todo.find((err, todos) => {
//             if (err) {
//                 res.send(err)
//             }
//             res.json(todos);
//         });
//     });
// });

//application
app.get('*', (req, res) => {
    res.sendfile('./public/index.html');
});

//listen
app.listen(8080, () => {
    console.log('Now listening on port 8080');
});