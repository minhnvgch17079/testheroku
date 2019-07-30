var express = require('express')
var app = express()
var port = 5000

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(port, function() {
    console.log('app running at port ' + port)
})