const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Node JS Lecture 04</title></head>');
        res.write('<body>');
        res.write('<h1>Home</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Node JS Lecture 04</title></head>');
        res.write('<body>');
        res.write('<h1>About Us</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Node JS Lecture 04</title></head>');
    res.write('<body>');
    res.write('<h1>404 Not Found</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();


});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});