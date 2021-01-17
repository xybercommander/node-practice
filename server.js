// Using the http module to create a server
const http = require('http');

// calling the file system module
const fs = require('fs');



/* ******** BASIC TEXT SENDING STUFF ********** */
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     // set header content type
//     res.setHeader('Content-Type', 'text/html'); 
//     // This is the content that we are sending to the browser

//     res.write('<p>Hello Xyber!!</p>');
//     res.write('<p>Hello Again Xyber!!</p>');
//     res.end();
// });




const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // setting the content type
    res.setHeader('Content-Type', 'text/html');

    // sending an html file to the user
    fs.readFile('./views/index.html', (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })

})

// Calling the server on the port number 3000
server.listen(3000, 'localhost', () => {
    console.log('Listening requests on port 3000');
})