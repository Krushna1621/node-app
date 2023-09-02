const http = require('http');
const requestHandler = require('./routes');

const port = 4000;
const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
