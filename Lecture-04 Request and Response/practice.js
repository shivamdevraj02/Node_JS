const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Myntra nav bar</title></head>');
        res.write('<body>');
        res.write('<a href="/Home">Home</a> | ');
        res.write('<a href="/Men">Men</a> | ');
        res.write('<a href="/Women">Women</a> | ');
        res.write('<a href="/Kids">Kids</a> | ');
        res.write('<a href="/Cart">Cart</a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url === '/Home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>');
        res.write('<h1>Home Page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url === '/Men') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Men</title></head>');
        res.write('<body>');
        res.write('<h1>Men Page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url === '/Women') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Women</title></head>');
        res.write('<body>');
        res.write('<h1>Women Page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url === '/Kids') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Kids</title></head>');
        res.write('<body>');
        res.write('<h1>Kids Page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url === '/Cart') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Cart</title></head>');
        res.write('<body>');
        res.write('<h1>Cart Page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

  

});




server.listen(3000, () => {
    console.log('Server is running on address http://localhost:3000');
});


