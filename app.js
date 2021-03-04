const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// Connect to mongoDB
const dbURI = 'mongodb+srv://xybercommander:soumendra@xybercluster.usni0.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('CONNECTED TO DB');
        // listen for request
        app.listen(3000);
    })
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(morgan('dev'));


// app.get('/', (req, res) => {
//     // res.send('<p>Home Page<p>');
//     res.sendFile('./views/index.html', { root: __dirname });
//     // IMPORTANT ^^^^
//     // The second arguement contains a property root to set the root to app.js's directory
//     // This is done because by default express takes the system root directory to be the main root
// })

// app.use((req, res) => {
//     console.log(req.ip);
// })

app.get('/', (req, res) => {

    const blogs = [
        {title: 'Xyber becomes gold', snippet: 'Lmao lol lulz rofl hahahah honhonhon'},
        {title: 'Xyber becomes platinum', snippet: 'Lmao lol lulz rofl hahahah honhonhon'},
        {title: 'Xyber becomes radiant', snippet: 'Lmao lol lulz rofl hahahah honhonhon'}
    ]

    res.render('index', { title : 'Home', blogs: blogs });
})

app.get('/about', (req, res) => {
    // res.send('<p>About Page<p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' })
})


// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('./about');
// })


// rendering the create page
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Crete a New Blog' })
})


// 404 error
// Always try to keep app.use() in the end or else express will ignore the other get methods
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' })
});