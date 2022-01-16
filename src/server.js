const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();
app.use(express.json());

const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;
mongoose.connect(dbURI, {
     useNewUrlParser: true, 
     useUnifiedTopology: true, 
     useCreateIndex:true })
  .then((result) => app.listen(port))
  .then(console.log('Server started and connected to database'))
  .catch((err) => console.log(err));
