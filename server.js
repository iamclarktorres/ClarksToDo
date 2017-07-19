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

//listen
app.listen(8080, () => {
    console.log('Now listening on port 8080');
});

//model
let todo = mongoose.model('Todo', {
    text: String
});