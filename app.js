const express = require('express');

// express app
const app = express();

// listen for request
app.listen(3000);


app.get('/', (req, res) => {
    // res.send('<p>Home Page<p>');
    res.sendFile('./views/index.html', { root: __dirname });
    // IMPORTANT ^^^^
    // The second arguement contains a property root to set the root to app.js's directory
    // This is done because by default express takes the system root directory to be the main root
})


app.get('/about', (req, res) => {
    // res.send('<p>About Page<p>');
    res.sendFile('./views/about.html', { root: __dirname });
})


// redirects
app.get('/about-us', (req, res) => {
    res.redirect('./about');
})

// 404 error
// Always try to keep app.use() in the end or else express will ignore the other get methods
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});