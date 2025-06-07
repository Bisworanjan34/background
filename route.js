let express = require('express');
let router = express.Router();
let { showdata, postdata, deletedata } = require('./controller');
// Adjust the path as necessary
router.get('/show', showdata);
router.post('/insert', postdata); 
router.delete('/delete/:id', deletedata);
module.exports = router;
