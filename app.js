const http = require('http');

function rqListener(req, res) {
 
  res.setHeader('Content-Type', 'text/plain');
  
  
  console.log("Krushnakant");

  
  res.end("Krushnakant");
}


const server = http.createServer(rqListener);
server.listen(4000, () => {
  console.log('Server is running on port 4000.');
});
