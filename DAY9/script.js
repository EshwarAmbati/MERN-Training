// const student ={
//     name : 'Ambati',
//     rollno: '1210',
//     city : 'Bhimavaram',
// }

// const {name} = student;
// console.log(name);

// const fruits = ['Bananna', 'Apple', 'Orange'];
// console.log(fruits[0]);
// // const [i1,i2] = fruits;
// const [,i1,i2] = fruits;
// console.log(i1,i2);

// const student = {
//     userName: "eshwar",
//     rollno:'1234',
//     city:'delhi',
//     hobbies:['Painting', "Styling", 'Drawing'],
// }

// const {hobbie}= student;
// console.log(hobbie);

//rest --> to pack the values
//spread --> to unlock the values

// const s1 = {
//     userName: "eshwar",
//     rollno:'1234',
//     city:'delhi',
//     hobbies:['Painting', "Styling", 'Drawing'],
// }

// const s2 = {...s1};
// s2.userName = 'Ajay';
// s2.hobbies[0] = 'Playing'; 
// console.log(s1)
// console.log(s2)

//code
// function sum(...arr){
//     arr.reduce((acc,a,b,c)=>{
//         console.log(a,b,c);
//     })
// }
  

// // sum() //-->0
// // sum(10) //-->10
// // sum(10,20) //-->30
// sum(10,20,30) //-->60
// // sum(10,20,30,40) //-->100

// function sum(...arr){
//     const res = arr.reduce((acc,elem,idx)=>{
//         console.log(acc,elem,idx);
//         return acc+elem;
//     },-1);
//     console.log('-->',res);
// }

// sum(10,20,11);

// function getData(){
//     const pr = fetch('//dummyjson.com/test');
//     pr.then((res)=>{
//         const pr2 = res.json();
//         pr2.then((data)=>{
//             console.log(data);
//         });
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// getData();
// console.log('start');

// async function getData(){
//     console.log("inside");
//     const res = await fetch('http://dummyjson.com/users');
//     console.log('step1');
//     const data = await res.json();
//     console.log(data);
// }
// getData();
// console.log('end');

function consoleLog(){
    console.log('done')
}
const ans = ['1','2','3','4'].map(consoleLog)