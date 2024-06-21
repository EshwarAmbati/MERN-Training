// console.log('working..')

// let age = 18;
// let username = 'Ajay';
// let username2 ='Devensh';

// console.log(username);
// console.log(username2);

// let n = username+' '+username2;
// console.log(n);
// let a = username + 10;
// let b = 10 + username;

// let c = username - 10;
// console.log(a);
// console.log(b);
// console.log(c);

// let r = 10+12+14+'hello';

// console.log(r);
// console.log(typeof(r));


// let v1 = 'hello'
// let v2 = 'hello'

// if(v1==v2){
//     console.log("YES")
// }
// else{
//     console.log('NO')
// }

// if(v1 === v2){
//     console.log('YES')
// }
// else{
//     console.log("No")
// }

// //function

// function printHello(x){
//     console.log('Hello',x);
// }

// //function invocation
// printHello("Ajay");

// //function assingnment

// const ph = function print(x){
//     console.log('Hi',x);
// }

// ph('Ajay');

// // anonymous function assingnment

// const phi = function (x){
//     console.log('Hi',x);
// }

// phi('Ajay');
// //arrow function
// const phii =(x)=>{
//     console.log('Hii',x);
// }
// phii('Ajay');



// function sum(a,b){
//     const ans = a+b;
//     console.log(ans);
// }

// const mul =(a,b)=>{
//     const ans = a*b;
//     console.log(ans);
// }

// sum(10,10);
// mul(20,10);

// const a= 10;
// if(a<20){
//     if(a>10){
//         console.log("it is greater than 10");
//     }
//     else{
//         console.log("it is less then 10");
//     }
// }

// function printOrSum(...args) {
//     if (args.length === 1) {
//         console.log(args[0]);
//     } else if (args.length === 2) {
//         const sum = args[0] + args[1];
//         console.log(sum);
//     } else if (args.length === 3) {
//         const sum = args[0] + args[1] + args[2];
//         console.log(sum);
//     } else {
//         console.log("Invalid number of arguments. Please pass 1, 2, or 3 arguments.");
//     }
// }


// printOrSum(5); 
// printOrSum(3, 7); 
// printOrSum(1, 2, 3);

//object
// const obj1 = new Object();
// const obj2 ={};

// obj1.name = 'Likhilesh';
// obj2.name = 'Ajay';

// console.log(obj1);
// console.log(obj2);

// const obj ={
//     "name":"Ajay",
//     "age":30,
//     "City":"Jaipur",
//     10:"Ten",
//     "Ten":10,
//     20:200,
// };
// console.log(obj);
// console.log(obj.name);
// console.log(obj[20]);

// const input = prompt();
// console.log(obj[input]);


// const arr = new Array();
// const arr = ["one","two",100];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);


// const o1 = {
//     name: 'Aman',
// }
// const o2 = {
//     name: 'Aman',
// }
// console.log(o1);
// console.log(o2);

// // o1 ={
// //     name:"EShwar",
// // }
// // console.log(o1);
// if(o1.name==o2.name){
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }



// let o1 = {
//     name:'Aman',
// }

// let o2 = o1;

// o2.name = "EShwar";
// console.log(o1);
// console.log(o2);

// let u1 ="Akshay"
// let u2 = u1;
// u2 = "Raj";
// console.log(u1);
// console.log(u2);

//-----------------------------------------------------------------
// const arr =["fruits","apple","Bananna","Orange"];
// const arr ={
//     name:'Fruits',
//     value:'Apple'
// }

// for(let i =1;i<10;i++){
//     console.log(i);
// }

// for(let i in arr){
//     console.log(i)
// }
// for(let i of arr){
//     console.log(i);
// }

//--------------------------------------------------------------------

// const obj = {
//     id:'12105458',
//     name:'Fruits',
//     3:'three'
// }

// const arr = ['apple','bananna','mango','orange'];

// // for(let i=0;i<4;i++){
// //     console.log(obj[i]);
// // }

// for(let i in obj){
//     console.log(i,obj[i]);
// }
// // for(let i of arr){
// //     console.log(i)
// // }
//-------------------------------------------------------------------------


//DOM MANUPLATION
// console.log("hello");
// console.dir(document);
// const div = document.getElementsByTagName('div');
// div[0].innerText = 'D O M';

// const d1 = document.getElementsByClassName('container')
// console.dir(d1);
// d1[0].style.color = "blue";
// d1[0].style.backgroundColor = "red";

const d1 = document.querySelectorAll('div');
d1[1].style.color='brown';

const d1 = document.querySelectorAll('div');
d1[1].style.color='brown';














