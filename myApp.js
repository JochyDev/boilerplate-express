let express = require('express');
let app = express();
require('dotenv').config();

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




































 module.exports = app;
