const express = require('express');
const app = express();

const router = require('./router');

app.use(express.static('public'));
app.use('/images', express.static('./images'))

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use('/', router)

app.listen(3000);

