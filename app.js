let express = require('express');
let app = express();
let corse= require('cors');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
const router = require('./route');
mongoose.connect('mongodb://localhost:27017/mern', {
    useNewUrlParser: true,  
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
app.use(corse());
app.use(bodyParser.json());
app.use(express.json());
app.use('/auth',router); // Adjust the path as necessary

app.listen(2030, () => {
    console.log("Server is running on port 2030");
});
