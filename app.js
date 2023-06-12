const express = require('express');
const app = express();
const ejs = require('ejs');

const port = 3000;

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
	res.render('index');
});
app.get('/about', (req, res) => {
	res.render('about');
});
app.get('/add_post', (req, res) => {
	res.render('add_post');
});
app.get('/post', (req, res) => {
	res.render('post');
});

app.listen(port, () => {
	console.log('Sunucu çalışmaya başladı');
});
