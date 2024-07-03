// const parent = document.getElementById('root');
// const root = document.getElementById("root");
    // const ul = document.createElement("ul");
    // ul.style.width = "400px";
    // ul.style.padding = "24px";
    // ul.style.backgroundColor = "yellow";
    // ul.style.margin = "48px auto";
    // ul.style.display = "block";
    
    // const li1 = document.createElement("li");
    // li1.style.margin = "12px";
    // li1.style.color = "brown";
    // li1.textContent = "Item 1";

    // const li2 = document.createElement("li");
    // li2.style.margin = "12px";
    // li2.style.color = "brown";
    // li2.textContent = "Item 2";

    // ul.appendChild(li1);
    // ul.appendChild(li2);

   
    // root.appendChild(ul);

    //----------------------------------------------------------



// // const parent = document.getElementById('root');
// const root = document.getElementById("root");
//     const ul = document.createElement("ul");
// ul.setAttribute(style, width = "400px",
//             padding = "24px",
//             backgroundColor = 'yellow',
//             margin="48px auto",
//             display="block")
// //     }
//     const li1 = document.createElement("li");
//     li1.style = {
//         margin:"12px",
//         color : "brown",
//     }
//     const li2 = document.createElement("li");
//     li2.style = {
//         margin:"12px",
//         color : "brown",
//     }
//     li1.innerHTML = 'Item 1'
//     li2.innerHTML = 'Item 2'
//     ul.appendChild(li1);
//     ul.appendChild(li2);

   
//     root.appendChild(ul);
//----------------------------------------------------------------------


// const parent = document.getElementById('root');
// const listItem1 = React.createElement("li",{},"Item 1");
// const listItem2 = React.createElement("li",{},"Item 2");
// const list = React.createElement("ul",{},[listItem1, listItem2]);

// const root = ReactDOM.createRoot(parent);
// root.render(list);

// const d1 = document.createElement("div");
// console.dir(d1);
// console.log(d1);
// const d2 = React.createElement("div",{},"")
// console.dir(d2);
// console.log(d2);

// const parent = document.getElementById('root');
// // const listItem1 = React.createElement("li",{},"Item 1");
// const listItem1 = <li>Item111</li>
// // const listItem2 = React.createElement("li",{},"Item 2");
// const list = <ul>{listItem1}</ul>
// // const list = React.createElement("ul",{},[listItem1, listItem2]);
// const root = ReactDOM.createRoot(parent);
// root.render(list);


//---------------------------React with JSX all CDNS----------------------------//



const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const textHello = <div>Hello</div>;
const TextForm = ()=> {
 return <h3>Form</h3>
}
const TextReact = ()=> <h3>React</h3>;
const container = (
    <div>
        {textHello}
        {/* {TextReact()} */}
        <TextForm/>
        {/* {TextForm()} */}
        <TextReact/>
    </div>
);
root.render(container);
