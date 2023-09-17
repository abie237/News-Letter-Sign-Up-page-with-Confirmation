let form = document.querySelector('.form');
let main = document.querySelector('main');
let succesForm = document.querySelector('.success');
let successBtn = document.querySelector(".success button");
let emailMsg = document.querySelector('.validEmail');
// console.log(emailMsg);
// console.log(successBtn);
// console.log(main);
// console.log(form);
let email = document.querySelector('.email');
// console.log(email);

form.addEventListener("submit",e=>{
    e.preventDefault();
    const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailVal = email.value.trim();

    if(!emailRegEx.test(emailVal)){
        form.classList.add("err");
    }
    else{
        form.classList.remove("err");
    //    email.value = "";
    //    email.focus();

    main.style.display = "none";
    succesForm.style.display = "flex";
    emailMsg.innerHTML = emailVal;
    }
})

successBtn.addEventListener('click', e=>{
    main.style.display = "grid";
    succesForm.style.display = 'none';
    email.value = "";
    email.focus();

})

