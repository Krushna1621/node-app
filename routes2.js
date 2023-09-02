// const http = require('http');

// function rqListener(req, res) {
//   // Set the response content type to HTML
//   res.setHeader('Content-Type', 'text/html');
  
//   // Log your name to the console
//   console.log("Krushnakant");

//   const url = req.url;

//   // Check the URL and send the appropriate response
//   if (url === '/home') {
//     res.end("Welcome home");
//   } else if (url === '/about') {
//     res.end("Welcome to About Us page");
//   } else if (url === '/node') {
//     res.end("Welcome to my Node.js project");
//   } else {
//     // If the URL doesn't match any of the above cases, send a default response
//     res.end("Invalid URL");
//   }
// }

// // Create the server and listen on port 4000
// const server = http.createServer(rqListener);
// server.listen(4000, () => {
//   console.log('Server is running on port 4000.');
// });
