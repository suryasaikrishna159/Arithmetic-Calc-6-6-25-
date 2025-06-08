let firstnum= document.querySelector("#first");
let secondnum= document.querySelector("#second");
let multiply= document.querySelector("#mul");
let divide= document.querySelector("#div");
let msg=document.querySelector("#msg");

multiply.addEventListener("click",(e)=>{
    e.preventDefault();
    let ans=firstnum.value*secondnum.value;
    msg.innerText=" "+ans;
})

divide.addEventListener("click",(e)=>{
    e.preventDefault();
    let ans=(firstnum.value)/(secondnum.value);
    msg.innerText=" "+ans;
})

