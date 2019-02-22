const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

//on first connection
mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});
//on connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});
//on error
mongoose.connection.on('error', (err) => {
  console.log('Database error' + err);
});

const app = express();
const users = require('./routes/users');
const products = require('./routes/products');

//Port Number
const port = 3000;

//CORS middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public/dist/public')));

//Body parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);
app.use('/products', products);

//index route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/public/index.html'));
});

//start server
app.listen(port, () =>{
  console.log("Express server running on port "+port);
});