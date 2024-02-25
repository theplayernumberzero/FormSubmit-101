const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value == "" || emailInput.value == ""){
        msg.classList.add("error");
        msg.innerHTML="Please fill all field";

        setTimeout(() => msg.remove(), 2000);
    }else{
        msg.classList.add("success");
        msg.innerHTML="Submit Success";

        setTimeout(() => msg.remove(), 2000);

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`Name: ${nameInput.value}, Email:${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = "";
        emailInput.value = "";
    }
}