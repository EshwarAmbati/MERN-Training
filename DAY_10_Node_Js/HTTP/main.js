// const http = require('http');
// const app = http.createServer((req,res)=>{
//     res.write('Welcome 123');
//     res.end();
// });
// app.listen(2000);


//---------------------------------
// const http = require('http');
// const fsPromises = require('fs/promises')
// const app = http.createServer(async(req,res)=>{
//     //res.setHeader('Content-type','text/plain');
//     res.writeHead(200,{
//         'Content-Type': 'text/html'
//     });
//     const stream = await fsPromises.readFile('./homepage.html');
//     res.end(stream);
// });
// app.listen(2000,()=>{
//     console.log("Server start");
// });

//----------------------------------------
const http = require('http');
const fsPromises = require('fs/promises')

const app = http.createServer(async(req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    const route=(req.url);
    switch(route){
        case "/":{
            const stream = await fsPromises.readFile('homepage.html');
            res.end(stream);
            break;
        };
        case "/products":{
            res.end("This is product page");
            break;
        };
        default:{
            res.end("oops! page is not found");
        }
    }
    
    
});
app.listen(2000);





