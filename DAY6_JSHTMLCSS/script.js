// const s2 = document.getElementsByTagName('section');
// const secondSection = s2[1];
// const title = secondSection.getElementsByTagName('h1');
// title[0].innerText = "JS CallBack";

// const title = document.getElementsByTagName('section')[1].getElementsByTagName('h1');
// title[0].innerText = 'Js CallBack';

// const title = document.querySelector('section>h1:first-child');
// title.style.color = 'brown';

// const title = document.querySelector('section:last-of-type>h1');
// title.style.color = 'brown';
// title.className= 'cs1';
// title.setAttribute('class','cs22');
// title.setAttribute('name','prajwal');


// const pr = document.createElement('p');
// pr.innerText = "NEW LINE FROM DOM!";
// const se = document.getElementsByTagName('section')[0];
// // se.appendChild(pr);
// // se.append("Hello World");
// se.prepend(pr);
// // se.appendChild("Hello world");//not working

// function printhello(){
//     console.log('hello.....')
// }

// function inputClicked(){
//     console.log('Inputchanged.....')
// }
// function inputKeydown(e){
//     console.log('InputKeydown.....');
//     console.log(e.target.value);
// }
// function inputChanged(e){
//     console.log('inputChanged.....')
//     console.log(e.target.value);

// }

// function inputkeyup(e){
//     console.log('InputKeyup.....');
//     console.log(e.target.value);
// }

// function handleuserName(e){
//     console.log("Name",e.target.value)
// }
// function handleuserAge(e){
//     console.log("Name",e.target.value)
// }
// function handlesubmit(e){
//     e.preventDefault();
//     console.dir(e.target)
    

//     const userName = e.target[0].value;
//     const userAge = e.target[1].value;
//     console.log(userName,userAge);


//     if(userAge<30){
//         document.body.append("vallidation sucessfully!");
//     }
//     else{
//         document.body.append("age is higher");
//     }
// }

//--------------------------------------------
// const handleSubmit =(e)=>{
//     e.preventDefault();
//     const arr = e.target;
//     const name = arr[0].value;
//     const email = arr[1].value;
//     renderCard(name, email);

// }

// const renderCard = (n,e) =>{
//     const root = document.getElementById('root');
//     root.innerHTML = `
//     <h3 class = 'name'>Name is: ${n}</h3>
//     <h3 class = 'email'>Email is: ${e}</h3>
// `;
// }

//--------------------------------------------


// const handleSubmit =(e)=>{
//     e.preventDefault();
//     const arr = e.target;
//     const name = arr[0].value;
//     const email = arr[1].value;
//     const forms = document.getElementsByTagName('form')[0];
//     forms.style.display = "none";
//     renderCard(name, email);

// }

// const renderCard = (n,e) =>{
//     const root = document.getElementById('root');
//     root.setAttribute('class','card');
//     root.innerHTML = `
//     <h3 class = 'name'>Name is: ${n}</h3>
//     <h3 class = 'email'>Email is: ${e}</h3>
// `;
// }


// const showResult = (res)=>{
//     console.log(res);
//     const root = document.getElementById('root');
//     root.innerText = res;
// }

// const printPretty = (res)=>{
//     const root = document.getElementById('root');
//     root.style.color = 'green';
//     root.innerText = res;
// }

// const sum = (a,b,fn) =>{
//     const res =a +b;
//     fn(res);
// }
// const rr = sum(10,20,printPretty);
//----------

// const rr = sum(10,20);
// showResult(rr);
// printPretty(rr);
//------------

//callbackk-----------------------------
// function payWithRazorPay(){
//     console.log('Payment processing on RazoPay');
// }
// function payWithPayTM(){
//     console.log('Payment processing on PayTm');
// };

// const userDetails = (name, age, seat, processPayment) =>{
//     console.log(`Booking for ${name} whose age is ${age}`)

// if(true){
//     processPayment();
// }
// else{
//     console.log('error')
// }

// };

// userDetails('Eshwar', 22, 'SL', payWithPayTM);


//Array Functions

// const arr = [10,20,30];
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(12);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push(14);
// console.log(arr);

// const arr = ["Fruits",'Apple', 'Mango'];
// const printValues = (a, b, c) =>{
//     console.log('Value is:',a);
//     console.log('Index is:',b);
//     // console.log('array is:',c);
//     console.log('-------------')

// }
// // for(let i=0;i<arr.length;i++){
// //     printValues(arr[i],i,arr);
// // }

// arr.forEach(printValues);

// const arr = [20,10,21,30];
// // let sum =0;
// // arr.forEach((a)=>{
// //     sum+=a;
// // })
// // console.log(sum);

// // const isEven = (x) =>{
// //     if(x%2==0) return true;
// //     else return false;
// // }
// const res = arr.filter((x)=>{
//     if(x%2==0) return true;
//     else false;
// });
// console.log('Res:', res);



const words = ['happy','square','confidence','mystery','scale','joyous'];

const cd = words.filter((x)=>{
    if(x.length>5) return true;
    else false;
});

console.log(cd);





