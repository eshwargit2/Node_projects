
const http=require('http');

const fs=require('fs');


 const server =http.createServer((req,res)=>{
     
    const url=req.url;
    const method=req.method;
        if(url==='/'){

    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Enter form detail</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="email"><input type="submit" name="send"></form></body>')
    res.write('</html>');
    return res.end();

        }

    if(url==='/message' && method=='POST'){
    

        const body =[];

        req.on('data',(sam)=>{
           
            body.push(sam)
            console.log(sam);

        })
 

        req.on('end',()=>{
            const parstbody = Buffer.concat(body).toString();

           const msg=parstbody.split('=');
           fs.writeFileSync('hello.txt',msg[1]);
        })

        fs.writeFileSync('hello.txt','Sample text');
        res.setHeader('Location','/');
        res.statusCode =302;
        return res.end();

    }
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Sample</title></head>');
        res.write('<body><h1> hi Node j Server </h1></body>')
        res.write('</html>');
   
    
   
});


server.listen(3000)