// console.log('start');
// function abc(x){
//     console.log(x*2);
//     temp(x/2);
// }
// abc(8);
// console.log('mid');
// function temp(x){
//     console.log(x/2);
// }
// console.log("End");
//------------------------------------
// function xyz(){
//     console.log('Inside XYZ');
//     function temp(x){
//         console.log(x*x);
//     }
//     console.log("end");
//     temp(12);
// }
// console.log('start');
// xyz();
//---------------------

// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click',cd);

// function cd(){
//     console.log('Button Clicked');
// }
//-------------------------------
// console.log('start');
// const input = document.getElementsByTagName('input')[0];

// const cd=function abc(ev){
//     console.log('Input is',ev.target.value);
// }
// input.addEventListener('keyup',cd);
// console.log('end');
//---------------------------------

// const delay = 1000;
// const cb =()=>{
//     console.log('cb called');
// }
// setTimeout(cb,delay);
// console.log('end');

//------------------------

// console.log('start');
// setTimeout(()=>{
//     console.log('CB Called');
//     setTimeout(()=>{
//         console.log('Internal CB Called');
//     },1000);
// },1000);
//---------------------------

// console.log('start');

// setTimeout(()=>{
//     console.log("A");
// },0);
// console.log("MID");
// function abc(){
//     console.log('B')
// }
// function efg(){
//     console.log("C");
//     setTimeout(()=>{
//         console.log("D");
//     },0);
// }
// setTimeout(abc,0);
// efg();
// console.log("END");

//micro queu -- promise queu

// const pr = fetch('https://api.github.com/users/likbalpande');
// console.log(pr);
// const cb1 = () =>{
//     console.log("Fetch +");
// }
// const cb2 = () =>{
//     console.log("Fetch -");
// }
// pr.then(cb1).catch(cb2)
//--------------------------------
// const pr = fetch('https://api.github.com/users/likbalpande');
// pr.then((res)=>{
//     console.log(res);

//     const pr2=res.json();
//     pr2.then((data)=>{
//         console.log(data)
//     })

// }).catch((e)=>{
//     console.log('Fetch -',e);
// })
//----------------------------------------
// const req=fetch('https://dummyjson.com/products');
// req.then((result)=>{
//     const convertData = result.json();
//     convertData.then((data)=>{
//         console.log(data);
//     })
// }).catch((error)=>{
//     alert("error");
// })

// const renderUI = (data)=>{
//     const products = data.products;
// }

// const renderUI = (data)=>{
//     console.log('**',data);
// }
//------------------------------------------

const root = document.getElementById('root')
const request=fetch('https://dummyjson.com/products');
request.then((result)=>{
    const convertData = result.json();
    convertData.then(renderUI);
})
.catch((error)=>{
 console.log();
});

const renderUI = (data)=>{
    const products = data.products;
    for(let i=0;i<products.length;i++){
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML=`
            <h3>${products[i].title}</h3>
            <p> Rs ${products[i].price}</p>
            <img src="${products[i].thumbnail}"/>
            
        `;
        root.appendChild(card);
    }
}


//macro queu