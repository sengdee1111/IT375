const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get('/',(req, res)=>{
    res.send('Hello Page');
});
app.get('/overview',(req, res)=>{
    res.send('overview Page');
});
app.get('/product',(req, res)=>{
    res.send('product Page');
});
app.get('/api/user',(req, res)=>{
    const userData = {id:15,name:'Suchada'};
    res.send(userData);
    });

    app.listen(port,'127.0.0.1',()=>{
        console.log(`Listening to request on port ${port}`);
});