const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

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

        else if (req.url.toLocaleLowerCase() === '/submit' && req.method === 'POST') {


            const chunks = [];
            req.on('data',chunk=>{

                console.log(chunk);
                chunks.push(chunk);

            })
            req.on('end',()=>{
                const fullBody = Buffer.concat(chunks).toString();
                console.log(fullBody);
               const parseData = new URLSearchParams(fullBody);

            //    const bodyOBJ= {};
            //    for (const [key ,val] of parseData.entries()){
            //     bodyOBJ[key] = val;
            //    }



            //    console.log(bodyOBJ);


            // we same print data by below method

               const bodyOBJ2 =Object.fromEntries(parseData);
               console.log(bodyOBJ2)


            })

            fs.writeFileSync('user.txt', 'Shivam devraj');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();


            
        }

   

    

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});