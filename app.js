const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000);

