
const data = require('./models/data');

// Set port
const PORT = 3000;

// Load Express module and create app
const express = require('express');
const app = express();

// Configure app
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use((req, res, next) => {
    // console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

// === Routes ===========================

// Main route
app.get('/', (req, res) => {
	res.send("<h1>Main</h1>");
})

// Index route 
app.get('/data', (req, res) => {
	res.render('Index', { items: data })
})

// Create route
app.get('/data/new', (req, res) => {
    res.render('New');
});

// Post route
app.post('/data', (req, res) => {
    if(req.body.attr1 === 'on') { req.body.attr1 = true; } 
	else { req.body.attr1 = false; } 
    data.push(req.body);
    // res.send("Data received");
	res.redirect('/data');
});

// Show route 
app.get('/data/:index', (req, res) => {
	res.render('Show', { item: data[req.params.index] })
})




app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})