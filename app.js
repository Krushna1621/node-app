const http=require('http')
const routes=require('./routes.js')
const server=http.createServer(routes)
server.listen(3000,()=>{
  console.log("server runnig on 3000 port")
})