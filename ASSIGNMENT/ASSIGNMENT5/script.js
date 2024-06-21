const ur = fetch('http://dummyjson.com/users');
ur.then((res)=>{
    const ur2 = res.json();
    ur2.then((data)=>{
        createUI(data);
    });
}).catch((err)=>{
    console.log(err);
});
const main = document.getElementById("root");
function createUI(data){
    const users = data.users;
    main.innerHTML=``;
    for(let i=0;i<users.length;i++){
        const newCard = document.createElement('div');
        newCard.innerHTML = `
        <div>
            <h3>${users[i].firstName}</h3>
            <img src="${users[i].image}">
            <p>${users[i].university}</p>
        </div>
        `;
        main.appendChild(newCard);
    }
}

function searchUsers(e){
    const searchText = e.target.value;
    const ur = fetch(`http://dummyjson.com/users/search?q=${searchText}`);
    ur.then((res)=>{
        const ur2 = res.json();
        ur2.then((data)=>{
            createUI(data);
        });
    });
}