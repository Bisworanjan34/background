let express = require('express');
let app = express();
require('dotenv').config();
let corse= require('cors');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
const router = require('./route');
const port = process.env.PORT || 3000;
const mongoUrl = process.env.mongo_url;

mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.use(corse());
app.use(bodyParser.json());
app.use(express.json());
app.use('/auth',router); // Adjust the path as necessary
