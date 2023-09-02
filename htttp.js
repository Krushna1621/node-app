// const http = require('http');
// const fs=require('fs')
// function rqListener(req, res) {
//     const url = req.url;

//     if (url === '/') {
//         res.setHeader('Content-type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/welcome" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//         res.end('</html>');
//     } else if (url === '/welcome') {
//         res.setHeader('Content-type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Welcome</title></head>');
//         res.write('<body><h1>You are welcome</h1></body>');
//         res.end('</html>');
//     } else {
//         res.setHeader('Content-type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Login</title></head>');
//         res.write('<body><h1>You have successfully logged in</h1></body>');
//         res.end('</html>');
//     }
// }

// const server = http.createServer(rqListener);
// server.listen(4000, () => {
//     console.log("server is running on 4000 port");
// });
