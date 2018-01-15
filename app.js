const express = require( 'express' );
const app = express();
const volleyball = require('volleyball')

console.log('hello wolrd');

app.use(volleyball);


app.get('/',(req,res) => res.send('hello world'))

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

