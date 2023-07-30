const http=require('http')
const fs=require('fs')
function rqListener(req,res){
    const url=req.url;
    const method = req.method;
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>Enter a message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.end('</html>') 
    }    
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY')
        res.statusCode=302;
        res.setHeader('Location','/')
         return res.end()
    }



   
}


const server=http.createServer(rqListener)
server.listen(4000,()=>{
    console.log("server is runnig on 4000 port")
})