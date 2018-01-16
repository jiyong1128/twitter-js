const express = require( 'express' );
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');

console.log('hello wolrd');

var items = {
  title: 'sample',
  people : [
    {name: 'Gandolf'},
    {name: 'Frodo'},
    {name: 'Hermione'},
  ],
  hello: false
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
//var response = nunjucks.render('index.html', items);

app.use(volleyball);

// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use('/', routes);
app.use(express.static('public'));



// app.get('/',(req,res) => res.render('index', {title: 'Hall of Fame', people: people}));
// app.get('/items',(req,res) => res.render('index', items));

app.use('/deep/new', (req, res) => res.send('this is deep area'));

app.use(function(req, res, next) {
  console.log(req.method)
  next()
})
app.post('/', function(req, res) {
  res.send('Post')
  // next()
})

app.listen(3000)

