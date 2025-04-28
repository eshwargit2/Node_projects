//npm init j - for package.json
//npm install express - node modules and express

const express = require('express');

const app=express();

app.get('/sample',(req, res)=>{
    res.send('its server for express javascript');
});

//example api test
app.get('/api/86', async (req, res)=>{
     await res.send({
        name:'Soundhareshwaran S.R',
        age:18,
        college:'VMKVEC Enginnering college',
        address:'Salem',
        number:8925045931

    });
})

app.post('/user',(req, res)=>{
    const username= req.body.username;
    res.send(`user entered : ${username}`)
})

app.listen(3000,()=>{
    console.log('server running is http://localhost:3000');
    
})