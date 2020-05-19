const express = require('express');
const bodyParser = require('body-parser');
require('./config/db');

const apiRouter = require('./routes/api/api.notes')

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Set up routes
app.use('/', express.static('../client/dist/note-ify'));
app.use('/new-note-form', express.static('../client/dist/note-ify'));
app.use('/notes/:id', express.static('../client/dist/note-ify'));
app.use('/api/notes', apiRouter);

// Redirect to home page if page doesn't exist.
// Change to 404 page later
app.use('*', (req, res) => {
  res.redirect('/');
});

module.exports = app;
