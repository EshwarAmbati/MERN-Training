// const { isUtf8 } = require('buffer');
// const fs = require('fs')
// fs.readFile('text.txt',(err,data)=>{
//     if(err) console.log(err);
//     else console.log("Sucessfully read");
//     console.log(data);
// })

// const data = fs.readFileSync('text.txt');
// let res=data.toString();
// console.log(res);
// const data = fs.readFileSync('text.txt',{encoding:"utf-8"});
// console.log(data);

//Writefile

// const fs = require('fs');
// const res = fs.writeFileSync('newfile.txt',"Contom your textm from nodejs");
// console.log(res);

// const fs = require('fs');
// const res = fs.writeFileSync('newfile.txt',"Contom your textm from nodejs",(err,data)=>{
//     console.log(err,data);
// });


//promises

const { error } = require('console');
const { write } = require('fs');
// const fsPromises = require('fs/promises');
// fsPromises.readFile('text.txt',{encoding:'utf8'}).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// const fsPromises = require('fs/promises');
// fsPromises.writeFile('text.txt','Dummy text').then((data)=>{
//     console.log("write done");
// }).catch((error)=>{
//     console.log(error);
// })

// const fsPromises = require('fs/promises');
// fsPromises.appendFile('appendFile.txt','Dummy text').then((data)=>{
//     console.log("Append done");
// }).catch((error)=>{
//     console.log(error);
// })

// const fsPromises = require("fs/promises");
// const pr = fsPromises.readFile('data.json');

// pr.then((bf)=>{
//     const text = bf.toString();
//     const arr = JSON.parse(text);
//     console.log(text);
//     console.log(arr);
// }).catch(console.log());
// pr.then((bf)=>{
//     const text = bf.toString();
//     const arr = JSON.parse(text);
//     let mt =0,st =0;
//     for(let i=0;i<arr.length;i++){
//         mt+=arr[i].mathsScore;
//         st+=arr[i].ScienceScore;
//     }
//     console.log("maths Score is",mt);
//     console.log("maths Score is",st);

// }).catch(console.log());

const fsPromises = require("fs/promises");
const pr = fsPromises.readFile('data.json');
pr.then((bf)=>{
    const text = bf.toString();
    const arr = JSON.parse(text);

    const obj = getObjectById(23, arr);
    console.log(obj);
}).catch(console.log)
