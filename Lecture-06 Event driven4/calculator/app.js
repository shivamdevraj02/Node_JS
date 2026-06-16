const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Node JS Calculator</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to Home Page</h1>');
        res.write('<a href="/calculator">Click here to visit calculator page</a>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    else if (req.url === '/calculator') {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Node JS Calculator</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to Calculator Page</h1>');

        res.write('<form action="/submit" method="POST">');
        res.write('<input type="number" name="num1" placeholder="Enter first number">');
        res.write('<br><br>');
        res.write('<input type="number" name="num2" placeholder="Enter second number">');
        res.write('<br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');

        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    else if (req.url === '/submit' && req.method === 'POST') {

        const chunks = [];

        req.on('data', (chunk) => {
            chunks.push(chunk);
        });

        req.on('end', () => {

            const fullBody = Buffer.concat(chunks).toString();
            console.log("Raw Body:", fullBody);

            const params = new URLSearchParams(fullBody);
            const bodyObj = Object.fromEntries(params);

            console.log("Parsed Data:", bodyObj);

            res.setHeader('Content-Type', 'text/html');

            res.write('<html>');
            res.write('<head><title>Result</title></head>');
            res.write('<body>');
            res.write('<h1>Form Submitted Successfully</h1>');
            res.write(`<h3>Number 1: ${bodyObj.num1}</h3>`);
            res.write(`<h3>Number 2: ${bodyObj.num2}</h3>`);
            res.write(`<h3>Sum: ${Number(bodyObj.num1) + Number(bodyObj.num2)}</h3>`);
            res.write('</body>');
            res.write('</html>');

            res.end();
        });
    }

    else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }

});

const port = 8000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});