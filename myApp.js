let express = require('express');
let app = express();

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
    res.json({"message": "Hello json"})
})




































 module.exports = app;
