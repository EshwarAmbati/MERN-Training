function handleSubmit(e){
  e.preventDefault();
  const arr= e.target;
  const name=  arr[0].value;
  const email= arr[1].value;
  const contact=arr[2].value;
  
const form = document.getElementsByTagName("form")[0];
 form.style.display="none";
 if(contact.length==10){
     description(name,email,contact);
 }
 else{
    const span = document.createElement('span');
    const root = document.getElementById('root');
    root.appendChild(span);
    span.innerHTML = `Invalid Contact Number`;
 }

}

const description=(n,e,c)=>{
    const root = document.getElementById('root');
    root.setAttribute('class', 'description');
    root.innerHTML =`
    <h3 class="name">Name : ${n}</h3>
    <h4 class="email">Email: ${e}</h4>
    <h4 class="contact">Contact: ${c}</h4>`;

}

