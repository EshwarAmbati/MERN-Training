const http = require('http');
const fsPromises = require('fs/promises');

const app = http.createServer(async(req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    const route = (req.url);
switch(route){
    case '/':{
        const stream = await fsPromises.readFile('homepage.html');
        res.end(stream);
        break;
    };
    case '/products':{
        const stream = await fsPromises.readFile('product.html');
        res.end(stream);
        break;
    };
    default:{
        res.end("oops! page not found");
    }
}

});
app.listen(2000);
