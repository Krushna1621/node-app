// const http=require('http')
// const fs=require('fs')
// function rqListener(req,res){
//     const url=req.url;
//     const method = req.method;
//     if(url==='/'){
//         fs.readFile('hello.txt',{encoding:"utf-8"},(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 res.write('<html>')
//                 res.write('<head><title>Enter a message</title></head>')
//                 res.write(`<body>${data}</body>`);
//                 res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
//                 res.end('</html>') 
//             }
//         })
      
//     }    
//     if(url === '/message' && method === 'POST'){
//         const body=[];
//         req.on('data',(chunk)=>{
//             console.log(chunk)
//             body.push(chunk) 
//         });
//         req.on('end',()=>{
//             const parsedBody=Buffer.concat(body).toString();
//             const message=parsedBody.split('=')[1];
//             fs.writeFileSync('hello.txt',message,(err)=>{
//                 if(err){
//                     console.log(err)
//                 }
//             })
//         })
       
//         res.statusCode=302;
//         res.setHeader('Location','/')
//          return res.end()
//     }



   
// }


// const server=http.createServer(rqListener)
// server.listen(4000,()=>{
//     console.log("server is runnig on 4000 port")
// })