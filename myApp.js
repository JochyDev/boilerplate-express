let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(function(req, res, next){
    console.log( req.method, req.path, '-', req.ip)
    next()
})

let publicPath = __dirname + '/public'
app.use('/public', express.static(publicPath))

// app.get('/', function(req, res){
//     res.send('Hello Express')
// })
let absolutePath = __dirname + '/views/index.html'
app.get('/', function(req, res){
    res.sendFile(absolutePath)
})

app.get('/json', function(req, res){
    let message = 'Hello json'
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        message = message.toUpperCase()
    }
    res.json({message})
})

app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next()
}, function(req, res){
    res.json({time: req.time})
})

app.get('/:word/echo', function(req, res){
    res.json({'echo': req.params.word})
})

app.get('/name', function(req, res){
    const { first: firstName, last: lastName } = req.query;
    res.json({
        name: `${firstName} ${lastName}`
      });
})

app.post('/name', function(req, res){
    const { first: firstName, last: lastName } = req.body;
    res.json({
        name: `${firstName} ${lastName}`
      });
})



































 module.exports = app;
