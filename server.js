// Using the http module to create a server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html'); 
    // This is the content that we are sending to the browser

    res.write('<p>Hello Xyber!!</p>');
    res.write('<p>Hello Again Xyber!!</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Listening requests on port 3000');
})