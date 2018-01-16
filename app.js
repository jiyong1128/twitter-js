const express = require( 'express' );
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

console.log('hello wolrd');

var items = {{name: 'Gandolph'}};


nunjucks.configure('views');
var response = nunjucks.render('index.html', items);

app.use(volleyball);


app.get('/',(req,res) => res.send(response));

app.use('/deep/new', (req, res) => res.send('this is deep area'))

app.use(function(req, res, next) {
  console.log(req.method)
  next()
})
app.post('/', function(req, res) {
  res.send('Post')
  // next()
})

app.listen(3000)

