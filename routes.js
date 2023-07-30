const fs = require('fs');

// Create the server and handle requests
const requesthandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('hello.txt', { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
                res.statusCode = 500; // Internal Server Error
                res.end('Internal Server Error');
            } else {
                res.write('<html>');
                res.write('<head><title>Enter a message</title></head>');
                res.write('<body>');
                res.write(data); // Display the content of hello.txt
                res.write('</body>');
                res.write('<body><form action="/message" method="POST">');
                res.write('<input type="text" name="message">');
                res.write('<button type="submit">Send</button>');
                res.write('</form></body>');
                res.end('</html>');
            }
        });

    } else if (url === '/message' && method === 'POST') {
        const body = [];

        // Collect the data from the request body
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // When all data is received
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            // Write the message to hello.txt
            fs.writeFile('hello.txt', message, (err) => {
                if (err) {
                    console.log(err);
                    res.statusCode = 500; // Internal Server Error
                    res.end('Internal Server Error');
                } else {
                    // Redirect back to the homepage after writing the file
                    res.statusCode = 302; // Found (redirect)
                    res.setHeader('Location', '/');
                    return res.end();
                }
            });
        });
    } else {
        // Handle other routes (404 Not Found)
        res.statusCode = 404;
        res.end('Not Found');
    }
};

module.exports={
    handeler:requesthandler,
    sometext:'sometext'
};