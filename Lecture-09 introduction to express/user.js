const fs = require('fs');

const requestHandler = (req, res) => {

    if (req.url === '/') {

        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Form</title></head>');
        res.write('<body>');
        res.write('<h1>Form</h1>');
        res.write('<form action="/submit" method="post">');
        res.write('<label for="name">Name:</label>');
        res.write('<input type="text" id="name" name="name" required>');
        res.write('<br><br>');
        res.write('<label for="email">Email:</label>');
        res.write('<input type="email" id="email" name="email" required>');
        res.write('<br><br>');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

   

    else if (req.url.toLowerCase() === '/submit' && req.method === 'POST') {

        const chunks = [];

        req.on('data', (chunk) => {

            console.log(chunk);
            chunks.push(chunk);

        });

        req.on('end', () => {

            const fullBody = Buffer.concat(chunks).toString();

            console.log(fullBody);

            const parseData = new URLSearchParams(fullBody);

            const bodyOBJ2 = Object.fromEntries(parseData);

            console.log(bodyOBJ2);

            fs.writeFileSync('data.txt', JSON.stringify(bodyOBJ2));

            res.statusCode = 302;
            res.setHeader('Location', '/');

            return res.end();
        });
    }
};

module.exports = requestHandler;