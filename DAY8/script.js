// console.log("start")
// const pr = new Promise((resolve, reject)=>{
//     let flag = true;
//     if(flag===true){
//         setTimeout(()=>{
//             resolve(['apple','mango']);
//         },4000);
//     }    
//     else{
//         reject("not done");
//     }
// });
// console.log("mid")
// setTimeout(()=>{
//     console.log("DONE");
// },4000);

// pr.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })
// console.log('end')
//----------------------------
// let cnt=0;
// let id;

// const cb = ()=>{
//     cnt++;
//     console.log("done",cnt);
//     if(cnt==4){
//         clearInterval(id);
//     }
// };
// const time = 1000;
// id = setInterval(cb,time)
//--------------------------------


// const arr = ['apple','orange','fruits','banana'];

// console.log(arr.length);
// const str = arr.toString();
// console.log(str);
// // console.log(arr.at(0));
// const str2 = arr.join(',');
// console.log(str2);

// console.log(arr.shift());
// console.log(arr.unshift('kiwi'));
// console.log(arr);

// const arr1 = [1,2,3,[4,[5]],[6]];

// console.log(arr1.flat());
// console.log(arr1);

// const arr1 = ["A","B","C","D"];
// console.log(arr1.splice(0,1));
// console.log(arr1.splice(3,1));
// console.log(arr1.splice(1,2));
// console.log(arr1);

// const res1=arr1.forEach((a,b,c)=>{
//     // console.log(a,b,c);
//     return "OK";
// })
// const res2=arr1.map((ele,b,c)=>{
//     // console.log(a,b,c);
//     return ele;
// })
// if(arr==res2){
//     console.log("OK");
// }
// else{
//     console.log("Not Ok");
// // }


// const arr = ["A","BD","CD","DR"];

// const res2= arr.filter((a,b,c)=>{
//     if(a.length==1){
//         return true;
//     }
//     return false;
// })
// console.log(res2);

const arr3 = ["0",1,2,3];z
const res = arr3.reduce((a,b)=>a+b);
console.log(res)