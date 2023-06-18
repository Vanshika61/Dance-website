const express = require('express');
const path = require("path");
const app = express();
const port = 8000;


// EXPRESS SPECIFIC CONFIGURATION 
app.use('/static', express.static('static'));   // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC CONFIGURATION 
app.set('view engine', 'pug');      // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));        // Set the views directory



// ENDPOINTS CONFIGURATION
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('index', params);
});




// START THE SERVER
app.listen(port, () =>{
    console.log(`The application started successfully on port ${port}`)
});