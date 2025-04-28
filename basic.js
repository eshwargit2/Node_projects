const http = require('http');
try{
    const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        'Content-Type':'<text />plain'
    });
    res.end("Hi my name is eshwar"+`<h1>Eshwar</h1>`)
});


server.listen(8000,()=>{
    console.log(`server rinning at http://localhost:8000`);
    
})
}catch(err){
    console.log(err);
    
}