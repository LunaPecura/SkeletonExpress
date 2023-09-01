
const data = require('./models/data');

// Set port
const PORT = 3000;

// Load Express module and create app
const express = require('express');
const app = express();

// Configure app
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



// === Routes ===========================

// Main route
app.get('/', (req, res) => {
	res.send("<h1>Main</h1>");
})

// Index route 
app.get('/data', (req, res) => {
	res.render('Index', { items: data })
})

// Show routes 
app.get('/data/:index', (req, res) => {
	res.render('Show', { item: data[req.params.index] })
})




app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})