const http= require('http');

const server= http.createServer(
    (req,res)=>{
        if(req.url == '/' ){
            res.write('Hello World');
            res.end();
        }
        if(req.url == '/api/departments'){
            res.write(JSON.stringify([{id:1, name:'Samanwita'},{id:2, name:'Nanda'}]));
            res.end();

        }
    }
);


const PORT= 3000;
server.listen(PORT);

//server.on('connection', (socket)=>{
    //console.log('New Connection...');
//});

console.log(`Listening to port ${PORT}`);